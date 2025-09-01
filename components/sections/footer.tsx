"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { name: "Features", href: "features" },
  { name: "Privacy", href: "privacy" },
  { name: "Terms", href: "terms" },
];

const social = [
  { name: "GitHub", href: "https://github.com/rhoda-labs" },
  { name: "Twitter", href: "https://twitter.com/rhodalabs" },
];

export function Footer() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("http")) return;
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="relative bg-white border-t border-black/5">
      <Container className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand & Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-12">
                <Typography
                  variant="subhead"
                  className="text-black font-bold text-xl"
                >
                  Rhoda
                </Typography>

                <Typography
                  variant="body"
                  className="text-black/60 hidden sm:block"
                >
                  The first AI-native operating system
                </Typography>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-8">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-black/60 hover:text-black transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}

              <div className="w-px h-4 bg-black/20"></div>

              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 hover:text-black transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
