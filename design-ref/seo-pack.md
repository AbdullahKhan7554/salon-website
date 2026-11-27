# Scissors VIP Salon — SEO Pack (redesign)

Based on Umar SEO Playbook + Google Search Central rules. White-hat only, no ranking guarantees.
Keyword volumes are NOT verified yet (intent-based map). Check volume/KGR in Semrush/Ahrefs before final.

---

## 1. Critical fixes (High priority)

| # | Issue on live site | Fix |
|---|---|---|
| 1 | Title on every page = "VipMensSalon", meta description = "VIPSCISSORS" | Unique title + description per page (section 3) |
| 2 | URLs `/home`, `/services1`, `/pricing1`, `/term` | Clean slugs + 301 redirects (section 4) |
| 3 | Header renders 2-3 times in HTML | One `<header>` in the layout only |
| 4 | Name inconsistent: VipMensSalon / Salon / saloon | Always "Scissors VIP Salon" (title, footer ©, schema, alt) |
| 5 | Address mismatch: Contact says "Saih Al Salam Street, Alisaily", Privacy says "Al Safa area" | Confirm real address with client, use ONE exact NAP everywhere |
| 6 | Facebook link = facebook.com | Real page URL or remove |
| 7 | Image `Non.jpg`, alt "About us" / "Salon Logo" | Rename `hammad-founder-scissors-vip-salon.jpg`, descriptive alt (section 6) |
| 8 | No structured data, no sitemap/robots | Add JSON-LD, `sitemap.xml`, `robots.txt` (sections 5, 7) |
| 9 | "Send Message" button on Contact has no form | Booking form → opens WhatsApp with the filled details |

**NAP (use exactly, everywhere incl. Google Business Profile):**
Scissors VIP Salon, Rashid Building, Saih Al Salam Street, Al Lisaili, Dubai, UAE · +971 50 137 4524 · Mon–Sun 10:00–22:00
(Spelling "Al Lisaili" vs "Alisaily": use the same spelling as the Google Maps listing.)

---

## 2. Keyword map (1 primary + secondary per page)

| Page | Primary keyword | Secondary | Intent |
|---|---|---|---|
| / | men's salon in Dubai | home barber Dubai, men's grooming Dubai, barber Al Lisaili | Transactional / local |
| /services | men's grooming services Dubai | beard styling Dubai, men's facial Dubai, kids haircut Dubai | Commercial |
| /pricing | men's salon prices Dubai | haircut price Dubai, beard trim price Dubai | Transactional |
| /about | Scissors VIP Salon | barber Hammad Dubai | Navigational |
| /contact | book men's haircut Dubai | barber near Saih Al Salam, salon Al Lisaili | Transactional / local |
| /faq | home barber service Dubai | men's salon home service Dubai | Informational |

Quick wins (2–3 months): brand + local long-tail ("barber Al Lisaili", "men's salon Saih Al Salam", "home barber Dubai Lisaili").
Long term (4–12 months): "men's salon Dubai", "home barber Dubai".

---

## 3. Per-page metadata (one H1 per page, matches the design)

| URL | Title (≤60) | Meta description (140–160) | H1 |
|---|---|---|---|
| `/` | Men's Salon in Dubai & Home Barber \| Scissors VIP Salon | Premium men's haircuts, beard styling and facials in Al Lisaili, Dubai, or at your home. Haircut from AED 80. Open daily, book on WhatsApp today. | Premium men's salon & home grooming in Dubai |
| `/services` | Men's Grooming Services in Dubai \| Scissors VIP Salon | Haircuts, kids cuts, beard styling, colouring, facials and nose wax by a barber with 18+ years of experience. In salon or at home across Dubai. | Men's grooming services in Dubai |
| `/pricing` | Men's Salon Prices in Dubai \| Haircut AED 80 \| Scissors VIP | Full price list: haircut AED 80, shave AED 60, beard styling AED 130, facial AED 140. All prices include 5% VAT. Salon or home visit in Dubai. | Men's salon price list |
| `/about` | About Scissors VIP Salon \| Barber Hammad, 18+ Years in Dubai | Meet Hammad "Ahmad", the barber behind Scissors VIP Salon. Nearly two decades of precise men's grooming and VIP service in Dubai, in salon or at home. | A pair of scissors and a dream. |
| `/contact` | Book a Men's Haircut in Al Lisaili, Dubai \| Scissors VIP | Visit us at Rashid Building, Saih Al Salam Street, Al Lisaili, or book a home visit. Open daily 10 am to 10 pm. Call or WhatsApp +971 50 137 4524. | Book your appointment |
| `/faq` | Men's Salon & Home Barber FAQ \| Scissors VIP Salon Dubai | Home service areas, hygiene, booking, walk-ins, haircut time and packages. Answers to the most common questions about Scissors VIP Salon Dubai. | Questions, answered. |
| `/terms` | Terms & Conditions \| Scissors VIP Salon | Booking, cancellation, pricing and service terms for Scissors VIP Salon, Dubai. | Terms & Conditions |
| `/privacy` | Privacy Policy \| Scissors VIP Salon | How Scissors VIP Salon collects, uses and protects your personal data under UAE law. | Privacy Policy |

