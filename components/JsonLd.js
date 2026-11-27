export const SITE_URL = "https://www.scissorsvipsalon.com";

/** Shared Open Graph fields. A page's `openGraph` replaces the layout's, so pages spread this in. */
export const OG_DEFAULTS = {
  siteName: "Scissors VIP Salon",
  type: "website",
  locale: "en_AE",
  images: [
    {
      url: "/home/scissors-vip-salon-dubai.jpg",
      width: 1536,
      height: 1024,
      alt: "Scissors VIP Salon, men's salon in Dubai",
    },
  ],
};

/** Builds page metadata from the seo-pack values. */
export function pageMetadata({ path, title, description }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { ...OG_DEFAULTS, title, description, url: path },
  };
}

export function breadcrumbLd(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** Server component: renders structured data as a JSON-LD script tag. */
export default function JsonLd({ data }) {
  // Escape "<" so the JSON can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
