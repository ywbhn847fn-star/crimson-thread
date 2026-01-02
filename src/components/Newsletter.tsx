import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the crew!",
        description: "You'll be the first to know about exclusive drops.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,hsl(var(--primary))_50px,hsl(var(--primary))_51px)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-primary text-sm tracking-[0.3em] mb-4">
            JOIN THE MOVEMENT
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            GET EARLY
            <br />
            <span className="text-stroke">ACCESS</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Be the first to know about exclusive drops, limited editions, and member-only discounts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-secondary border-2 border-border text-foreground placeholder:text-muted-foreground font-display tracking-wider focus:border-primary"
            />
            <Button variant="hero" size="lg" type="submit">
              Subscribe
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;