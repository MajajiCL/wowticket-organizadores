"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Whatsapp, Qr, Chart } from "./icons";
import { waLink } from "../site";
import Particles from "./Particles";
import { asset } from "../asset";
import styles from "./Hero.module.css";

const BARS = [42, 60, 38, 74, 55, 88, 96];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section className={styles.hero} id="top" ref={ref}>
      <div className={styles.heroBg} aria-hidden="true">
        <Image src={asset("/logos/ai-hero.jpg")} alt="" fill sizes="100vw" priority className={styles.heroBgImg} />
      </div>
      <Particles className={styles.particles} />
      <div className={`container ${styles.inner}`}>
        {/* Columna texto */}
        <motion.div className={styles.copy} style={{ y: yCopy, opacity: fade }}>
          <span className={`eyebrow ${styles.badge}`}>
            <Sparkles aria-hidden /> Ticketera para productores y organizadores
          </span>

          <h1 className={styles.title}>
            La Plataforma Creada para{" "}
            <span className="text-pink">Organizadores de Eventos</span>
          </h1>

          <p className={styles.subtitle}>
            Controla, gestiona y maximiza tus ingresos con la ticketera más ágil y
            con la comisión más conveniente del mercado.
          </p>

          <div className={styles.ctas}>
            <a href="#contacto" className="btn btn-primary btn-lg">
              Subir mi evento <ArrowRight aria-hidden />
            </a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
              <Whatsapp aria-hidden /> Contacta con un Representante
            </a>
          </div>

          <ul className={styles.metrics} aria-label="Métricas destacadas">
            <li><strong>Comisión</strong><span>conveniente</span></li>
            <li><strong>Liquidación</strong><span>rápida</span></li>
            <li><strong>QR</strong><span>seguro</span></li>
          </ul>
        </motion.div>

        {/* Columna visual: mockup */}
        <motion.div className={styles.visual} aria-hidden="true" style={{ y: yVisual }}>
          <div className={`card ${styles.panel}`}>
            <div className={styles.panelHead}>
              <div>
                <p className={styles.panelKicker}>Panel del Productor</p>
                <p className={styles.panelEvent}>Fiesta Aniversario · En vivo</p>
              </div>
              <span className={styles.live}><i /> Live</span>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span>Entradas vendidas</span>
                <strong>1.248</strong>
              </div>
              <div className={styles.stat}>
                <span>Recaudación</span>
                <strong>$8.7M</strong>
              </div>
            </div>

            <div className={styles.progressWrap}>
              <div className={styles.progressTop}>
                <span>Aforo</span><span>83%</span>
              </div>
              <div className={styles.progress}><i style={{ width: "83%" }} /></div>
            </div>

            <div className={styles.chart}>
              <div className={styles.chartHead}>
                <Chart aria-hidden /> Ventas últimos días
              </div>
              <div className={styles.bars}>
                {BARS.map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Ticket flotante con QR */}
          <div className={`card ${styles.ticket}`}>
            <div className={styles.ticketTop}>
              <span className={styles.ticketTag}>E-Ticket</span>
              <span className={styles.ticketState}>Activo</span>
            </div>
            <p className={styles.ticketName}>Acceso General</p>
            <p className={styles.ticketMeta}>Santiago · 22:00</p>
            <div className={styles.qr}><Qr aria-hidden /></div>
          </div>

          <span className={`${styles.floaty} ${styles.f1}`}>Venta online</span>
          <span className={`${styles.floaty} ${styles.f2}`}>Pago acreditado</span>
          <span className={`${styles.floaty} ${styles.f3}`}>QR validado</span>
        </motion.div>
      </div>
    </section>
  );
}
