"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { type Product } from "@/lib/products";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  tagline: string;
}

interface Props {
  category: Category;
  products: Product[];
}

export default function CategoryPageClient({ category, products }: Props) {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-gold/80 uppercase mb-2">{category.tagline}</p>
          <h1 className="font-serif text-5xl font-bold text-primary">{category.name}</h1>
          <p className="text-primary/60 text-sm mt-2 max-w-md mx-auto font-light px-4">
            {category.description}
          </p>
        </motion.div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-accent mb-8">{products.length} handcrafted pieces</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
