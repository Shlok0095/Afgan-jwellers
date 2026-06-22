"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Design Inspiration",
    description:
      "Each design begins with nature â€” a petal's curve, a berry's blush, or the way morning dew sits on a leaf. Our artisans sketch every detail before a single bead is touched.",
  },
  {
    step: "02",
    title: "Material Selection",
    description:
      "We hand-select every bead, thread, and finding. Only materials that meet our quality standards make it into an AfghanJewellers piece â€” Czech glass, freshwater pearls, and gold-filled wire.",
  },
  {
    step: "03",
    title: "Handcrafting",
    description:
      "Bead by bead, each piece takes shape in the hands of our skilled artisans. A single pair of earrings can require up to 4 hours of focused, meditative work.",
  },
  {
    step: "04",
    title: "Quality & Care",
    description:
      "Every finished piece undergoes a thorough quality check before being wrapped in our signature sustainable packaging, ready to become part of your story.",
  },
];

export default function CraftsmanshipSection() {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[540px]"
          >
            <div className="absolute top-0 left-0 right-16 h-72 rounded-3xl overflow-hidden shadow-luxury-hover">
              <Image
                src="/images/earrings/earring-5.jpeg"
                alt="Handcrafting earrings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
            <div className="absolute bottom-0 right-0 left-20 h-64 rounded-3xl overflow-hidden shadow-luxury">
              <Image
                src="/images/necklace/necklace-5.jpeg"
                alt="Handcrafting necklace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 35vw"
              />
            </div>

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-52 left-10 glass rounded-2xl p-4 shadow-gold z-10 max-w-[180px]"
            >
              <p className="font-serif text-3xl font-bold text-dark">4hrs</p>
              <p className="text-xs text-accent mt-1 font-light leading-snug">
                average time crafting a single pair of earrings
              </p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-xs tracking-[0.3em] text-accent uppercase font-medium mb-3">
              The Art of Making
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-dark mb-4 leading-tight">
              Craftsmanship
              <br />
              <span className="italic font-normal text-accent">in Every Stitch</span>
            </h2>
            <p className="font-cormorant text-xl text-brand-text/65 mb-10 max-w-md leading-relaxed">
              Our jewelry is not manufactured â€” it is composed, like music. Each
              piece carries the warmth of human hands and the intention of artistry.
            </p>

            <div className="space-y-7">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="font-serif text-xs font-bold text-accent">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-text/60 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
