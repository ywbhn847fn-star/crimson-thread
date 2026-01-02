import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <p className="font-display text-primary text-sm md:text-base tracking-[0.3em] mb-4 animate-fade-in">
            NEW COLLECTION 2025
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            <span className="block animate-slide-up">DEFINE</span>
            <span className="block animate-slide-up text-stroke" style={{ animationDelay: "0.1s" }}>
              YOUR
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-primary">STYLE</span>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Premium streetwear for those who refuse to blend in. Limited drops, unlimited attitude.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl">
              Shop Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-display text-xs tracking-widest text-muted-foreground">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;