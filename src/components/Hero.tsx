"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Subtle top & bottom overlays for readability and smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/90 z-10 pointer-events-none" />
      </div>

      {/* Top Left Corner Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-6 md:top-8 md:left-10 z-20"
      >
        <Link href="/" className="block">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 md:h-20 w-auto object-contain transition-opacity hover:opacity-80 drop-shadow-md"
          />
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 z-20 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2 font-medium">Scroll</span>
        <ChevronDown className="text-primary" size={24} />
      </motion.div>
    </section>
  );
}

