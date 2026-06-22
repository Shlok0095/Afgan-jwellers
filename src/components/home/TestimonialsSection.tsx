"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "I wore the Blush Petal Drops to my sister's wedding and received more compliments on my earrings than anything else! The quality is absolutely stunning â€” you can feel the love in every bead.",
    product: "Blush Petal Drops",
    avatar: "P",
  },
  {
    name: "Ayesha Malik",
    location: "Hyderabad",
    rating: 5,
    text: "AfghanJewellers has ruined me for regular jewelry forever. The Bloom Collar Necklace is a masterpiece. Every time I wear it, people stop me to ask where I got it. Worth every rupee.",
    product: "Bloom Collar Necklace",
    avatar: "A",
  },
  {
    name: "Fatima Rahman",
    location: "Delhi",
    rating: 5,
    text: "The packaging alone made me emotional â€” so thoughtful and beautiful. The Cherry Charm Bracelet is even more gorgeous in person. My go-to for every special occasion gift now.",
    product: "Cherry Charm Bracelet",
    avatar: "F",
  },
  {
    name: "Noor Hussain",
    location: "Bangalore",
    rating: 5,
    text: "Ordered the Petal Stack Set as a birthday gift for my mother. She cried. She's been wearing them every day since. That tells you everything about the quality and beauty of the work.",
    product: "Petal Stack Set",
    avatar: "N",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-3">
            Worn with Love
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="font-cormorant text-xl text-brand-text/60 max-w-lg mx-auto">
            Real stories from the hearts we've adorned
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-3xl p-10 sm:p-12 shadow-card text-center"
              >
                <Quote size={32} className="text-gold/30 mx-auto mb-6" />

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                <blockquote className="font-cormorant text-2xl text-dark leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-rose-gold flex items-center justify-center">
                    <span className="font-serif font-bold text-white text-lg">
                      {testimonials[current].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-serif font-semibold text-dark">{testimonials[current].name}</p>
                    <p className="text-xs text-accent">{testimonials[current].location}</p>
                  </div>
                </div>

                <p className="text-xs tracking-widest text-accent/50 uppercase mt-6 font-light">
                  Purchased: {testimonials[current].product}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-secondary hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-secondary"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-secondary hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
