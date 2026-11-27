
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const serif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
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


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body
        className={`antialiased flex flex-col min-h-screen`}
      >
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



