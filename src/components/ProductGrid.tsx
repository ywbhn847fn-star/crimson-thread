import ProductCard from "./ProductCard";
import productHoodie from "@/assets/product-hoodie.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productJoggers from "@/assets/product-joggers.jpg";

const products = [
  {
    id: 1,
    name: "Shadow Hoodie",
    price: 189,
    image: productHoodie,
    category: "Hoodies",
    isNew: true,
  },
  {
    id: 2,
    name: "Void Runner X",
    price: 245,
    image: productSneakers,
    category: "Footwear",
    isNew: true,
  },
  {
    id: 3,
    name: "Rebel Graphic Tee",
    price: 79,
    image: productTshirt,
    category: "T-Shirts",
    isNew: false,
  },
  {
    id: 4,
    name: "Street Logo Cap",
    price: 49,
    image: productCap,
    category: "Accessories",
    isNew: false,
  },
  {
    id: 5,
    name: "Midnight Bomber",
    price: 329,
    image: productJacket,
    category: "Outerwear",
    isNew: true,
  },
  {
    id: 6,
    name: "Track Joggers",
    price: 129,
    image: productJoggers,
    category: "Bottoms",
    isNew: false,
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-display text-primary text-sm tracking-[0.3em] mb-2">
              FEATURED
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              NEW ARRIVALS
            </h2>
          </div>
          <a
            href="#"
            className="font-display text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-2"
          >
            View All Products
            <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;