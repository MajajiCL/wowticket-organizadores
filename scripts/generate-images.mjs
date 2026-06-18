/**
 * Generador de imágenes IA on-brand para WOWTICKET (Google AI Studio / Imagen).
 *
 * Uso:
 *   1) export GEMINI_API_KEY="tu_api_key_de_google_ai_studio"   (o set en Windows)
 *   2) node scripts/generate-images.mjs
 *
 * Genera fotos limpias (sin texto incrustado) en public/logos/ para reemplazar
 * los banners con texto. Edita MODEL o los prompts si quieres otro estilo.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const MODEL = process.env.IMAGEN_MODEL || "imagen-4.0-generate-001";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "logos");

if (!API_KEY) {
  console.error("✗ Falta GEMINI_API_KEY. Exporta tu API key de Google AI Studio y reintenta.");
  process.exit(1);
}

const BRAND = "saturated magenta/fuchsia (#e8217c) neon lighting, cinematic, premium, photorealistic, dark moody background, high detail, no text, no watermark, no logos";

const IMAGES = [
  { file: "ai-hero.jpg",   ratio: "16:9", prompt: `Wide cinematic photo of a massive concert crowd with hands raised at a nightclub/festival, ${BRAND}` },
  { file: "ai-qr.jpg",     ratio: "16:9", prompt: `Close-up of a hand holding a smartphone scanning a glowing QR ticket at an event entrance, blurred concert crowd behind, ${BRAND}` },
  { file: "ai-wowpos.jpg", ratio: "16:9", prompt: `Sleek black portable POS card-payment terminal held at a nightclub bar, contactless payment, bokeh stage lights, ${BRAND}` },
  { file: "ai-app.jpg",    ratio: "16:9", prompt: `Hand holding a modern smartphone showing a dark event-ticketing app UI at a concert, ${BRAND}` },
];

async function generate({ file, ratio, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;
  const body = {
    instances: [{ prompt }],
    parameters: { sampleCount: 1, aspectRatio: ratio },
  };
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`${file}: HTTP ${res.status} ${await res.text()}`);
  const data = await res.json();
  const b64 = data?.predictions?.[0]?.bytesBase64Encoded;
  if (!b64) throw new Error(`${file}: respuesta sin imagen → ${JSON.stringify(data).slice(0, 300)}`);
  await writeFile(join(OUT, file), Buffer.from(b64, "base64"));
  console.log(`✓ ${file}`);
}

await mkdir(OUT, { recursive: true });
console.log(`Generando ${IMAGES.length} imágenes con ${MODEL}…`);
for (const img of IMAGES) {
  try { await generate(img); } catch (e) { console.error("✗", e.message); }
}
console.log("Listo. Revisa public/logos/ai-*.jpg y actualiza los <Image src> si te gustan.");
