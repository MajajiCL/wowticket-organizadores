/** @type {import('next').NextConfig} */
// Para GitHub Pages se construye con PAGES=true → export estático + basePath del repo.
const isPages = process.env.PAGES === "true";
const repo = "/wowticket-organizadores";

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export",
        basePath: repo,
        assetPrefix: `${repo}/`,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
