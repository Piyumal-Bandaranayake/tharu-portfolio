"use client";

import { motion } from "framer-motion";

// Replace with your actual WhatsApp number (include country code, no +/spaces)
const WHATSAPP_NUMBER = "94XXXXXXXXX";
const WHATSAPP_MESSAGE = "Hi! I'd love to discuss a project with you.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 flex items-center justify-center hover:shadow-[#25D366]/60 hover:shadow-xl transition-shadow duration-300"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.002 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.637 4.637 1.76 6.613L2.667 29.333l6.88-1.733A13.253 13.253 0 0 0 16.002 29.333c7.363 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333zm0 24.267a11.04 11.04 0 0 1-5.627-1.533l-.4-.24-4.08 1.027 1.053-3.96-.267-.413A11.04 11.04 0 0 1 4.934 16c0-6.107 4.96-11.067 11.067-11.067 6.106 0 11.066 4.96 11.066 11.067 0 6.106-4.96 11.067-11.066 11.067zm6.08-8.267c-.334-.16-1.974-.974-2.28-1.08-.307-.107-.534-.16-.76.16-.227.32-.867 1.08-1.067 1.307-.2.227-.4.253-.734.08-.333-.16-1.413-.52-2.693-1.653-.996-.88-1.667-1.973-1.866-2.306-.2-.334-.021-.514.15-.68.155-.15.334-.387.5-.587.167-.2.22-.334.334-.56.113-.227.053-.427-.027-.587-.08-.16-.76-1.813-1.04-2.48-.267-.64-.547-.56-.76-.573-.2-.013-.427-.013-.653-.013a1.27 1.27 0 0 0-.907.427c-.307.333-1.173 1.147-1.173 2.8s1.2 3.24 1.373 3.467c.16.227 2.347 3.573 5.693 5.013.8.347 1.413.547 1.894.707.8.253 1.52.213 2.093.133.64-.093 1.974-.8 2.254-1.574.267-.773.267-1.44.187-1.573-.08-.133-.307-.213-.64-.373z"/>
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}
