"use client";
import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

/* Envuelve contenido y lo revela al entrar en viewport. Respeta prefers-reduced-motion. */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
