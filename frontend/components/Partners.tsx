import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Saudi Aramco", category: "Energy" },
  { name: "NEOM", category: "Development" },
  { name: "Red Sea Global", category: "Tourism" },
  { name: "Ministry of Culture", category: "Government" },
  { name: "STC", category: "Telecom" },
  { name: "SABIC", category: "Industry" },
  { name: "King Salman Foundation", category: "Foundation" },
];

const Partners: React.FC = () => {
  return (
    <section id="clients" className="relative overflow-hidden">
      {/* Top Section - Rust Background */}
      <div className="bg-arch-rust py-24 lg:py-32 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rotate-180">
              <img
                src="/images/Graphic Elements-0١.jpg"
                alt=""
                className="w-full h-full object-contain opacity-30"
              />
            </div>
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-arch-rust to-arch-rust" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="text-white/70 font-semibold tracking-[0.3em] text-xs uppercase">
                Trusted Partners
              </span>
              <div className="w-12 h-[1px] bg-white/30" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight">
              Industry Leaders
              <br />
              <span className="text-arch-maroon">Choose Excellence</span>
            </h2>
          </motion.div>
        </div>

        {/* Marquee Section */}
        <div className="relative mask-linear-fade">
          <motion.div
            className="flex gap-8 md:gap-16 items-center whitespace-nowrap py-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="group flex flex-col items-center"
              >
                <span className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-arch-maroon/20 uppercase tracking-tight group-hover:text-white transition-colors duration-500 cursor-default select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Reverse Direction */}
          <motion.div
            className="flex gap-8 md:gap-16 items-center whitespace-nowrap py-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].reverse().map((partner, i) => (
              <div
                key={i}
                className="group flex flex-col items-center"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-white/10 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-500 cursor-default select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="container mx-auto px-6 lg:px-12 mt-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
          >
            {[
              { value: "50+", label: "Corporate Partners" },
              { value: "200+", label: "Projects Delivered" },
              { value: "15+", label: "Industries Served" },
              { value: "98%", label: "Retention Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Transition Element */}
      <div className="h-32 bg-gradient-to-b from-arch-rust to-arch-maroon" />
    </section>
  );
};

export default Partners;
