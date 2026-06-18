/* Datos oficiales WOWTICKET (ver CONTENIDO_OFICIAL.md). No inventar. */
export const SITE = {
  whatsappNumber: "56994131675",
  whatsappText: "Hola WowTicket, quiero publicar mi evento en la plataforma.",
  instagram: "https://www.instagram.com/wowticket.cl/",
  facebook: "https://www.facebook.com/wowticket.cl/",
  main: "https://wowticket.cl",
  organizador: "https://wowticket.cl/eres-organizador",
};

export const waLink = (text = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
