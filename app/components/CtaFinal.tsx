import Reveal from "./Reveal";
import { ArrowRight, Whatsapp } from "./icons";
import { waLink } from "../site";
import styles from "./CtaFinal.module.css";

export default function CtaFinal() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className={`card ${styles.cta}`} as="div">
          <p className="eyebrow">Tu evento nos importa tanto como a ti</p>
          <h2 className={styles.title}>¿Listo para vender tu próximo evento?</h2>
          <p className={styles.text}>
            Publica con Wowticket y gestiona tus ventas desde una plataforma rápida, segura y
            pensada para eventos reales.
          </p>
          <div className={styles.actions}>
            <a href="#contacto" className="btn btn-primary btn-lg">
              Subir mi evento <ArrowRight aria-hidden />
            </a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
              <Whatsapp aria-hidden /> Contactar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
