/* Prefijo para assets de /public en GitHub Pages (subruta /repo).
   En build normal NEXT_PUBLIC_ASSET_PREFIX = "" → rutas sin cambios. */
const PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";
export const asset = (p: string) => `${PREFIX}${p}`;
