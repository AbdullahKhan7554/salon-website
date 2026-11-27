# Scissors VIP Salon — Claude Code prompts (run in order, one at a time)

**Before Prompt 1:** unzip `design-ref.zip` into the project root, so the folder is `design-ref/` (10 `.dc.html` design files + `seo-pack.md`).
Each `.dc.html` file is a design reference: inline styles show the exact layout, colours, sizes and text. The `renderVals()` script at the bottom holds the lists (services, prices, FAQs, reviews).
Wait for each prompt to finish and check the result before sending the next one.
The prompts assume App Router. If Prompt 1 says Pages Router, add this line to every later prompt: "Project uses Pages Router: use next/head, pages/ files and public/sitemap.xml + public/robots.txt instead of the App Router files."

---

## Prompt 1 — Inspect (no changes)

```
Do NOT change any file. Inspect this Next.js project and reply in max 10 lines:
1. Next.js version, App Router or Pages Router
2. File path for each route: /home, /services1, /pricing1, /about, /contact, /faq, /term, /privacy, and /
3. Root layout file, header component file, footer component file
4. Why the header renders more than once (file + line)
5. Styling method (Tailwind / CSS modules / plain CSS) and global CSS file path
6. Where images live (public/...) and the exact image file names
```

---

## Prompt 2 — Design tokens + fonts

```
Read design-ref/Home.dc.html for colours and fonts only.
Change ONLY the root layout file and the global CSS file. Nothing else.
1. Load fonts with next/font/google: "Instrument Serif" (400, normal + italic) and "Inter" (400, 500, 600), display swap. Expose them as CSS variables --font-serif and --font-sans.
2. In the global CSS add these variables on :root:
   --bone:#EFE8DC; --ink:#161311; --accent:#8C2F1F; --accent-hover:#6E2215;
   --line:#CFC6B8; --muted:#5E554B; --ink-muted:#A69C8E; --ink-text:#CFC6B8; --ink-line:#2B2622; --placeholder:#DDD3C3;
3. body: margin 0, background var(--bone), color var(--ink), font-family var(--font-sans), font-size 16px, line-height 1.65.
4. Colour rule 60/30/10: bone = page background, ink = header/hero/dark sections/footer, accent = only buttons, prices and highlighted words.
Do not remove existing styles that other pages still use. Run the build. Reply max 4 lines: files changed + build status.
```

---

## Prompt 3 — Header + Footer

```
Rebuild the header and footer to match design-ref/Header.dc.html and design-ref/Footer.dc.html exactly (layout, text, colours, spacing).
Change ONLY the header component, footer component and root layout file.
1. Header must render ONCE, from the root layout only. Remove the duplicate render you found in Prompt 1.
2. Header links: Services /services, Pricing /pricing, About /about, FAQ /faq, Contact /contact. Logo links to /. Active link = underline (use usePathname, client component only for that part).
3. Under 768px: show the logo + a "Menu" button (aria-expanded, aria-controls) that opens the links as a full-width dark panel. Desktop stays as in the design.
4. "Book now" button: https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon.
5. Footer: same content as the design file (address, hours, phone, email, Instagram, links incl. /terms and /privacy, © 2026 Scissors VIP Salon, Avenix Studio credit). Remove the facebook.com link. Use <address> for the address.
6. All links are next/link or <a href>. Touch targets min 44px.
Run the build. Reply max 4 lines.
```

---

## Prompt 4 — Clean URLs + redirects

```
Change ONLY route folder/file names, next.config, and internal links.
1. Rename routes: /services1 -> /services, /pricing1 -> /pricing, /term -> /terms. Home content must live at / (if /home is a separate page, move its content to /).
2. In next.config add permanent redirects: /home -> /, /services1 -> /services, /pricing1 -> /pricing, /term -> /terms. Keep existing config.
3. Update every internal link in the project to the new URLs.
Do not change page content yet. Run the build. Reply max 4 lines + list of renamed paths.
```

---

## Prompt 5 — Home page

```
Rebuild the / page to match design-ref/Home.dc.html exactly. Change ONLY the home page file (and a new components/home/ folder if needed).
- Use the CSS variables from Prompt 2. Recreate the layout with flex/grid and clamp() font sizes exactly as in the design so it stays responsive.
- Exactly one <h1>: "Premium men's salon & home grooming in Dubai" (small uppercase label). The big headline is a <p>.
- Images: use next/image with the existing files. Hero = /services/hair.jpg (priority), home-visit = /services/shave.jpg, story = /Non.jpg. Set width/height, sizes, and the alt text from the design's aria-label.
- Menu list, steps and reviews come from renderVals() in the design file. Prices: Hair Cut 80, Beard Styling with Scissors 130, Shaving 60, Hair Colouring 100, Facial 140, Kids Hair Cut 80.
- Keep the existing testimonial texts from the current site word for word (only fix name capitalisation).
- Header/footer come from the layout. Do not import them here.
Run the build. Reply max 4 lines.
```

---

## Prompt 6 — Services page

