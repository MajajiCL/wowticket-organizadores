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
          <Image src="/logos/wowpos-logo-rosado.png" alt="WOWPOS" width={160} height={40} className={styles.brandLogo} priority={false} />
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
          <div className={`${styles.media} ${styles.mediaDevice}`}>
            <Image src="/logos/wowpos-device.png" alt="Dispositivo WOWPOS con pago sin contacto" width={2048} height={1193} className={styles.deviceImg} />
            <span className={styles.mediaTag}><Beer aria-hidden /> Pago sin contacto</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
