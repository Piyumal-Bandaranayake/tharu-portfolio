"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  thumbnail: string;
  videoSrc: string;
};

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Aerial & Drone",
    thumbnail:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "Videography",
    thumbnail:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "3",
    title: "Photography",
    thumbnail:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "4",
    title: "Desing",
    thumbnail:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
    videoSrc:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
];

export default function FeaturedWork() {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  return (
    <section id="work">
      {/* ── Alternating split-panel grid ── */}
      {PROJECTS.map((project, index) => {
        const isEven = index % 2 === 0;

        const PhotoPanel = (
          <motion.div
            className="relative w-full md:w-[60%] min-h-[40vw] md:min-h-0 overflow-hidden cursor-pointer group"
            onClick={() => setActiveVideo(project)}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Photo */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Play hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        );

        const TextPanel = (
          <motion.div
            className="w-full md:w-[40%] min-h-[28vw] md:min-h-0 bg-[#1e1e1e] flex items-center justify-center px-10 md:px-16 cursor-pointer group"
            onClick={() => setActiveVideo(project)}
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-heading text-primary/80 group-hover:text-primary transition-colors duration-300 leading-tight mb-4">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-primary/60 group-hover:text-primary transition-colors duration-300">
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        );

        return (
          <div key={project.id} className="flex flex-col md:flex-row md:h-[65vh]">
            {isEven ? (
              <>
                {PhotoPanel}
                {TextPanel}
              </>
            ) : (
              <>
                {TextPanel}
                {PhotoPanel}
              </>
            )}
          </div>
        );
      })}

      {/* ── Video Lightbox ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-primary transition-colors z-10"
              onClick={() => setActiveVideo(null)}
            >
              <X size={36} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                src={activeVideo.videoSrc}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
