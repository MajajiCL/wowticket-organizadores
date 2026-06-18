"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Close } from "./icons";
import { asset } from "../asset";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`container ${styles.nav}`} aria-label="Principal">
        <a href="#top" className={styles.brand} aria-label="WowTicket.cl — inicio">
          <Image
            src={asset("/logos/wowticket-blanco.png")}
            alt="WowTicket.cl"
            width={56}
            height={42}
            priority
            className={styles.logo}
          />
        </a>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#contacto" className="btn btn-primary">
            Subir evento
          </a>
          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`} role="dialog" aria-modal="true" hidden={!open}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn btn-primary btn-block btn-lg" onClick={() => setOpen(false)}>
          Subir evento
        </a>
      </div>
    </header>
  );
}
