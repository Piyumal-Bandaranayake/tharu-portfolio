import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Showreel />
      <FeaturedWork />
      <Services />
      <ContactCTA />
      <Contact />
      <Footer />
    </main>
  );
}
