import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      <Navbar />
      <div className="py-12">
        <About />
      </div>
      <Footer />
    </main>
  );
}
