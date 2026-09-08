"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Video, Scissors, CheckCircle } from "lucide-react";

export default function Services() {
  const steps = [
    {
      title: "Consult",
      description: "Understanding your vision, location scouting, and planning the shoot down to the minute.",
      icon: <MessagesSquare size={32} />,
    },
    {
      title: "Shoot",
      description: "Executing the plan with high-end cinema cameras and drones for dynamic coverage.",
      icon: <Video size={32} />,
    },
    {
      title: "Edit",
      description: "Crafting the narrative with precise cuts, cinematic color grading, and sound design.",
      icon: <Scissors size={32} />,
    },
    {
      title: "Deliver",
      description: "Providing high-resolution final deliverables optimized for your chosen platforms.",
      icon: <CheckCircle size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-widest text-foreground">
            The <span className="text-primary">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-heading uppercase tracking-wide text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-foreground/70 font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
