import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import productJacket from "@/assets/product-jacket.jpg";

const FeaturedSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group overflow-hidden">
            <img
              src={productJacket}
              alt="Featured Collection"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block bg-primary text-primary-foreground font-display text-xs tracking-wider px-4 py-2 mb-4">
                LIMITED EDITION
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-display text-primary text-sm tracking-[0.3em] mb-4">
              EXCLUSIVE DROP
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              MIDNIGHT
              <br />
              <span className="text-stroke">COLLECTION</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Inspired by the urban night, our latest collection blends premium materials with bold silhouettes. Only 500 pieces available worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg">
                Shop Collection
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">500</p>
                <p className="text-sm text-muted-foreground mt-1">Pieces Only</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold">12</p>
                <p className="text-sm text-muted-foreground mt-1">Unique Items</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold">1</p>
                <p className="text-sm text-muted-foreground mt-1">Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;