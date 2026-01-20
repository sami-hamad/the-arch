import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto px-4 lg:px-8 pt-4 lg:pt-6">
          <motion.div
            animate={{
              backgroundColor: scrolled ? "rgba(90, 14, 53, 0.95)" : "rgba(90, 14, 53, 0.6)",
              borderColor: scrolled ? "rgba(252, 216, 210, 0.15)" : "rgba(252, 216, 210, 0.05)",
            }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto backdrop-blur-xl border rounded-full px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between shadow-2xl max-w-6xl mx-auto"
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
            >
              <span className="text-xl lg:text-2xl font-display font-black tracking-tight text-arch-cream group-hover:text-gradient transition-all duration-300">
                THE ARCH
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-5 py-2 text-sm font-medium tracking-wider text-arch-cream/70 hover:text-arch-cream transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-arch-rust scale-0 group-hover:scale-100 transition-transform duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 bg-arch-rust hover:bg-arch-orange text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-arch-cream rounded-full hover:bg-arch-cream/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-arch-maroon/98 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
              {/* Decorative Element */}
              <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] opacity-5 pointer-events-none">
                <img
                  src="/images/Graphic Elements-0١.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-4xl md:text-5xl font-display font-black text-arch-cream hover:text-gradient transition-all duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 left-0 right-0 px-8"
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-arch-rust text-white py-4 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-arch-orange transition-colors"
                >
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
