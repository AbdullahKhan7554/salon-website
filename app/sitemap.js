export default function sitemap() {
  const base = "https://www.scissorsvipsalon.com";
  return ["", "/services", "/pricing", "/about", "/contact", "/faq", "/terms", "/privacy"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date("2026-11-27"),
  }));
}
