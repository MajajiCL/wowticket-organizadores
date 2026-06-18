import Reveal from "./Reveal";
import { Wallet, Clock, Chart } from "./icons";
import styles from "./Sections.module.css";

/* Fuente oficial: "¿Por qué elegir Wowticket?" */
const BENEFITS = [
  {
    icon: Wallet,
    title: "La comisión más conveniente",
    text: "Maximiza tus utilidades con una comisión transparente y conveniente, sin sorpresas ni costos ocultos.",
  },
  {
    icon: Clock,
    title: "Liquidación rápida",
    text: "Olvídate de largas esperas y del papeleo: recibe el dinero recaudado de forma rápida y sin tanto trámite.",
  },
  {
    icon: Chart,
    title: "Control Total de tus Ventas",
    text: "Monitorea tus ventas y ganancias en tiempo real con nuestro panel de estadísticas avanzado.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <Reveal className={styles.head}>
          <p className="eyebrow">¿Por qué elegir Wowticket?</p>
          <h2 className="section-title">Tu control, tus ganancias y la simplicidad en la gestión</h2>
          <p className="section-lead">Nos enfocamos en lo que realmente importa para que cada evento sea un éxito.</p>
        </Reveal>

        <div className="grid grid-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 90}>
                <article className={`card card-hover ${styles.benefit}`}>
                  <div className="icon-badge"><Icon aria-hidden /></div>
                  <h3 style={{ marginTop: 18 }}>{b.title}</h3>
                  <p>{b.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
