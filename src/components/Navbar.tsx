"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/shop/earrings", label: "Earrings" },
  { href: "/shop/necklace", label: "Neckpiece" },
  { href: "/shop/bracelets", label: "Hand Accessories" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, state } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-dark text-primary text-center py-2 px-4 text-xs tracking-[0.2em] font-light">
        <span className="inline-flex items-center gap-2">
          <Sparkles size={10} className="text-gold" />
          Free shipping on orders above ₹2,000 &nbsp;·&nbsp; Handcrafted with love
          <Sparkles size={10} className="text-gold" />
        </span>
      </div>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-luxury border-b border-secondary/50"
            : "bg-primary/95 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight text-dark group-hover:gold-text transition-all duration-300">
                Afghan<span className="text-gold">Jwellers</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] text-accent font-light uppercase">
                Handcrafted Beauty
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link text-sm font-medium tracking-wide transition-colors duration-200",
                    pathname === link.href
                      ? "text-accent active"
                      : "text-brand-text hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/wishlist"
                className="relative p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Wishlist"
              >
                <Heart size={20} className="text-brand-text hover:text-rose-gold transition-colors" />
                {state.wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-gold text-white text-[9px] rounded-full flex items-center justify-center font-medium">
                    {state.wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                className="relative p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Cart"
              >
                <ShoppingBag size={20} className="text-brand-text hover:text-accent transition-colors" />
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-dark text-[9px] rounded-full flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="lg:hidden overflow-hidden border-t border-secondary/60 bg-white/95 backdrop-blur-md"
            >
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 text-sm font-medium border-b border-secondary/40 transition-colors",
                        pathname === link.href ? "text-accent" : "text-brand-text hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
