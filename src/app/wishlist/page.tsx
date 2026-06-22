"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";

export default function WishlistPage() {
  const { state } = useCart();
  const wishlistProducts = state.wishlist
    .map((id) => getProductById(id))
    .filter(Boolean) as ReturnType<typeof getProductById>[];

  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Heart size={24} className="text-rose-gold fill-rose-gold" />
            <h1 className="font-serif text-4xl font-bold text-dark">My Wishlist</h1>
          </div>
          <p className="font-cormorant text-xl text-brand-text/60">
            {wishlistProducts.length > 0
              ? `${wishlistProducts.length} piece${wishlistProducts.length !== 1 ? "s" : ""} you've saved`
              : "Pieces you love will appear here"}
          </p>
        </motion.div>

        {wishlistProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Heart size={64} className="text-secondary mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-dark mb-3">Nothing saved yet</h2>
            <p className="text-brand-text/60 mb-8 font-light">
              Browse our collections and save the pieces that speak to you
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-dark text-primary px-8 py-4 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
            >
              Explore Collections <ArrowRight size={15} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {(wishlistProducts.filter(Boolean) as NonNullable<typeof wishlistProducts[0]>[]).map((product, i) => (
              <ProductCard key={product!.id} product={product!} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
