import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const y2 = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Layer - Premium Event Image */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-arch-maroon" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/freepik__photorealistic-capture-of-a-luxury-conference-stag__66217.jpeg"
          alt="Luxury Conference Stage"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-arch-maroon via-arch-maroon/40 to-arch-maroon" />
        <div className="absolute inset-0 bg-gradient-to-r from-arch-maroon/80 via-transparent to-arch-maroon/60" />
      </motion.div>

      {/* Decorative Arch Graphic - Floating */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-[20%] top-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-10 pointer-events-none"
      >
        <motion.img
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 5, opacity: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="/images/Graphic Elements-01.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Second Arch Element - Left Side */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-[30%] bottom-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] opacity-5 pointer-events-none rotate-180"
      >
        <img
          src="/images/Graphic Elements-02.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Decorative Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[15%] left-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent via-arch-rust/40 to-transparent origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[20%] right-0 w-[25%] h-[1px] bg-gradient-to-l from-transparent via-arch-orange/40 to-transparent origin-right"
      />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-arch-orange" />
            </motion.div>
            <span className="text-arch-rust font-semibold tracking-[0.4em] text-xs uppercase">
              Premier Event Excellence
            </span>
          </motion.div>

          {/* Main Headline - Split Design */}
          <div className="relative">
            <motion.h1 className="font-display font-black leading-[0.85] tracking-tight">
              {/* Line 1 */}
              <motion.span
                initial={{ opacity: 0, y: 100, skewY: 7 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-arch-cream"
              >
                The Gateway
              </motion.span>

              {/* Line 2 - Emphasized */}
              <motion.span
                initial={{ opacity: 0, y: 100, skewY: 7 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-gradient"
              >
                To Excellence
              </motion.span>
            </motion.h1>

            {/* Floating accent number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -right-4 md:right-0 top-0 font-display text-[20rem] md:text-[30rem] font-black text-arch-cream/5 pointer-events-none select-none leading-none"
            >
              A
            </motion.div>
          </div>

          {/* Subtext and CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            {/* Description */}
            <div className="max-w-md">
              <div className="w-16 h-[2px] bg-gradient-to-r from-arch-rust to-arch-orange mb-6" />
              <p className="text-arch-creamDim text-lg md:text-xl font-light leading-relaxed">
                Where visionary concepts meet flawless execution. We architect
                extraordinary experiences that captivate, inspire, and endure.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <MagneticButton variant="primary" onClick={scrollToAbout}>
                <span className="flex items-center gap-3">
                  Explore Our World
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-arch-cream/40 mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-arch-rust to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-arch-cream/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-arch-cream/10" />
    </section>
  );
};

export default Hero;
