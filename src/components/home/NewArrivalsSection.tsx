"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getNewArrivals } from "@/lib/products";

export default function NewArrivalsSection() {
  const newArrivals = getNewArrivals();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-3">
              Fresh Blooms
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dark">
              New Arrivals
            </h2>
            <p className="font-cormorant text-xl text-brand-text/60 mt-3 max-w-md">
              The latest additions to our handcrafted universe
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-dark transition-colors group"
            >
              View All <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {newArrivals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
