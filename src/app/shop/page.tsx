"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, Grid3X3, LayoutList } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { allProducts, categories, type Category } from "@/lib/products";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "new", label: "New Arrivals" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState("featured");
  const [gridView, setGridView] = useState(true);

  const filtered = useMemo(() => {
    let list = activeCategory === "all" ? allProducts : allProducts.filter((p) => p.category === activeCategory);

    switch (sort) {
      case "price-asc": return [...list].sort((a, b) => a.price - b.price);
      case "price-desc": return [...list].sort((a, b) => b.price - a.price);
      case "rating": return [...list].sort((a, b) => b.rating - a.rating);
      case "new": return [...list].filter((p) => p.isNew).concat(list.filter((p) => !p.isNew));
      default: return list;
    }
  }, [activeCategory, sort]);

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Banner */}
      <div className="bg-dark py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <p className="text-xs tracking-[0.3em] text-gold/70 uppercase mb-3">Explore Everything</p>
          <h1 className="font-serif text-5xl font-bold text-primary mb-3">Our Collections</h1>
          <p className="font-cormorant text-xl text-primary/50 max-w-md mx-auto">
            Earrings, Neckpieces & Hand Accessories — all handcrafted with love
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === "all"
                  ? "bg-dark text-primary"
                  : "bg-secondary text-brand-text hover:bg-accent hover:text-white"
              )}
            >
              All ({allProducts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-dark text-primary"
                    : "bg-secondary text-brand-text hover:bg-accent hover:text-white"
                )}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Sort + View toggle */}
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm border border-secondary rounded-full px-4 py-2 bg-white text-brand-text focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="flex items-center gap-1 border border-secondary rounded-full p-1">
              <button
                onClick={() => setGridView(true)}
                className={cn("p-1.5 rounded-full transition-colors", gridView ? "bg-dark text-primary" : "text-brand-text hover:bg-secondary")}
              >
                <Grid3X3 size={15} />
              </button>
              <button
                onClick={() => setGridView(false)}
                className={cn("p-1.5 rounded-full transition-colors", !gridView ? "bg-dark text-primary" : "text-brand-text hover:bg-secondary")}
              >
                <LayoutList size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Count */}
        <p className="text-sm text-accent mb-6">{filtered.length} pieces</p>

        {/* Products Grid */}
        <div className={cn(
          "grid gap-5 lg:gap-6",
          gridView
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
        )}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
