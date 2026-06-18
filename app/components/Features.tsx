import Reveal from "./Reveal";
import { Plus, Sliders, CreditCard, PageIcon, ShieldCheck, Sparkles } from "./icons";
import styles from "./Sections.module.css";

/* Fuente oficial: "Potencia tus Eventos con Nosotros" */
const FEATURES = [
  { icon: Plus, title: "Publica Gratis tus Eventos", text: "Crea eventos y gestiona cortesías sin costos iniciales." },
  { icon: Sliders, title: "Plataforma Autoadministrable", text: "Control total desde tu panel de productor." },
  { icon: CreditCard, title: "Múltiples Medios de Pago", text: "Acepta tarjetas de crédito y débito fácilmente." },
  { icon: PageIcon, title: "Página de Evento Automática", text: "Cada evento tiene su propia página personalizable." },
  { icon: ShieldCheck, title: "Seguridad con E-Ticket QR", text: "Entradas con código QR único para un acceso seguro." },
  { icon: Sparkles, title: "Eventos para Todos", text: "Organiza fiestas, conciertos, teatro, seminarios y más." },
];

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">Potencia tus Eventos con Nosotros</p>
          <h2 className="section-title">Descubre los beneficios de nuestra plataforma</h2>
        </Reveal>

        <div className="grid grid-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <article className={`card card-hover ${styles.tool}`}>
                  <div className="icon-badge"><Icon aria-hidden /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
