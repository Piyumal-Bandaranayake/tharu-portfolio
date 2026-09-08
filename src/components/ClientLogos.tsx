"use client";

import { motion } from "framer-motion";

export default function ClientLogos() {
  const logos = [
    "LUXE ESTATES", "NEON STUDIOS", "ELEVATE CREATIVE", "AERIAL DYNAMICS", "GLOBAL PRODUCTIONS", "VERTEX MEDIA",
    "LUXE ESTATES", "NEON STUDIOS", "ELEVATE CREATIVE", "AERIAL DYNAMICS", "GLOBAL PRODUCTIONS", "VERTEX MEDIA"
  ];

  return (
    <section className="py-12 bg-card border-y border-border overflow-hidden flex">
      <motion.div
        className="flex space-x-16 whitespace-nowrap"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="text-2xl font-heading text-foreground/30 uppercase tracking-widest hover:text-primary transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
