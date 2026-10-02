"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openReel = () => setPlaying(true);
  const closeReel = () => {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      {/* ── Showreel Banner ── */}
      <section
        className="relative w-full h-[80vh] overflow-hidden bg-black flex items-center justify-center cursor-pointer group"
        onClick={openReel}
      >
        {/* Background cinematic still / loop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-700"
        >
          <source src="/showreel-preview.mp4" type="video/mp4" />
        </video>

        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Minimal centered play button */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="text-white drop-shadow-xl" size={52} fill="white" strokeWidth={0} />
          </div>
        </motion.div>
      </section>

      {/* ── Fullscreen Video Lightbox ── */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/97 backdrop-blur-sm"
            onClick={closeReel}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 z-10 text-white/60 hover:text-white transition-colors"
              onClick={closeReel}
            >
              <X size={36} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-6xl aspect-video mx-4 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                controls
                autoPlay
                className="w-full h-full object-cover bg-black"
                /*
                  Replace with your full showreel video.
                  Place at /public/showreel.mp4
                */
                src="/showreel.mp4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
