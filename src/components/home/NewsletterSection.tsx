"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="py-24 bg-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-rose-gold/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-gold" />
            <span className="text-xs tracking-[0.3em] text-gold/70 uppercase font-medium">
              Exclusive Access
            </span>
            <Sparkles size={16} className="text-gold" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
            Join Our Exclusive
            <br />
            <span className="italic font-normal gold-text">Jewelry Circle</span>
          </h2>

          <p className="font-cormorant text-xl text-primary/50 mb-10 max-w-lg mx-auto leading-relaxed">
            Be the first to discover new collections, receive artisan stories, and enjoy
            members-only offers crafted just for you.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle size={40} className="text-gold" />
              <p className="font-serif text-xl text-primary">You're in the circle!</p>
              <p className="text-sm text-primary/50 font-light">
                Welcome to AfghanJwellers. Expect something beautiful in your inbox soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/6 border border-white/15 rounded-full pl-11 pr-5 py-3.5 text-sm text-primary/80 placeholder:text-primary/30 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-gold text-dark px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-rose-gold transition-all duration-300 whitespace-nowrap tracking-wide"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-primary/25 mt-5 font-light">
            No spam, ever. Unsubscribe gracefully at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
