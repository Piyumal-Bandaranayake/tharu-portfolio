"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Delivered", value: "150+" },
    { label: "Countries Flown", value: "12" },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden border border-border/50"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none" />
            {/* TODO: replace with real asset */}
            <Image
              src="https://images.unsplash.com/photo-1542051812871-755651c6e1c9?auto=format&fit=crop&q=80&w=1200"
              alt="Portrait of the videographer"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-widest text-foreground mb-6">
              The <span className="text-primary">Vision</span>
            </h2>
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
              <p>
                I am a passionate videographer and FAA Part 107 certified aerial cinematographer specializing in capturing grand, cinematic moments. What started as a fascination with cameras has evolved into a relentless pursuit of the perfect shot from every angle—grounded or airborne.
              </p>
              <p>
                My work is defined by moody, dynamic visuals and precise pacing. Whether it's the sleek lines of a luxury estate, the chaotic energy of a commercial shoot, or the intimate warmth of a wedding, I strive to elevate every project with a filmic aesthetic that commands attention.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-heading text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60">
                    {stat.label}
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
