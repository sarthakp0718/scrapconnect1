import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download App", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer id="contact" className="bg-surface-dark text-surface-dark-foreground pt-16 lg:pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Scrap<span className="text-primary">Connect</span>
              </span>
            </a>
            <p className="text-surface-dark-foreground/70 mb-6 max-w-sm">
              India's first smart industrial scrap management system. Turning waste into wealth with technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:scrapconnect@gmail.com" className="flex items-center gap-3 text-surface-dark-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                scrapconnect@gmail.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-surface-dark-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <div className="flex items-start gap-3 text-surface-dark-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Scrapconnect Headquarters</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-surface-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-dark-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-surface-dark-foreground/50">
              © {new Date().getFullYear()} ScrapConnect. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-surface-dark-foreground/5 flex items-center justify-center text-surface-dark-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8">
          <p className="text-sm text-surface-dark-foreground/40">
            Made with 💚 for a cleaner India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
