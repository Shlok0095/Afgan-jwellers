"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { formatPrice, cn } from "@/lib/utils";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const router = useRouter();
  const [imageIdx, setImageIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const wished = isInWishlist(product.id);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    toggleWishlist(product.id);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link href={`/product/${product.id}`} className="block group product-card">
        <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400">
          {/* Image */}
          <div
            className="relative aspect-square img-zoom bg-secondary/30"
            onMouseEnter={() => product.images[1] && setImageIdx(1)}
            onMouseLeave={() => setImageIdx(0)}
          >
            <Image
              src={product.images[imageIdx] ?? product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {product.isBestSeller && (
                <span className="bg-gold text-dark text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
                  Best Seller
                </span>
              )}
              {product.isNew && (
                <span className="bg-accent text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
                  New
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-dark/80 text-primary text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleWishlist}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors duration-200",
                  wished ? "bg-rose-gold text-white" : "bg-white text-brand-text hover:bg-rose-gold hover:text-white"
                )}
              >
                <Heart size={14} className={wished ? "fill-white" : ""} />
              </motion.button>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); router.push(`/product/${product.id}`); }}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-secondary transition-colors"
              >
                <Eye size={14} className="text-brand-text" />
              </button>
            </div>

            {/* Add to cart overlay */}
            <motion.div
              initial={false}
              className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button
                onClick={handleAddToCart}
                className={cn(
                  "w-full py-3 text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300",
                  added
                    ? "bg-green-600 text-white"
                    : "bg-dark/90 text-primary hover:bg-dark"
                )}
              >
                <ShoppingBag size={14} />
                {added ? "Added!" : "Add to Bag"}
              </button>
            </motion.div>
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium mb-1">
              {product.category === "bracelets"
                ? "Hand Accessories"
                : product.category === "necklace"
                ? "Neckpiece"
                : "Earrings"}
            </p>
            <h3 className="font-serif text-dark font-semibold text-sm leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
              {product.name}
            </h3>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-secondary fill-secondary"}
                />
              ))}
              <span className="text-[10px] text-accent ml-1">({product.reviewCount})</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-dark text-sm">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xs text-accent/60 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
