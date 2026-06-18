import Reveal from "./Reveal";
import styles from "./Sections.module.css";

/* Tipos de evento — oficiales: "fiestas, conciertos, teatro, seminarios y más" */
const CATS = ["Fiestas", "Conciertos", "Teatro", "Seminarios", "Y más"];

export default function Categories() {
  return (
    <section className="section" aria-label="Tipos de eventos" style={{ paddingBlock: "clamp(36px,6vw,64px)" }}>
      <div className="container center">
        <Reveal>
          <p className="eyebrow">Para cada tipo de evento</p>
          <div className={styles.cats} style={{ marginTop: 22 }}>
            {CATS.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
