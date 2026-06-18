import Image from "next/image";
import Reveal from "./Reveal";
import { asset } from "../asset";
import styles from "./Showcase.module.css";

/* Prueba social: eventos reales publicados en WowTicket (posters oficiales del sitio). */
const POSTERS = Array.from({ length: 10 }, (_, i) => asset(`/eventos/ev${i + 1}.webp`));

export default function EventsMarquee() {
  const loop = [...POSTERS, ...POSTERS];
  return (
    <section className={styles.marqueeSection} aria-label="Eventos reales en WowTicket">
      <div className="container">
        <Reveal className={styles.marqueeHead}>
          <p className="eyebrow">Eventos reales en la plataforma</p>
          <h2 className="section-title">Fiestas, conciertos y shows que ya venden con WowTicket</h2>
        </Reveal>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {loop.map((src, i) => (
            <div className={styles.poster} key={i}>
              <Image src={src} alt="" width={200} height={267} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
