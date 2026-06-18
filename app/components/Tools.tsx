import Reveal from "./Reveal";
import { Qr, Seats, Users, Mail, Gift, Globe } from "./icons";
import styles from "./Sections.module.css";

/* Fuente oficial: "Herramientas para un Evento Exitoso" */
const TOOLS = [
  { icon: Qr, title: "Ticket QR Seguro", text: "Sistema anti-fraude para un control de acceso rápido y seguro." },
  { icon: Seats, title: "Mapping de Asientos", text: "Vende asientos y mesas numeradas. Optimiza la distribución de tu recinto." },
  { icon: Users, title: "Link de Staff y RR.PP.", text: "Mide el rendimiento de tus vendedores y embajadores con links únicos." },
  { icon: Mail, title: "Campañas de Mailing", text: "Comunícate directamente con tus asistentes y promociona futuros eventos." },
  { icon: Gift, title: "Cortesías a Costo Cero", text: "Cada evento incluye un número limitado de entradas de cortesía, siempre sin ningún costo para ti." },
  { icon: Globe, title: "Soporte Global", text: "Servidores en Chile, Argentina y EE.UU. para una estabilidad garantizada." },
];

export default function Tools() {
  return (
    <section className="section" id="herramientas">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Herramientas para un Evento Exitoso</p>
          <h2 className="section-title">Todo lo que necesitas para gestionar como un profesional</h2>
          <p className="section-lead">Te entregamos las herramientas para gestionar y promocionar tu evento de principio a fin.</p>
        </Reveal>

        <div className="grid grid-3">
          {TOOLS.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={(i % 3) * 80}>
                <article className={`card card-hover ${styles.tool}`}>
                  <div className="icon-badge"><Icon aria-hidden /></div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
