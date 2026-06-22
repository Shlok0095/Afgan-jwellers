import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AfghanJewellers â€” Handcrafted Luxury Jewelry",
    template: "%s | AfghanJewellers",
  },
  description:
    "Discover handcrafted floral earrings, artisan necklaces, and beaded bracelets. Every piece from AfghanJewellers is a one-of-a-kind work of art inspired by nature.",
  keywords: [
    "handmade jewelry",
    "floral earrings",
    "beaded jewelry",
    "artisan jewelry",
    "Afghan jewelry",
    "handcrafted accessories",
    "luxury jewelry",
    "necklace",
    "bracelets",
  ],
  authors: [{ name: "AfghanJewellers" }],
  openGraph: {
    title: "AfghanJewellers â€” Handcrafted Luxury Jewelry",
    description: "Wearable art inspired by nature. Handcrafted with love.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfghanJewellers â€” Handcrafted Luxury Jewelry",
    description: "Wearable art inspired by nature. Handcrafted with love.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col bg-primary text-brand-text antialiased"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
