import Navbar from "@/components/Navbar";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      <Navbar />
      <div className="py-12">
        <FeaturedWork />
      </div>
      <Footer />
    </main>
  );
}
