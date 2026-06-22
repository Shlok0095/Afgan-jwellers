"use client";

import Link from "next/link";
import { Mail, Heart, Sparkles } from "lucide-react";

const footerLinks = {
  Shop: [
    { href: "/shop/earrings", label: "Earrings" },
    { href: "/shop/necklace", label: "Neckpiece" },
    { href: "/shop/bracelets", label: "Hand Accessories" },
    { href: "/shop", label: "All Collections" },
  ],
  "Customer Care": [
    { href: "/contact", label: "Contact Us" },
    { href: "/about", label: "Our Story" },
    { href: "/faq", label: "FAQ" },
    { href: "/care-guide", label: "Jewelry Care Guide" },
  ],
  Policies: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/shipping", label: "Shipping Policy" },
    { href: "/returns", label: "Returns & Exchanges" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-primary/80">
      {/* Marquee strip */}
      <div className="border-y border-white/10 py-3 overflow-hidden">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-4 mx-8 text-xs tracking-[0.25em] uppercase font-light text-gold/70 whitespace-nowrap">
              <Sparkles size={8} />
              Handcrafted with Love
              <Sparkles size={8} />
              Inspired by Nature
              <Sparkles size={8} />
              AfghanJewellers
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h2 className="font-serif text-2xl font-bold tracking-tight">
                Afghan<span className="text-gold">Jewellers</span>
              </h2>
              <p className="text-xs tracking-[0.25em] text-gold/60 mt-1 font-light uppercase">
                Handcrafted Beauty Inspired by Nature
              </p>
            </Link>
            <p className="text-sm leading-relaxed text-primary/60 max-w-xs font-light mt-4">
              Every piece is a love letter to nature â€” handcrafted by skilled artisans using premium
              beads, threads, and metals. Wearable art for the woman who appreciates beauty in detail.
            </p>

            <div className="mt-6">
              <p className="text-xs tracking-widest text-gold/70 uppercase mb-3">Get in Touch</p>
              <a
                href="mailto:afghanshainila@gmail.com"
                className="flex items-center gap-2 text-sm text-primary/70 hover:text-gold transition-colors duration-200"
              >
                <Mail size={14} />
                afghanshainila@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-200 text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-200 text-xs font-bold"
              >
                FB
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-gold/80 font-medium mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary/55 hover:text-primary transition-colors duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif text-lg text-primary/90">Join our exclusive circle</p>
              <p className="text-xs text-primary/50 mt-1 font-light">
                New arrivals, artisan stories, and members-only offers.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-0 w-full max-w-sm"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/15 rounded-l-full px-5 py-2.5 text-sm text-primary/80 placeholder:text-primary/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold text-dark px-6 py-2.5 rounded-r-full text-sm font-medium hover:bg-rose-gold transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary/35">
          <p>Â© 2025 AfghanJewellers. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart size={10} className="text-rose-gold fill-rose-gold" /> in every piece
          </p>
        </div>
      </div>
    </footer>
  );
}
