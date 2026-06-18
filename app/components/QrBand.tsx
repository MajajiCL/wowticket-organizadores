import Image from "next/image";
import Reveal from "./Reveal";
import { Qr, ShieldCheck, Zap, ArrowRight } from "./icons";
import { asset } from "../asset";
import styles from "./Showcase.module.css";

/* Basado en el banner oficial: "Ticketera Online con validación QR segura y ventas en tiempo real" */
export default function QrBand() {
  return (
    <section className="section">
      <div className={`container ${styles.band}`}>
        <Reveal className={styles.bandText}>
          <p className="eyebrow">Ticketera online</p>
          <h2>Validación QR segura y ventas en tiempo real</h2>
          <p>Cada entrada se valida con un código QR único e infalsificable, y tus ventas se actualizan al instante en tu panel.</p>
          <ul className={styles.bandList}>
            <li><span className="icon-badge"><Qr aria-hidden /></span> Control de acceso desde cualquier smartphone</li>
            <li><span className="icon-badge"><ShieldCheck aria-hidden /></span> Sistema anti-fraude e infalsificable</li>
            <li><span className="icon-badge"><Zap aria-hidden /></span> Ventas y aforo en tiempo real</li>
          </ul>
          <a href="#contacto" className="btn btn-primary btn-lg">Quiero vender online <ArrowRight aria-hidden /></a>
        </Reveal>

        <Reveal className={`${styles.bandMedia}`} delay={120}>
          <div className={`${styles.media} ${styles.mediaGlow}`}>
            <Image src={asset("/logos/ai-qr.jpg")} alt="Validación de entrada con código QR en un evento de WowTicket" width={1408} height={768} />
            <span className={styles.mediaTag}><Qr aria-hidden /> Validación en puerta</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
