"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const floatingImages = [
  { src: "/images/earrings/earring-1.jpeg", delay: 0, x: 0, y: 0 },
  { src: "/images/necklace/necklace-1.jpeg", delay: 1.5, x: 60, y: -40 },
  { src: "/images/bracelets/bracelet-1.jpeg", delay: 0.8, x: -50, y: 30 },
];

function FloatingParticle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: Math.random() * 4 + 2 + "px",
        height: Math.random() * 4 + 2 + "px",
        background: `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`,
        ...style,
      }}
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-rose-gold/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/40 blur-2xl" />

        {/* Floating petals */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold/20 text-2xl pointer-events-none select-none"
            initial={{ y: "110vh", x: `${10 + (i * 8) % 90}vw`, opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.5, 0.5, 0] }}
            transition={{
              duration: 12 + (i % 5) * 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          >
            ✿
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-[0.3em] text-accent uppercase font-medium">
                Handcrafted in Every Detail
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-dark leading-[1.05] mb-6"
            >
              Luxury
              <br />
              <span className="italic font-normal text-accent">Handcrafted</span>
              <br />
              Jewelry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-cormorant text-xl text-brand-text/70 leading-relaxed max-w-md mb-8"
            >
              Every piece tells a story of craftsmanship, beauty, and elegance —
              born from nature, finished by hand, worn with love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-dark text-primary px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-accent transition-all duration-300 group btn-luxury"
              >
                Shop Collection
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-dark/20 text-dark px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:border-gold hover:text-accent transition-all duration-300 btn-luxury"
              >
                <Sparkles size={14} />
                Our Artistry
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 mt-10 pt-8 border-t border-secondary"
            >
              {[
                { value: "500+", label: "Pieces Crafted" },
                { value: "100%", label: "Handmade" },
                { value: "4.9★", label: "Customer Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-xl font-bold text-dark">{stat.value}</p>
                  <p className="text-xs text-accent/70 tracking-wide mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating jewelry showcase */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm lg:max-w-md h-[480px] lg:h-[560px]">
              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute top-8 left-8 right-0 bottom-0 rounded-[2rem] overflow-hidden shadow-luxury-hover animate-float"
              >
                <Image
                  src="/images/earrings/earring-3.jpeg"
                  alt="Handcrafted earrings"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
              </motion.div>

              {/* Small floating card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute top-4 left-0 w-28 h-28 rounded-2xl overflow-hidden shadow-gold animate-float-delayed z-10"
              >
                <Image
                  src="/images/necklace/necklace-3.jpeg"
                  alt="Necklace"
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </motion.div>

              {/* Small floating card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute bottom-12 right-[-12px] w-24 h-24 rounded-2xl overflow-hidden shadow-luxury animate-float-slow z-10"
              >
                <Image
                  src="/images/bracelets/bracelet-3.jpeg"
                  alt="Bracelet"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </motion.div>

              {/* Glass label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="absolute bottom-4 left-0 glass rounded-xl px-4 py-3 shadow-luxury z-10"
              >
                <p className="text-xs text-accent tracking-wider uppercase font-medium">New Arrival</p>
                <p className="font-serif text-sm font-semibold text-dark mt-0.5">Blush Petal Drops</p>
                <p className="text-xs text-brand-text/60 mt-0.5">₹1,299</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
