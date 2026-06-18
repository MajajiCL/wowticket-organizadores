"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/* Smooth scroll con inercia (Lenis). Respeta prefers-reduced-motion. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    // Soporte de anclas (#) con desplazamiento suave
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el as HTMLElement, { offset: -80 }); }
    };
    document.addEventListener("click", onClick);

    return () => { cancelAnimationFrame(id); document.removeEventListener("click", onClick); lenis.destroy(); };
  }, []);

  return null;
}
