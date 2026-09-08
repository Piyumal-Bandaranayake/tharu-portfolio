"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <Link href="/" className="text-2xl font-heading tracking-widest uppercase font-bold text-foreground">
          THARU<span className="text-primary">.</span>
        </Link>

        <div className="text-foreground/50 text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Tharu. All rights reserved.
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
