import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { Wallet, Clock, Chart } from "./icons";
import styles from "./Sections.module.css";

/* Fuente oficial: "¿Por qué elegir Wowticket?" */
const BENEFITS = [
  {
    icon: Wallet,
    to: 10,
    suffix: "%",
    title: "La Comisión Más Baja",
    text: "Maximiza tus utilidades con la comisión más transparente y competitiva del mercado.",
  },
  {
    icon: Clock,
    to: 24,
    suffix: "h",
    title: "Recibe tu Dinero",
    text: "Olvídate de largas esperas. Recibe el dinero recaudado en tu cuenta en 24 horas hábiles.",
  },
  {
    icon: Chart,
    to: 100,
    suffix: "%",
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
                  <p className={styles.benefitBig} style={{ marginTop: 18 }}>
                    <CountUp to={b.to} suffix={b.suffix} />
                  </p>
                  <h3>{b.title}</h3>
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
