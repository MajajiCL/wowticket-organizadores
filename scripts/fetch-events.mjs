/**
 * Trae los eventos publicados de WowTicket (API oficial) y los guarda en
 * app/data/events.json para alimentar el carrusel. Se ejecuta en cada build
 * (prebuild) y en el GitHub Action programado → la barra queda siempre al día.
 * La API no tiene CORS, por eso se consulta del lado servidor (build/CI), no en el navegador.
 */
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "app", "data", "events.json");
const API = "https://wowticket.cl/events/api/get_events?page=";
const HEADERS = {
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  Referer: "https://wowticket.cl/",
};
const MAX_PAGES = 3; // ~25 eventos como máximo

async function run() {
  const seen = new Set();
  const events = [];
  for (let p = 1; p <= MAX_PAGES; p++) {
    const res = await fetch(API + p, { headers: HEADERS });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const json = await res.json();
    const ev = json?.events || {};
    for (const e of ev.data || []) {
      if (!e.thumbnail || !e.slug || seen.has(e.slug)) continue;
      seen.add(e.slug);
      events.push({
        title: String(e.title || "").trim(),
        url: `https://wowticket.cl/events/${e.slug}`,
        img: `https://wowticket.cl/storage/${e.thumbnail}`,
        venue: [e.venue, e.city].filter(Boolean).join(" · "),
      });
    }
    if ((ev.current_page || p) >= (ev.last_page || p)) break;
  }
  if (!events.length) throw new Error("0 eventos recibidos");
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(events, null, 2));
  console.log(`✓ ${events.length} eventos → app/data/events.json`);
}

run().catch(async (e) => {
  console.warn(`⚠ fetch-events falló (${e.message}). Se mantiene el events.json existente.`);
  try {
    await readFile(OUT);
  } catch {
    await mkdir(dirname(OUT), { recursive: true });
    await writeFile(OUT, "[]");
  }
  process.exit(0); // nunca romper el build por esto
});
