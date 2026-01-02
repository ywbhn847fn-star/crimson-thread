import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeaturedSection from "@/components/FeaturedSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductGrid />
      <FeaturedSection />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;