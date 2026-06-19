"use client";
import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import events from "../data/events.json";
import styles from "./Showcase.module.css";

type Ev = { title: string; url: string; img: string; venue?: string };
const LIST = events as Ev[];

/* Carrusel de eventos reales publicados en WowTicket (datos traídos en build/CI).
   Arrastrable libremente (mouse/touch/scroll) + auto-scroll suave que se pausa al interactuar.
   Cada miniatura enlaza a la página oficial del evento. */
export default function EventsMarquee() {
  const ref = useRef<HTMLDivElement | null>(null);
  const st = useRef({ down: false, hover: false, startX: 0, startLeft: 0, moved: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || LIST.length === 0) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const half = () => el.scrollWidth / 2;
    const wrap = () => {
      if (el.scrollLeft >= half()) el.scrollLeft -= half();
      else if (el.scrollLeft < 0) el.scrollLeft += half();
    };

    let raf = 0;
    const tick = () => {
      const s = st.current;
      if (!reduce && !s.down && !s.hover) { el.scrollLeft += 0.45; wrap(); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => { st.current.hover = true; };
    const onLeave = () => { st.current.hover = false; };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") { st.current.down = true; return; } // touch/lápiz: scroll nativo
      const s = st.current;
      s.down = true; s.startX = e.clientX; s.startLeft = el.scrollLeft; s.moved = 0;
      el.classList.add(styles.dragging);
    };
    const onMove = (e: PointerEvent) => {
      const s = st.current;
      if (!s.down || e.pointerType !== "mouse") return;
      const dx = e.clientX - s.startX;
      s.moved = Math.max(s.moved, Math.abs(dx));
      el.scrollLeft = s.startLeft - dx;
      wrap();
    };
    const onUp = () => { st.current.down = false; el.classList.remove(styles.dragging); };
    const onClick = (e: MouseEvent) => { if (st.current.moved > 6) { e.preventDefault(); e.stopPropagation(); } };
    const onScroll = () => wrap();

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (LIST.length === 0) return null;
  const loop = [...LIST, ...LIST];

  return (
    <section className={styles.marqueeSection} aria-label="Eventos en WowTicket">
      <div className="container">
        <Reveal className={styles.marqueeHead}>
          <p className="eyebrow">Eventos en la plataforma</p>
          <h2 className="section-title">Eventos que ya venden con WowTicket</h2>
          <p className={styles.marqueeHint}>Arrastra para explorar · cada evento te lleva a su página</p>
        </Reveal>
      </div>
      <div className={styles.carousel} ref={ref} role="list">
        {loop.map((ev, i) => (
          <a
            key={i}
            href={ev.url}
            target="_blank"
            rel="noopener"
            className={styles.poster}
            title={ev.title}
            draggable={false}
            role="listitem"
            aria-hidden={i >= LIST.length ? true : undefined}
          >
            <img src={ev.img} alt={ev.title} loading="lazy" draggable={false} />
            <span className={styles.posterInfo}>{ev.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
