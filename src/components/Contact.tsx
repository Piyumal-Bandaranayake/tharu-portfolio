"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Youtube } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-widest text-foreground mb-6">
              Let&apos;s <span className="text-primary">Create</span>
            </h2>
            <p className="text-foreground/70 font-light leading-relaxed mb-12">
              Ready to elevate your project with cinematic visuals? Reach out to discuss your vision, rates, and availability. 
            </p>

            <div className="bg-background/50 border border-border/50 p-6 rounded-lg mb-12 inline-block">
              <span className="flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-bold">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Currently booking for August
              </span>
            </div>

            <div className="space-y-6">
              <a href="mailto:hello@tharu.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                <Mail size={24} />
                <span className="tracking-wide">hello@tharu.com</span>
              </a>
              <div className="flex items-center gap-4 text-foreground/80">
                <MapPin size={24} />
                <span className="tracking-wide">Los Angeles, CA — Available Worldwide</span>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <a href="#" className="p-3 rounded-full bg-background border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-background border border-border hover:border-primary text-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background p-8 rounded-xl border border-border/50 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Name</label>
                <input
                  {...register("name")}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-destructive text-xs mt-1 block">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Email</label>
                <input
                  {...register("email")}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-destructive text-xs mt-1 block">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Project Type</label>
                <select
                  {...register("projectType")}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                >
                  <option value="">Select a type...</option>
                  <option value="commercial">Commercial</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="wedding">Wedding / Event</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <span className="text-destructive text-xs mt-1 block">{errors.projectType.message}</span>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">Project Details</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your vision..."
                />
                {errors.message && <span className="text-destructive text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-background font-bold tracking-widest uppercase py-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>

              {isSuccess && (
                <div className="p-4 bg-primary/10 border border-primary/20 text-primary rounded-md text-center text-sm font-medium">
                  Message sent successfully. I&apos;ll be in touch soon!
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
