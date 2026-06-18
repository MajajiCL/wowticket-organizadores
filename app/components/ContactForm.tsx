"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { Whatsapp, ShieldCheck, Clock, Wallet } from "./icons";
import { SITE, waLink } from "../site";
import styles from "./ContactForm.module.css";

const TIPOS = ["Fiesta", "Concierto", "Teatro", "Seminario", "Otro"];

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", evento: "", tipo: "", mensaje: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er: Record<string, string> = {};
    if (!form.nombre.trim()) er.nombre = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Ingresa un email válido.";
    if (!form.evento.trim()) er.evento = "Cuéntanos el nombre de tu evento.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const text =
      `Hola WowTicket, quiero publicar mi evento.\n\n` +
      `• Nombre: ${form.nombre}\n` +
      `• Email: ${form.email}\n` +
      (form.telefono ? `• Teléfono: ${form.telefono}\n` : "") +
      `• Evento: ${form.evento}\n` +
      (form.tipo ? `• Tipo: ${form.tipo}\n` : "") +
      (form.mensaje ? `• Mensaje: ${form.mensaje}\n` : "");
    window.open(waLink(text), "_blank", "noopener");
  };

  return (
    <section className="section" id="contacto">
      <div className={`container ${styles.wrap}`}>
        {/* Lado informativo */}
        <Reveal className={styles.aside}>
          <p className="eyebrow">¿Listo para empezar?</p>
          <h2 className="section-title">Publica tu próximo evento con Wowticket</h2>
          <p className="section-lead" style={{ marginInline: 0 }}>
            Completa el formulario y uno de nuestros especialistas te contactará.
          </p>
          <ul className={styles.points}>
            <li><span className="icon-badge"><Wallet aria-hidden /></span> La comisión más conveniente del mercado.</li>
            <li><span className="icon-badge"><Clock aria-hidden /></span> Liquidación rápida, sin tanto trámite.</li>
            <li><span className="icon-badge"><ShieldCheck aria-hidden /></span> Ticket QR seguro e infalsificable.</li>
          </ul>
          <a href={waLink()} target="_blank" rel="noopener" className="btn btn-ghost">
            <Whatsapp aria-hidden /> O escríbenos directo por WhatsApp
          </a>
        </Reveal>

        {/* Formulario */}
        <Reveal className={`card ${styles.card}`} as="div">
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="nombre">Nombre <span aria-hidden>*</span></label>
              <input id="nombre" name="nombre" autoComplete="name" value={form.nombre} onChange={set("nombre")}
                aria-invalid={!!errors.nombre} aria-describedby={errors.nombre ? "err-nombre" : undefined} placeholder="Tu nombre" />
              {errors.nombre && <small id="err-nombre" className={styles.err}>{errors.nombre}</small>}
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="email">Email <span aria-hidden>*</span></label>
                <input id="email" name="email" type="email" inputMode="email" autoComplete="email" value={form.email} onChange={set("email")}
                  aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} placeholder="tu@correo.cl" />
                {errors.email && <small id="err-email" className={styles.err}>{errors.email}</small>}
              </div>
              <div className={styles.field}>
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" inputMode="tel" autoComplete="tel" value={form.telefono} onChange={set("telefono")} placeholder="+56 9 ..." />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="evento">Nombre del evento <span aria-hidden>*</span></label>
                <input id="evento" name="evento" value={form.evento} onChange={set("evento")}
                  aria-invalid={!!errors.evento} aria-describedby={errors.evento ? "err-evento" : undefined} placeholder="Ej: Fiesta Aniversario" />
                {errors.evento && <small id="err-evento" className={styles.err}>{errors.evento}</small>}
              </div>
              <div className={styles.field}>
                <label htmlFor="tipo">Tipo de evento</label>
                <select id="tipo" name="tipo" value={form.tipo} onChange={set("tipo")}>
                  <option value="">Selecciona…</option>
                  {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={3} value={form.mensaje} onChange={set("mensaje")} placeholder="Cuéntanos sobre tu evento (opcional)" />
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              <Whatsapp aria-hidden /> Enviar Solicitud
            </button>
            <p className={styles.note}>Al enviar se abrirá WhatsApp con tu solicitud lista para que un representante te responda.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
