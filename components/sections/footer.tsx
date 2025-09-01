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
  { name: "Twitter", href: "https://twitter.com/rhodaos" },
  { name: "GitHub", href: "https://github.com/rhodaos" },
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
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Brand */}
          <div className="flex items-center space-x-12">
            <Typography
              variant="subhead"
              className="text-black font-bold text-xl"
            >
              Rhoda
            </Typography>

            <Typography
              variant="body"
              className="text-black/60 hidden md:block"
            >
              The first AI-native operating system
            </Typography>
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
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-black/5 text-center"
        >
          <Typography variant="body-small" className="text-black/40">
            © {new Date().getFullYear()} Rhoda. Building the future of
            human-computer interaction.
          </Typography>
        </motion.div>
      </Container>
    </footer>
  );
}
