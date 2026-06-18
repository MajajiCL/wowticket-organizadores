import Image from "next/image";
import Reveal from "./Reveal";
import { Apple, GooglePlay } from "./icons";
import { SITE } from "../site";
import { asset } from "../asset";
import styles from "./Showcase.module.css";

/* Basado en el banner oficial: "Descarga nuestra app en Google Play y App Store" */
export default function AppSection() {
  return (
    <section className="section">
      <div className={`container ${styles.band} ${styles.bandReverse}`}>
        <Reveal className={styles.bandText}>
          <p className="eyebrow">App móvil</p>
          <h2>Lleva el control de tu evento en el bolsillo</h2>
          <p>Descarga la app de WowTicket para gestionar tus ventas, validar tickets QR y seguir tu evento en tiempo real, estés donde estés.</p>
          <div className={styles.stores}>
            <a href={SITE.main} target="_blank" rel="noopener" className={styles.store} aria-label="Descargar en App Store">
              <Apple aria-hidden />
              <span className={styles.storeText}><small>Descárgala en</small><strong>App Store</strong></span>
            </a>
            <a href={SITE.main} target="_blank" rel="noopener" className={styles.store} aria-label="Disponible en Google Play">
              <GooglePlay aria-hidden />
              <span className={styles.storeText}><small>Disponible en</small><strong>Google Play</strong></span>
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.bandMedia} delay={120}>
          <div className={styles.media}>
            <Image src={asset("/logos/ai-app.jpg")} alt="App de WowTicket disponible en Google Play y App Store" width={1408} height={768} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
