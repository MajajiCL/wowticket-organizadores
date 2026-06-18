import Image from "next/image";
import Reveal from "./Reveal";
import { Beer, Ticket, Coat, Parking, ArrowRight } from "./icons";
import styles from "./Showcase.module.css";

/* Basado en el banner oficial WOWPOS: "Gestiona barra, boletería, guardarropía y estacionamiento desde un solo sistema" */
const CHIPS = [
  { icon: Beer, label: "Barra" },
  { icon: Ticket, label: "Boletería" },
  { icon: Coat, label: "Guardarropía" },
  { icon: Parking, label: "Estacionamiento" },
];

export default function WowposSection() {
  return (
    <section className="section">
      <div className={`container ${styles.band}`}>
        <Reveal className={styles.bandText}>
          <p className="eyebrow">WOWPOS</p>
          <h2>Gestiona todo tu evento desde un solo sistema</h2>
          <p>Barra, boletería, guardarropía y estacionamiento operando con un mismo punto de venta, rápido y con pago sin contacto.</p>
          <div className={styles.posChips}>
            {CHIPS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className={styles.posChip}>
                  <span className="icon-badge"><Icon aria-hidden /></span> {c.label}
                </div>
              );
            })}
          </div>
          <a href="#contacto" className="btn btn-primary btn-lg">Comenzar ahora <ArrowRight aria-hidden /></a>
        </Reveal>

        <Reveal className={styles.bandMedia} delay={120}>
          <div className={`${styles.media} ${styles.mediaGlow}`}>
            <Image src="/logos/ai-wowpos.jpg" alt="WOWPOS: punto de venta con pago sin contacto para eventos" width={1408} height={768} />
            <span className={styles.mediaTag}><Beer aria-hidden /> Un solo sistema</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
