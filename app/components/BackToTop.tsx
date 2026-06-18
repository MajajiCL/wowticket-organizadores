"use client";
import { useEffect, useState } from "react";

/* Botón flotante "volver arriba". Aparece al scrollear; usa el ancla #top
   (Lenis lo intercepta en este sitio; scroll nativo suave si no). */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top ${show ? "is-visible" : ""}`}
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m6 15 6-6 6 6" />
      </svg>
    </a>
  );
}
