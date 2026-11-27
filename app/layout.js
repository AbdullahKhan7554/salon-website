
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { SITE_URL, OG_DEFAULTS } from "@/components/JsonLd";
import { FaWhatsapp } from "react-icons/fa";

// Floating WhatsApp button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971501374524?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20your%20salon."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full inline-flex items-center justify-center bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.06] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <FaWhatsapp aria-hidden="true" size={28} />
    </a>
  );
}

// Same typefaces and weights as the Avenix Studio site.
// Headings: Plus Jakarta Sans 600/700. Body: Inter 400/500. Labels: Geist Mono (variable, local).
const heading = Plus_Jakarta_Sans({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const body = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const label = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Scissors VIP Salon",
  icons: {
    icon: "/Favicon.svg",
  },
  openGraph: OG_DEFAULTS,
};


// Runs before first paint. Injects a style tag (React leaves it alone, unlike classes on
// <html>, which hydration resets): repeat visit in this session -> hide the preloader,
// first visit -> lock scroll while it shows. Preloader.js removes the tag when it is done.
// The key must match PRELOAD_KEY in components/Preloader.js.
const PRELOAD_SCRIPT = `(function(){var skip=false;try{skip=sessionStorage.getItem("svip-preloaded")==="1"}catch(e){}var s=document.createElement("style");s.id="svip-preload-style";s.dataset.state=skip?"skip":"show";s.textContent=skip?".svip-preloader{display:none!important}":"html,body{overflow:hidden!important}";document.head.appendChild(s)})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${label.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRELOAD_SCRIPT }} />
        <noscript>
          <style>{`.svip-preloader{display:none}`}</style>
        </noscript>
      </head>
      <body
        className={`antialiased flex flex-col min-h-screen`}
      >
        <Preloader />
        <Navbar />
        <main className="flex-grow">
    {children}
  </main>
        
        <Footer/>
        <WhatsAppButton /> {/* ✅ Floating WhatsApp Button */}
      </body>
    </html>
  );
}



