import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Portfolio', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  services: [
    { label: 'Events Management', href: '#services' },
    { label: 'Exhibitions', href: '#services' },
    { label: 'Marketing & PR', href: '#services' },
    { label: 'Production', href: '#services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-arch-dark relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] opacity-[0.02] pointer-events-none">
        <img
          src="/images/Graphic Elements-0١.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Top Border Gradient */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-arch-rust/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-black text-arch-cream mb-4">
                THE ARCH
              </h2>
              <p className="text-arch-creamDim font-light leading-relaxed mb-8 max-w-sm">
                Where visionary concepts meet flawless execution. We architect
                extraordinary experiences that captivate, inspire, and endure.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-arch-cream/10 flex items-center justify-center text-arch-cream/50 hover:bg-arch-rust hover:border-arch-rust hover:text-white transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-arch-cream font-semibold uppercase tracking-widest text-xs mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-arch-creamDim/70 hover:text-arch-orange transition-colors text-sm font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-arch-cream font-semibold uppercase tracking-widest text-xs mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-arch-creamDim/70 hover:text-arch-orange transition-colors text-sm font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-arch-cream font-semibold uppercase tracking-widest text-xs mb-6">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-arch-creamDim/70 hover:text-arch-orange transition-colors text-sm font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-arch-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-arch-cream/30 text-sm font-light"
          >
            © {new Date().getFullYear()} The Arch Events. All rights reserved.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-arch-cream/50 hover:text-arch-orange transition-colors text-sm"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full border border-arch-cream/20 flex items-center justify-center group-hover:bg-arch-rust group-hover:border-arch-rust group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Large Decorative Text */}
      <div className="relative overflow-hidden py-8 border-t border-arch-cream/5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[15vw] font-display font-black text-arch-cream/[0.02] uppercase tracking-tighter mx-8"
            >
              The Arch • Excellence • Events •
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
