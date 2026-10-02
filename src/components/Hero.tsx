"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex overflow-hidden">
      {/* ── LEFT PANEL ─ dark side with text ── */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-between bg-[#1a1a1a] px-10 md:px-16 pt-32 pb-12 z-10">

        {/* Name + tagline */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Tharuka 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 font-medium"
          >
            Videographer + Drone Pilot
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-start gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-primary transition-colors">
            Scroll
          </span>
          <ChevronDown className="text-primary animate-bounce" size={22} />
        </motion.button>
      </div>

      {/* ── RIGHT PANEL ─ portrait photo ── */}
      <div className="hidden md:block relative w-1/2 bg-[#b0aaA0] overflow-hidden">
        {/*
          Replace the img below with your portrait photo.
          Place your image in /public/hero-portrait.jpg
          and change src to "/hero-portrait.jpg"
        */}
        <div className="w-full h-full flex items-center justify-center bg-[#c8c0b4]">
          <img
            src="/tharuka.jpg"
            alt="Tharuka Samitha "
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              // fallback placeholder styling when image is missing
              const el = e.currentTarget;
              el.style.display = "none";
              const parent = el.parentElement!;
              parent.style.background =
                "linear-gradient(160deg,#c8bfb0 0%,#9a9080 100%)";
            }}
          />
          {/* Subtle dark vignette on the left edge to blend with dark panel */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#1a1a1a]/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
