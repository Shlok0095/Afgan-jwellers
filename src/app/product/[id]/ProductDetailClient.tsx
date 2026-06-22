"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
  Shield,
  Truck,
  RefreshCw,
  Package,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { formatPrice, cn } from "@/lib/utils";

interface Props {
  product: Product;
  related: Product[];
}

const categoryLabel: Record<string, string> = {
  earrings: "Earrings",
  necklace: "Neckpiece",
  bracelets: "Hand Accessories",
};

export default function ProductDetailClient({ product, related }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const wished = isInWishlist(product.id);

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const prevImg = () => setActiveImg((i) => (i - 1 + product.images.length) % product.images.length);
  const nextImg = () => setActiveImg((i) => (i + 1) % product.images.length);

  return (
    <div className="min-h-screen bg-primary">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-accent">
          <Link href="/" className="hover:text-dark transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-dark transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:text-dark transition-colors">
            {categoryLabel[product.category]}
          </Link>
          <span>/</span>
          <span className="text-dark font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary/20 shadow-luxury">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[activeImg]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 95vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={cn(
                      "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200",
                      i === activeImg ? "border-gold shadow-gold" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-xs tracking-[0.2em] text-accent uppercase font-medium mb-2">
                  {categoryLabel[product.category]}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-dark leading-tight">
                  {product.name}
                </h1>
              </div>
              <div className="flex gap-1 flex-shrink-0 mt-1">
                {product.isBestSeller && (
                  <span className="bg-gold text-dark text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-accent text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-secondary fill-secondary"}
                  />
                ))}
              </div>
              <span className="text-sm text-accent font-medium">{product.rating}</span>
              <span className="text-xs text-accent/60">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl font-bold text-dark">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-accent/50 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="bg-secondary text-accent text-xs font-medium px-2.5 py-1 rounded-full">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="font-cormorant text-lg text-brand-text/70 leading-relaxed mb-6 border-t border-secondary pt-6">
              {product.longDescription}
            </p>

            {/* Materials */}
            <div className="mb-6">
              <p className="text-xs tracking-widest text-accent uppercase font-medium mb-2">Materials</p>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((m) => (
                  <span key={m} className="text-xs bg-secondary px-3 py-1.5 rounded-full text-brand-text font-light">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleAdd}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 btn-luxury",
                  added
                    ? "bg-green-600 text-white"
                    : "bg-dark text-primary hover:bg-accent"
                )}
              >
                <ShoppingBag size={16} />
                {added ? "Added to Bag!" : "Add to Bag"}
              </motion.button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={cn(
                  "w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                  wished
                    ? "bg-rose-gold border-rose-gold text-white"
                    : "border-secondary hover:border-rose-gold text-brand-text hover:text-rose-gold"
                )}
              >
                <Heart size={18} className={wished ? "fill-white" : ""} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Truck, label: "Free shipping above ₹2,000" },
                { icon: Package, label: "Luxury gift packaging" },
                { icon: Shield, label: "100% handcrafted guarantee" },
                { icon: RefreshCw, label: "Easy 7-day returns" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-white rounded-xl p-3">
                  <Icon size={14} className="text-gold flex-shrink-0" />
                  <span className="text-xs text-brand-text/70 font-light leading-snug">{label}</span>
                </div>
              ))}
            </div>

            {/* Care instructions */}
            <div className="bg-secondary/40 rounded-2xl p-4">
              <p className="text-xs tracking-widest text-accent uppercase font-medium mb-1.5">Care Guide</p>
              <p className="text-sm text-brand-text/65 font-light">{product.careInstructions}</p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-3xl font-bold text-dark mb-8">You May Also Love</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
