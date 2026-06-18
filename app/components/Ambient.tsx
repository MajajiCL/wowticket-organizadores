/* Fondo ambiental: blobs fucsia/violeta que derivan lento detrás de todo el contenido.
   Llena las zonas oscuras sin distraer. Respeta prefers-reduced-motion (ver globals.css). */
export default function Ambient() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient-blob ambient-blob-1" />
      <span className="ambient-blob ambient-blob-2" />
      <span className="ambient-blob ambient-blob-3" />
    </div>
  );
}
