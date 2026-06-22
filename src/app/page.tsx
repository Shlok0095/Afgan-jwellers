import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import BestSellersSection from "@/components/home/BestSellersSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "AfghanJwellers — Handcrafted Luxury Jewelry",
  description:
    "Discover handcrafted floral earrings, artisan neckpieces, and beaded hand accessories. Every AfghanJwellers piece is a work of art, inspired by nature.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <WhyUsSection />
      <CraftsmanshipSection />
      <NewArrivalsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
