# WowTicket — Landing de Organizadores

Landing premium (Next.js 15 + React 19) para captar **organizadores y productores de eventos**.
Contenido y logos **oficiales** de wowticket.cl (sin inventar nada). Color `#e8217c`, tipografías Montserrat + Outfit.

## ✨ Características
- Hero con **campo de partículas** animado (canvas) + **parallax** y **contadores** animados.
- **Smooth scroll** (Lenis) y animaciones de entrada accesibles (respeta `prefers-reduced-motion`).
- Marquee de **eventos reales** (prueba social) y secciones con **fotos reales**: Validación QR, **WOWPOS** y **App móvil**.
- Formulario de contacto que abre **WhatsApp** (+56 9 9413 1675) con la solicitud prellenada + botón flotante.
- SEO + Open Graph, mobile-first, 100% responsive.

## 🚀 Desarrollo
```bash
npm install
npm run dev      # http://localhost:3040
npm run build && npm start   # producción
```

## 🖼️ Imágenes con IA (opcional)
Las fotos actuales son las oficiales de wowticket.cl. Para generar versiones limpias a medida con
Google AI Studio (Imagen):
```bash
export GEMINI_API_KEY="tu_api_key"   # Windows: set GEMINI_API_KEY=...
node scripts/generate-images.mjs     # crea public/logos/ai-*.jpg
```
Luego actualiza los `<Image src>` en `app/components/{QrBand,WowposSection,AppSection}.tsx`.

## ☁️ Despliegue
App Next.js estática/SSG → **Vercel** (recomendado), Netlify o cualquier hosting Node.
Apuntar el dominio/subdominio de organizadores.

> Nota: los badges de App Store / Google Play apuntan a wowticket.cl hasta tener las URLs reales de las tiendas.