Every page: self-canonical (`https://www.scissorsvipsalon.com/<slug>`), `og:title`, `og:description`, `og:image` (1200×630 salon photo, not the logo), `lang="en"`.

---

## 4. Redirects (Next.js `next.config.js`)

```js
async redirects() {
  return [
    { source: '/home', destination: '/', permanent: true },
    { source: '/services1', destination: '/services', permanent: true },
    { source: '/pricing1', destination: '/pricing', permanent: true },
    { source: '/term', destination: '/terms', permanent: true },
  ];
},
```
Also force one host: `https://www.` (301 from non-www and http). All internal links point to the new slugs.

---

## 5. Structured data (JSON-LD, only what's visible on the page)

### Home `/` — HairSalon + WebSite
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HairSalon",
      "@id": "https://www.scissorsvipsalon.com/#salon",
      "name": "Scissors VIP Salon",
      "url": "https://www.scissorsvipsalon.com/",
      "image": "https://www.scissorsvipsalon.com/og-image.jpg",
      "logo": "https://www.scissorsvipsalon.com/logo.svg",
      "telephone": "+971501374524",
      "email": "scissorsvipsalon@gmail.com",
      "priceRange": "AED 60 - AED 140",
      "currenciesAccepted": "AED",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rashid Building, Saih Al Salam Street",
        "addressLocality": "Al Lisaili, Dubai",
        "addressCountry": "AE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 24.9359022, "longitude": 55.4767034 },
      "hasMap": "https://www.google.com/maps?cid=REPLACE_WITH_GBP_CID",
      "areaServed": { "@type": "City", "name": "Dubai" },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "10:00", "closes": "22:00"
      }],
      "founder": { "@type": "Person", "name": "Hammad Ahmad" },
      "sameAs": ["https://www.instagram.com/scissorsvipsaloon"]
    },
    {
      "@type": "WebSite",
      "name": "Scissors VIP Salon",
      "url": "https://www.scissorsvipsalon.com/"
    }
  ]
}
</script>
```
Do NOT add `aggregateRating`/`review` from your own testimonials (self-serving reviews are not eligible and risk a manual action).

### Pricing `/pricing` — OfferCatalog (all 17 prices)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.scissorsvipsalon.com/#salon",
  "name": "Scissors VIP Salon",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Men's salon price list",
    "itemListElement": [
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hair Cut"},"price":"80","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hair Trimming"},"price":"80","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Kids Hair Cut"},"price":"80","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Shaving / Trimming"},"price":"80","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Beard Styling with Scissors"},"price":"130","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Beard Colouring"},"price":"100","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Shaving"},"price":"60","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hair Dye"},"price":"100","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hair Straightening"},"price":"130","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hair Wash & Blow Dry"},"price":"80","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hair Colouring"},"price":"100","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Nose Wax"},"price":"60","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sticky Hair Removal"},"price":"60","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Nose Mask"},"price":"60","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Facial Mask"},"price":"80","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Facial"},"price":"140","priceCurrency":"AED"},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Facial (No Steam Cleaning)"},"price":"130","priceCurrency":"AED"}
    ]
  }
}
</script>
```