```
Rebuild /services to match design-ref/Services.dc.html. Change ONLY the services page file.
- One <h1>: "Men's grooming services in Dubai". Breadcrumb nav Home / Services.
- 3 sections (Hair, Beard & shave, Face & skin) with ids hair, beard, face. Use the services, prices and descriptions from renderVals() in the design file.
- Each card: next/image with the EXISTING image file from public/services (same files as now), lazy loaded, alt from the design. Name as <h3>, price in accent colour.
- Grid: repeat(auto-fill, minmax(270px, 1fr)).
Run the build. Reply max 4 lines.
```

---

## Prompt 7 — Pricing page

```
Rebuild /pricing to match design-ref/Pricing.dc.html. Change ONLY the pricing page file.
- One <h1>: "Men's salon price list". Breadcrumb Home / Pricing.
- Exact prices (AED): Hair: Hair Cut 80, Hair Trimming 80, Kids Hair Cut 80, Hair Dye 100, Hair Colouring 100, Hair Straightening 130, Hair Wash & Blow Dry 80. Beard & Shave: Shaving 60, Shaving / Trimming 80, Beard Colouring 100, Beard Styling with Scissors 130. Face & Skin: Nose Wax 60, Sticky Hair Removal 60, Nose Mask 60, Facial Mask 80, Facial (No Steam Cleaning) 130, Facial 140.
- Use a semantic <ul> per group with the dotted leader line from the design.
- Keep the home-visit dark band and the 3 notes (VAT included, custom requests, 12h cancellation linking /terms).
Run the build. Reply max 4 lines.
```

---

## Prompt 8 — About page

```
Rebuild /about to match design-ref/About.dc.html. Change ONLY the about page file.
- One <h1>: "A pair of scissors and a dream." Breadcrumb Home / About.
- Hero image: /Non.jpg via next/image, priority, alt "Hammad, founder of Scissors VIP Salon, at work".
- 4 story chapters + 4 values from renderVals() in the design file. Keep the facts of the current About text (nearly two decades, home services, Dubai).
Run the build. Reply max 4 lines.
```

---

## Prompt 9 — Contact page

```
Rebuild /contact to match design-ref/Contact.dc.html. Change ONLY the contact page file (+ one small client component for the form).
- One <h1>: "Book your appointment". Breadcrumb Home / Contact.
- Form fields with <label>: Salon / Home visit toggle (buttons with aria-pressed), name, phone, service <select> (all 17 services with prices), date-time, area (only when Home visit), message.
- Submit builds a WhatsApp message from the fields with encodeURIComponent and opens https://wa.me/971501374524?text=... in a new tab. No backend, no new packages.
- Right side: address in <address>, hours, email, the EXISTING Google Maps iframe embed (loading="lazy", title="Map of Scissors VIP Salon"), "Get directions" link.
Run the build. Reply max 4 lines.
```

---

## Prompt 10 — FAQ, Terms, Privacy

```
Rebuild /faq, /terms and /privacy to match design-ref/FAQ.dc.html, Terms.dc.html, Privacy.dc.html. Change ONLY these 3 page files.
- FAQ: one <h1> "Questions, answered."; the 10 Q&As as native <details>/<summary> (answer text stays in the HTML). Each question is an <h2> inside <summary>.
- Terms: <h1> "Terms & Conditions", 8 numbered sections. Privacy: <h1> "Privacy Policy", 7 numbered sections. Keep the current legal text meaning, same layout as the design.
- Breadcrumb on all three.
Run the build. Reply max 4 lines.
```

---

## Prompt 11 — SEO

```
Read design-ref/seo-pack.md. Change ONLY: page metadata exports, root layout metadata, new app/sitemap.ts, new app/robots.ts, new components/JsonLd.tsx, and image file names + their references.
1. metadataBase https://www.scissorsvipsalon.com. For each page set title, description, alternates.canonical and openGraph exactly as in section 3 of seo-pack.md. html lang="en".
2. JSON-LD (section 5): HairSalon + WebSite on /, OfferCatalog on /pricing, FAQPage on /faq (same text as the page), BreadcrumbList on every inner page. Rendered server-side via <script type="application/ld+json">.
3. sitemap.ts and robots.ts exactly as in section 7.
4. Rename images as in section 6 and update every reference. Do not change the image files themselves.
5. Favicon: use the existing logo if a square version exists, otherwise tell me.
Run the build. Reply max 6 lines + any value you could not fill.
```

---

## Prompt 12 — QA loop (repeat until clean)

```
QA loop. Do not redesign anything. Only fix real bugs, and only in the file that has the bug.
1. Run lint and build. Fix errors.
2. For every route (/, /services, /pricing, /about, /contact, /faq, /terms, /privacy) check:
   - exactly one <h1>, unique <title> and meta description, canonical present
   - no horizontal scroll at 390px, 768px and 1440px widths; nav menu works on mobile
   - all internal links return 200; /home, /services1, /pricing1, /term redirect 301
   - all images have alt, width and height; only the hero image has priority
   - JSON-LD is valid JSON; colours only from the CSS variables
   - text matches the design-ref file for that page
3. Repeat steps 1-2 until everything passes (max 3 rounds).
Reply as a table: route | issue found | fixed (yes/no). Max 15 lines.
```

---

**After deploy:** Google Search Console → Sitemaps → submit `sitemap.xml` → URL Inspection → Request indexing for each page. Test `/`, `/pricing` and `/faq` in the Rich Results Test.
