import { useState } from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, image, category, isNew }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group relative bg-card overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* New Badge */}
        {isNew && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-display text-xs tracking-wider px-3 py-1">
            NEW
          </span>
        )}

        {/* Like Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-background/20 backdrop-blur-sm hover:bg-primary transition-colors duration-300"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isLiked ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </button>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <Button variant="hero" className="w-full">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground font-display tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-display text-base font-medium mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="font-display text-lg font-bold text-primary">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;