### FAQ `/faq` — FAQPage
Mark up all 10 visible Q&As (same text as the page). Note: Google now shows FAQ rich results mostly for gov/health sites, so this helps understanding, not guaranteed snippets.

### Every inner page — BreadcrumbList
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://www.scissorsvipsalon.com/"},
 {"@type":"ListItem","position":2,"name":"Pricing","item":"https://www.scissorsvipsalon.com/pricing"}
]}
</script>
```
Test every page in Rich Results Test until 0 errors.

---

## 6. Images (keep the same photos, rename + alt)

| Current | New filename | Alt text |
|---|---|---|
| `/Non.jpg` | `hammad-founder-scissors-vip-salon.jpg` | Hammad, founder of Scissors VIP Salon, Dubai |
| `/services/hair.jpg` | `mens-haircut-dubai.jpg` | Men's haircut at Scissors VIP Salon, Dubai |
| `/services/hairtriming.jpg` | `mens-hair-trim.jpg` | Men's hair trim |
| `/services/kid.jpg` | `kids-haircut-dubai.jpg` | Kids haircut in Dubai |
| `/services/shave.jpg` | `beard-shave-trim.jpg` | Beard shave and trim |
| `/services/beardstyling.jpg` | `beard-styling-scissors.jpg` | Beard styling with scissors |
| other `/services/*.jpg` | keep, use hyphenated descriptive names | service name + "in Dubai" where natural |

Use `next/image` with `width`/`height` set (no CLS), `priority` only on the hero image, WebP/AVIF, compressed. Logo: `alt="Scissors VIP Salon"`.

---

## 7. sitemap + robots (Next.js App Router)

`app/sitemap.ts`
```ts
export default function sitemap() {
  const base = 'https://www.scissorsvipsalon.com';
  return ['', '/services', '/pricing', '/about', '/contact', '/faq', '/terms', '/privacy']
    .map((p) => ({ url: `${base}${p}`, lastModified: new Date('2026-11-27') }));
}
```
`app/robots.ts`
```ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.scissorsvipsalon.com/sitemap.xml',
  };
}
```
Never block `/_next/` (CSS/JS/images).

---

## 8. Technical / page experience checklist
- [ ] SSR/SSG for all pages (content in initial HTML, not client-only)
- [ ] Real `<a href>` links for nav, footer, breadcrumbs
- [ ] One H1 per page; FAQ answers in the DOM (`<details>` is fine)
- [ ] Fonts via `next/font` (Instrument Serif + Inter), `display: swap`
- [ ] Core Web Vitals: LCP ≤ 2.5s (hero image priority + sized), CLS < 0.1, INP < 200ms
- [ ] HTTPS + single www host, custom 404 page
- [ ] Favicon (48×48+) + Apple touch icon
- [ ] Google Map iframe: `loading="lazy"` + `title="Map of Scissors VIP Salon"`

---

## 9. Local SEO (biggest lever for a salon)
1. Google Business Profile: claim/verify. Use the real business name as on the signage (listing currently shows "Scissors vip mens saloon": correct the spelling if the signage says "Salon"). Category: **Barber shop** (secondary: Hair salon, Men's grooming). Add the 17 services with prices, hours, photos (same salon photos), website link with UTM.
2. Ask real clients for Google reviews after each visit (WhatsApp link to the review form). Reply to every review.
3. NAP citations (same NAP exactly): Bing Places, Apple Business Connect, Yelp UAE, Dubai local directories, Instagram bio, Facebook page.
4. Embed the GBP map on Contact and link "Get directions".
5. Post on GBP weekly (offers, before/after photos).

---

## 10. Search Console + 30/60/90
- Verify a Domain property (DNS TXT), submit `sitemap.xml`, URL-inspect each page → Request indexing.
- **30 days:** launch redesign, redirects, metadata, schema, GBP fixed, sitemap submitted.
- **60 days:** review GSC queries; rewrite titles on high-impression / low-CTR pages; 10+ new Google reviews.
- **90 days:** add 2–3 helpful service pages if search data supports it (e.g. "Home barber service in Dubai", "Kids haircut in Dubai"), citations done, monthly report (clicks, impressions, CTR, positions, indexed pages).
