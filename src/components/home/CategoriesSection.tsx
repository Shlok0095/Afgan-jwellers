"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-3">
            Explore Collections
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dark mb-4">
            Shop by Category
          </h2>
          <p className="font-cormorant text-xl text-brand-text/60 max-w-lg mx-auto">
            Three collections, each a universe of handcrafted beauty
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                href={`/shop/${cat.id}`}
                className="group block relative rounded-3xl overflow-hidden shadow-card hover:shadow-luxury-hover transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] img-zoom">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/15 to-transparent group-hover:from-dark/80 transition-all duration-500" />
                </div>

                {/* Glass badge top */}
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5">
                  <span className="text-[10px] font-medium text-accent tracking-widest uppercase">
                    {cat.count} pieces
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 inset-x-0 p-7">
                  <p className="text-xs tracking-[0.25em] text-gold/80 uppercase mb-2 font-light">
                    {cat.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-primary/65 leading-relaxed mb-5 font-light line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-4 transition-all duration-300">
                    Explore <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
