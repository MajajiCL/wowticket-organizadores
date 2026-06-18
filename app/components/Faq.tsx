"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { Plus } from "./icons";
import styles from "./Sections.module.css";

/* Fuente oficial: Preguntas Frecuentes (texto verbatim) */
const FAQS = [
  {
    q: "¿Cuál es el costo por usar Wowticket?",
    a: "Nuestra comisión es del 10%, la más competitiva del mercado. No hay costos ocultos ni cargos por configuración. Solo pagas cuando vendes.",
  },
  {
    q: "¿Cuándo recibo el dinero de mis ventas?",
    a: "Recibes el dinero recaudado directamente en tu cuenta bancaria en un plazo de 24 horas hábiles después de finalizado tu evento.",
  },
  {
    q: "¿Puedo vender entradas con asientos numerados?",
    a: "Sí, nuestra herramienta de Mapping de Asientos te permite crear mapas interactivos de tu recinto para vender asientos, mesas y sectores numerados de forma fácil y visual.",
  },
  {
    q: "¿Cómo funciona el control de acceso con Ticket QR?",
    a: "Cada ticket genera un código QR único e infalsificable. El día del evento, puedes escanear los tickets desde cualquier smartphone con nuestra app de control de acceso, garantizando un ingreso rápido y seguro.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className={`${styles.head} ${styles.headCenter}`}>
          <p className="eyebrow">Preguntas Frecuentes</p>
          <h2 className="section-title">Resolvemos tus dudas</h2>
        </Reveal>

        <div className={styles.faqList}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div className={styles.faqItem} data-open={isOpen}>
                  <button
                    className={styles.faqBtn}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className={styles.faqIcon} aria-hidden><Plus /></span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={styles.faqPanel}
                    style={{ maxHeight: isOpen ? 320 : 0 }}
                    role="region"
                  >
                    <p className={styles.faqInner}>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
