"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const shipping = cartTotal >= 2000 ? 0 : 199;
  const discount = couponApplied ? Math.round(cartTotal * 0.1) : 0;
  const total = cartTotal - discount + shipping;

  function applyCoupon() {
    if (coupon.toLowerCase() === "afghan10") {
      setCouponApplied(true);
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <ShoppingBag size={64} className="text-secondary mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-bold text-dark mb-3">Your Bag is Empty</h1>
          <p className="font-cormorant text-xl text-brand-text/60 mb-8">
            Add some handcrafted beauty to your collection
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-dark text-primary px-8 py-4 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
          >
            Start Shopping <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl font-bold text-dark mb-10"
        >
          Shopping Bag ({state.items.length})
        </motion.h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {state.items.map(({ product, quantity }) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-2xl p-5 shadow-card flex gap-5"
                >
                  <Link href={`/product/${product.id}`} className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[10px] tracking-widest text-accent uppercase mb-0.5">
                          {product.category === "bracelets" ? "Hand Accessories" : product.category === "necklace" ? "Neckpiece" : "Earrings"}
                        </p>
                        <Link href={`/product/${product.id}`}>
                          <h3 className="font-serif font-semibold text-dark text-sm hover:text-accent transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-accent/50 hover:text-red-400 transition-colors p-1 flex-shrink-0"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-secondary rounded-full px-1">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:text-accent transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:text-accent transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-serif font-semibold text-dark">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              onClick={clearCart}
              className="text-xs text-accent/60 hover:text-accent transition-colors underline underline-offset-2"
            >
              Clear bag
            </button>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h2 className="font-serif text-xl font-bold text-dark mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-text/65">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon discount</span>
                    <span>−{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-brand-text/65">Shipping</span>
                  <span className={shipping === 0 ? "text-green-600" : "font-medium"}>
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-accent/60 font-light">
                    Add {formatPrice(2000 - cartTotal)} more for free shipping
                  </p>
                )}
                <div className="pt-3 border-t border-secondary flex justify-between">
                  <span className="font-serif font-semibold text-dark">Total</span>
                  <span className="font-serif font-bold text-dark text-lg">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="mt-5">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-accent/50" />
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Coupon code"
                      className="w-full border border-secondary rounded-full pl-8 pr-3 py-2.5 text-xs focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <button
                    onClick={applyCoupon}
                    className="bg-secondary hover:bg-accent hover:text-white px-4 py-2.5 rounded-full text-xs font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-xs text-green-600 mt-1.5">10% discount applied!</p>
                )}
                <p className="text-[10px] text-accent/40 mt-1">Try: AFGHAN10</p>
              </div>

              <Link
                href="/checkout"
                className="mt-5 w-full bg-dark text-primary py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent transition-all duration-300 group"
              >
                Proceed to Checkout <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="bg-secondary/30 rounded-2xl p-4 space-y-2">
              {["100% Handcrafted Quality", "Secure & Encrypted Checkout", "Luxury Gift Packaging Included"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs text-brand-text/65">
                  <span className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold text-[9px]">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
