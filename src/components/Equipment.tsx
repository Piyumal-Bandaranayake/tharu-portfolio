"use client";

import { motion } from "framer-motion";
import { Camera, ShieldCheck, Film } from "lucide-react";

export default function Equipment() {
  const gear = [
    { name: "DJI Mavic 3 Pro", icon: <Film size={32} /> }, // Using Film as Drone alternative if lucide-react lacks Drone in this version
    { name: "Sony FX3", icon: <Camera size={32} /> },
    { name: "DJI Ronin RS3", icon: <Camera size={32} /> },
  ];

  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* FAA Certification */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 px-6 py-4 bg-card rounded-lg border border-primary/20 shadow-[0_0_15px_rgba(212,162,78,0.1)]"
          >
            <ShieldCheck className="text-primary" size={40} />
            <div>
              <div className="text-sm uppercase tracking-widest text-foreground/60 mb-1">Certified</div>
              <div className="font-heading tracking-wide text-xl text-foreground">FAA Part 107</div>
            </div>
          </motion.div>

          {/* Gear List */}
          <div className="flex-1 w-full flex flex-wrap justify-center md:justify-end gap-8 md:gap-16">
            {gear.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 text-foreground/70 hover:text-primary transition-colors"
              >
                {item.icon}
                <span className="text-xs uppercase tracking-widest">{item.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
