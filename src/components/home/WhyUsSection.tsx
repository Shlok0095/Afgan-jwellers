"use client";

import { motion } from "framer-motion";
import { Gem, Leaf, Globe, Brush, Package, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Brush,
    title: "Handcrafted Excellence",
    description:
      "Every piece is assembled by hand, bead by bead, with hours of patient artistry poured into each creation.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description:
      "We source only the finest Czech glass beads, freshwater pearls, and gold-filled findings for lasting beauty.",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description:
      "Your handcrafted treasure arrives in luxury packaging, carefully wrapped and shipped to any corner of the world.",
  },
  {
    icon: Brush,
    title: "Custom Designs",
    description:
      "Dream of a one-of-a-kind piece? We bring your vision to life through our bespoke custom order service.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    description:
      "Beautifully presented in sustainable, recyclable packaging â€” because luxury should never cost the Earth.",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Care Support",
    description:
      "We stand behind every piece we make. Reach out anytime for cleaning, repairs, or jewelry guidance.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-dark text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gold/70 uppercase font-medium mb-3">
            The AfghanJewellers Promise
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="font-cormorant text-xl text-primary/55 max-w-lg mx-auto">
            We believe jewelry should be as extraordinary as the person wearing it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group p-7 rounded-2xl border border-white/8 hover:border-gold/30 hover:bg-white/5 transition-all duration-400"
            >
              <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <feat.icon size={20} className="text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {feat.title}
              </h3>
              <p className="text-sm text-primary/50 leading-relaxed font-light">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
