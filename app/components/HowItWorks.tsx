import Reveal from "./Reveal";
import styles from "./Sections.module.css";

/* Pasos basados en hechos oficiales (publicar gratis · página/links automáticos · panel de ventas · validación QR) */
const STEPS = [
  { n: 1, title: "Publica tu evento gratis", text: "Crea y configura tu evento sin costos iniciales desde tu panel autoadministrable." },
  { n: 2, title: "Comparte y promociona", text: "Cada evento tiene su página automática. Difunde con links únicos de staff y RR.PP." },
  { n: 3, title: "Vende y controla", text: "Acepta tarjetas de crédito y débito y monitorea tus ventas en tiempo real." },
  { n: 4, title: "Valida con QR", text: "El día del evento escanea los tickets QR desde tu smartphone para un ingreso seguro." },
];

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <Reveal className={`${styles.head} ${styles.headCenter}`}>
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="section-title">De la publicación al ingreso, en 4 pasos</h2>
        </Reveal>

        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className={`card card-hover ${styles.step}`}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
