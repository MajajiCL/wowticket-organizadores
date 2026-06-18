import Image from "next/image";
import { Instagram, Facebook } from "./icons";
import { SITE } from "../site";
import { asset } from "../asset";
import styles from "./Footer.module.css";

/* Enlaces oficiales (extraídos de wowticket.cl) */
const UTILES = [
  { label: "Acerca de", href: "https://wowticket.cl/pages/about" },
  { label: "Eventos", href: "https://wowticket.cl/events" },
  { label: "Preguntas frecuentes", href: "https://wowticket.cl/blogs" },
  { label: "Términos y condiciones", href: "https://wowticket.cl/pages/terms" },
  { label: "Política de privacidad", href: "https://wowticket.cl/pages/privacy" },
];
const CONTACTO = [
  { label: "Problema con la Compra", href: "https://app.pipefy.com/public/form/HvNB3A6X" },
  { label: "Devolución de Dinero", href: "https://app.pipefy.com/public/form/lcHSRsaq" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Image src={asset("/logos/wowticket-color.png")} alt="WowTicket.cl" width={150} height={113} className={styles.logo} />
          <p>Venta de entradas online. La plataforma creada para organizadores de eventos.</p>
          <div className={styles.social}>
            <a href={SITE.facebook} target="_blank" rel="noopener" aria-label="Facebook de WowTicket"><Facebook /></a>
            <a href={SITE.instagram} target="_blank" rel="noopener" aria-label="Instagram de WowTicket"><Instagram /></a>
          </div>
        </div>

        <nav className={styles.col} aria-label="Enlaces útiles">
          <h3>Enlaces útiles</h3>
          <ul>
            {UTILES.map((l) => (
              <li key={l.label}><a href={l.href} target="_blank" rel="noopener">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Contacto">
          <h3>Contacto</h3>
          <ul>
            {CONTACTO.map((l) => (
              <li key={l.label}><a href={l.href} target="_blank" rel="noopener">{l.label}</a></li>
            ))}
            <li><a href="#contacto">Subir mi evento</a></li>
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 WowTicket.cl | Venta de entradas online</p>
      </div>
    </footer>
  );
}
