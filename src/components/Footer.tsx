import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Collections", href: "#" },
      { name: "Sale", href: "#" },
    ],
    help: [
      { name: "FAQs", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Size Guide", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Press", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="font-display text-3xl font-bold tracking-tight inline-block mb-4">
              <span className="text-primary">VOID</span>
              <span className="text-foreground">STREET</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Premium streetwear for those who refuse to blend in. Born in the streets, made for the world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-primary transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 text-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-primary transition-colors duration-300 group"
              >
                <Twitter className="h-5 w-5 text-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-4">SHOP</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider mb-4">HELP</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 VOIDSTREET. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;