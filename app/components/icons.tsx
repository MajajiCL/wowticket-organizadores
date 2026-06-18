/* Iconos SVG inline · estilo lineal (trazo 1.8) · sin dependencias */
import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const Ticket = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 0 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4Z" /><path d="M13 7v10" strokeDasharray="2 3" /></svg>
);
export const Qr = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3M21 14v.01M14 21h3M21 17v4" /></svg>
);
export const ShieldCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z" /><path d="m9.5 12 1.8 1.8L15 10" /></svg>
);
export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Chart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 3v18h18" /><path d="M7 15l3-4 3 2 4-6" /></svg>
);
export const Seats = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 19v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" /><path d="M4 19h16" /></svg>
);
export const Users = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-5-5.9" /></svg>
);
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Gift = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12" /><path d="M12 8S10.5 4 8 4a2 2 0 0 0 0 4M12 8s1.5-4 4-4a2 2 0 0 1 0 4" /></svg>
);
export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>
);
export const CreditCard = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></svg>
);
export const Sliders = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 21v-7M5 10V3M12 21v-9M12 8V3M19 21v-5M19 12V3" /><circle cx="5" cy="12" r="2" /><circle cx="12" cy="10" r="2" /><circle cx="19" cy="14" r="2" /></svg>
);
export const PageIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></svg>
);
export const Rocket = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 11a9 9 0 0 1 9-9 9 9 0 0 1-9 9Z" /><path d="M9 11l4 4" /><path d="M14 7a2 2 0 1 0 3 3" /></svg>
);
export const Sparkles = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m12 3 1.8 4.8L18 9.6l-4.2 1.8L12 16l-1.8-4.6L6 9.6l4.2-1.8Z" /><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" /></svg>
);
export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Plus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Whatsapp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 21l1.7-5A8 8 0 1 1 12 20a8 8 0 0 1-4-1.1L3 21Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.7 0 1.2-.6 1-1.2l-.4-1c-.1-.4-.6-.6-1-.4l-.8.3a4 4 0 0 1-2-2l.3-.8c.2-.4 0-.9-.4-1l-1-.4c-.6-.2-1.2.3-1.2 1Z" fill="currentColor" stroke="none" /></svg>
);
export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M14 8.5V7c0-1 .5-1.5 1.5-1.5H17V2h-2.5C12 2 10.5 3.7 10.5 6.2V8.5H8V12h2.5v10H14V12h2.4l.6-3.5Z" /></svg>
);
export const Wallet = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 9h12a2 2 0 0 1 0 4H3" /><circle cx="16" cy="11" r="1.2" fill="currentColor" stroke="none" /></svg>
);
export const Megaphone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5L7 9H5a1 1 0 0 0-1 1Z" /><path d="M18 9a3 3 0 0 1 0 6" /></svg>
);
export const Apple = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.2 2.6 2.1 1-.04 1.4-.7 2.7-.7 1.3 0 1.6.7 2.7.66 1.1-.02 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.4-.02-.01-2.1-.8-2.1-3.1ZM14.3 6.3c.6-.7 1-1.7.9-2.7-.9.04-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .08 1.9-.5 2.5-1.2Z" /></svg>
);
export const GooglePlay = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M4 3.5 13.5 12 4 20.5c-.3-.2-.5-.6-.5-1.1V4.6c0-.5.2-.9.5-1.1Z" opacity=".95" /><path d="m15.2 10.3 2.9 1.7-2.9 1.7L13 12l2.2-1.7Z" /><path d="m5 3 9 5.2-1.6 1.6L5 3Z" opacity=".7" /><path d="m12.4 14.2 1.6 1.6L5 21l7.4-6.8Z" opacity=".85" /></svg>
);
export const Beer = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 8h9v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" /><path d="M14 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" /><path d="M7 8V6a2 2 0 0 1 2-2c.5-1.2 2-1.5 3-.8 1.2-.6 2.6.2 2.6 1.5 1.2.2 1.7 1.6.9 2.5" /><path d="M8 12v5M11 12v5" /></svg>
);
export const Coat = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3a2 2 0 0 0-2 2c0 1 .9 1.6 2 2l8 4.5a2 2 0 0 1 1 1.7V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.3a2 2 0 0 1 1-1.7L12 9" /></svg>
);
export const Parking = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M9 17V7h3.5a3 3 0 0 1 0 6H9" /></svg>
);
export const Zap = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);
