"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navY = useTransform(scrollY, [0, 100], [0, 20]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.8, 1]);
  const navScale = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const navItems = [
    { name: "Vision", href: "vision" },
    { name: "Features", href: "features" },
    { name: "Early Access", href: "waitlist" },
  ];

  // Hamburger icon component
  const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
      <motion.div
        className="w-5 h-0.5 bg-black mb-1"
        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-5 h-0.5 bg-black mb-1"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-5 h-0.5 bg-black"
        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6"
        style={{ y: navY }}
      >
        <motion.header
          className={`transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-white/90 backdrop-blur-xl border border-black/10 shadow-xl shadow-black/5"
              : "bg-white/70 backdrop-blur-md border border-black/5 shadow-lg shadow-black/3"
          } rounded-full px-8 py-4 w-full max-w-3xl`}
          style={{
            opacity: navOpacity,
            scale: navScale,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
        >
          <div className="flex items-center justify-between gap-16">
            {/* Brand */}
            <motion.a
              href="#"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Typography
                variant="subhead"
                className="text-black font-bold text-xl tracking-tight"
              >
                Rhoda
              </Typography>
            </motion.a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-black/70 hover:text-black font-medium transition-colors duration-200 py-2 px-3 rounded-full"
                  whileHover={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    size="sm"
                    className="bg-black hover:bg-black/90 text-white px-6 py-2 font-semibold border-0 shadow-lg shadow-black/20 rounded-full"
                    onClick={() => scrollToSection("waitlist")}
                  >
                    Join Waitlist
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </motion.button>
          </div>
        </motion.header>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-24 left-6 right-6 bg-white/95 backdrop-blur-xl border border-black/10 rounded-3xl shadow-2xl shadow-black/10 z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="p-8">
                {/* Mobile Navigation Links */}
                <nav className="space-y-6 mb-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={`#${item.href}`}
                      onClick={(e) => handleClick(e, item.href)}
                      className="block text-black/70 hover:text-black font-medium text-lg transition-colors duration-200 py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-black hover:bg-black/90 text-white py-4 font-semibold border-0 shadow-lg shadow-black/20 rounded-xl"
                    onClick={() => {
                      scrollToSection("waitlist");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Join Waitlist
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
