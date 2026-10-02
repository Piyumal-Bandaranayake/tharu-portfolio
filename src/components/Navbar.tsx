"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];
  const rightLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-5 bg-transparent ${
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* ── Desktop layout: left links | center logo | right links ── */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left nav links */}
          <div className="flex items-center gap-10 w-1/3">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/75 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div className="flex justify-center w-1/3">
            <Link href="/" className="block group">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-20 md:h-24 w-auto object-contain transition-opacity group-hover:opacity-75 drop-shadow-md"
              />
            </Link>
          </div>

          {/* Right nav links */}
          <div className="flex items-center justify-end gap-10 w-1/3">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/75 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Mobile layout: logo left | hamburger right ── */}
        <div className="flex md:hidden items-center justify-between">
          <Link href="/" className="block">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 w-full bg-background/97 backdrop-blur-lg flex flex-col items-center py-10 gap-8 shadow-xl md:hidden"
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-heading tracking-widest uppercase text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
