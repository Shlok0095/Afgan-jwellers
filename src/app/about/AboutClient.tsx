"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Leaf, Star, Gem } from "lucide-react";

const values = [
  { icon: Heart, title: "Made with Love", description: "Every single bead is placed with intention and care. Our jewelry is a labor of love." },
  { icon: Leaf, title: "Nature Inspired", description: "Flowers, petals, cherries, leaves â€” nature is our infinite muse and greatest teacher." },
  { icon: Gem, title: "Premium Quality", description: "We never compromise on materials. Only the finest beads, metals, and threads make the cut." },
  { icon: Star, title: "Artisan Heritage", description: "Rooted in a tradition of handcraft, we carry forward skills passed through generations." },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-4">Our Story</p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-dark mb-6 leading-tight">
              Where Art Meets
              <br />
              <span className="italic font-normal text-accent">Craftsmanship</span>
            </h1>
            <p className="font-cormorant text-2xl text-brand-text/65 max-w-2xl mx-auto leading-relaxed">
              AfghanJewellers was born from a simple, profound belief: that jewelry should feel as
              extraordinary as the woman wearing it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px]">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-luxury-hover">
                  <Image
                    src="/images/earrings/earring-7.jpeg"
                    alt="Handcrafting jewelry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 95vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-luxury border-4 border-white">
                  <Image
                    src="/images/bracelets/bracelet-5.jpeg"
                    alt="Bracelet detail"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-4">The Beginning</p>
              <h2 className="font-serif text-4xl font-bold text-dark mb-6 leading-tight">
                A Dream Strung
                <br />
                Bead by Bead
              </h2>
              <div className="space-y-4 font-cormorant text-xl text-brand-text/70 leading-relaxed">
                <p>
                  AfghanJewellers began as a quiet obsession with beautiful things â€” the way a flower
                  holds morning dew, the particular blush of a cherry in bloom, the soft weight of
                  a well-made earring.
                </p>
                <p>
                  What started at a small craft table has grown into a collection of pieces worn by
                  women across India and beyond. Each piece is still made the same way it always was
                  â€” one bead at a time, by hand, with complete attention.
                </p>
                <p>
                  We believe luxury is not about price â€” it is about the time someone was willing
                  to spend making something beautiful for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl font-bold text-dark mb-3">What We Stand For</h2>
            <p className="font-cormorant text-xl text-brand-text/60">The principles that guide every piece we make</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 text-center shadow-card"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                  <v.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-dark mb-3">{v.title}</h3>
                <p className="text-sm text-brand-text/60 font-light leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-3">Our Creations</h2>
            <p className="font-cormorant text-xl text-primary/50">A glimpse into our world of handcrafted beauty</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "/images/earrings/earring-1.jpeg",
              "/images/earrings/earring-4.jpeg",
              "/images/necklace/necklace-2.jpeg",
              "/images/bracelets/bracelet-2.jpeg",
              "/images/earrings/earring-6.jpeg",
              "/images/necklace/necklace-4.jpeg",
              "/images/bracelets/bracelet-4.jpeg",
              "/images/earrings/earring-8.jpeg",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative rounded-xl overflow-hidden img-zoom ${i === 0 || i === 5 ? "col-span-1 row-span-1" : ""}`}
              >
                <div className="relative aspect-square">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="font-serif text-4xl font-bold text-dark mb-4">Ready to Find Your Piece?</h2>
          <p className="font-cormorant text-xl text-brand-text/65 mb-8">
            Browse our collections of handcrafted earrings, neckpieces, and hand accessories
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-dark text-primary px-10 py-4 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300 group"
          >
            Shop Now <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
