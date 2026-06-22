"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <p className="text-xs tracking-[0.3em] text-gold/70 uppercase mb-3">Reach Out</p>
          <h1 className="font-serif text-5xl font-bold text-primary mb-3">Get in Touch</h1>
          <p className="font-cormorant text-xl text-primary/50 max-w-md mx-auto">
            We'd love to hear from you — whether it's a question, a custom order, or just to say hello
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl font-bold text-dark mb-6">Let's Connect</h2>
              <p className="text-sm text-brand-text/65 font-light leading-relaxed">
                Whether you have a question about a piece, need help choosing a gift, or want to
                discuss a custom order — we're here and happy to help.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-accent uppercase font-medium mb-1">Email</p>
                  <a
                    href="mailto:afghanshainila@gmail.com"
                    className="text-sm text-dark hover:text-accent transition-colors"
                  >
                    afghanshainila@gmail.com
                  </a>
                  <p className="text-xs text-brand-text/45 mt-0.5 font-light">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-accent uppercase font-medium mb-1">Social</p>
                  <div className="flex gap-3 mt-1">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-dark hover:text-accent transition-colors font-medium"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-dark hover:text-accent transition-colors font-medium"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 rounded-2xl p-6">
              <p className="font-serif text-lg font-semibold text-dark mb-2">Custom Orders</p>
              <p className="text-sm text-brand-text/65 font-light leading-relaxed">
                Have a design in mind? We love creating bespoke pieces. Reach out with your idea
                and we'll bring it to life.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="bg-white rounded-3xl p-12 shadow-card text-center">
                <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold text-dark mb-2">Message Sent!</h3>
                <p className="text-brand-text/65 font-light">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 shadow-card space-y-5">
                <h2 className="font-serif text-2xl font-bold text-dark mb-2">Send a Message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-accent uppercase font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full border border-secondary rounded-xl px-4 py-3 text-sm text-dark placeholder:text-brand-text/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-accent uppercase font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@email.com"
                      className="w-full border border-secondary rounded-xl px-4 py-3 text-sm text-dark placeholder:text-brand-text/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-accent uppercase font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Custom order, product inquiry..."
                    className="w-full border border-secondary rounded-xl px-4 py-3 text-sm text-dark placeholder:text-brand-text/30 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-accent uppercase font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full border border-secondary rounded-xl px-4 py-3 text-sm text-dark placeholder:text-brand-text/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark text-primary py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
