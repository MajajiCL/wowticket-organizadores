"use client";
import { useEffect, useRef, useState } from "react";

/* Cuenta ascendente al entrar en viewport. Respeta prefers-reduced-motion. */
export default function CountUp({ to, suffix = "", prefix = "", duration = 1400 }: {
  to: number; suffix?: string; prefix?: string; duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(to); return; }

    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}
