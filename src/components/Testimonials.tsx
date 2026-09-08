"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "The aerial shots took our commercial to a level we didn't think was possible. Absolute cinematic perfection.",
    name: "Sarah Jenkins",
    company: "Neon Studios",
  },
  {
    quote: "Professional, punctual, and an incredible eye for lighting. The real estate video helped sell the property in a week.",
    name: "David Chen",
    company: "Luxe Estates",
  },
  {
    quote: "Captured our wedding with such emotion and grandeur. We felt like we were watching a movie of our own lives.",
    name: "Emily & Mark",
    company: "Private Clients",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative">
        <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-primary/10" size={120} />
        
        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic mb-8">
                &quot;{TESTIMONIALS[currentIndex].quote}&quot;
              </p>
              <div className="uppercase tracking-widest text-sm">
                <span className="font-bold text-primary">{TESTIMONIALS[currentIndex].name}</span>
                <span className="text-foreground/50 mx-2">|</span>
                <span className="text-foreground/70">{TESTIMONIALS[currentIndex].company}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button onClick={prev} className="p-2 rounded-full border border-border text-foreground hover:bg-card hover:text-primary transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="p-2 rounded-full border border-border text-foreground hover:bg-card hover:text-primary transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
