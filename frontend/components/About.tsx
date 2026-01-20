import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Calendar, Star } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '500+', label: 'Events Executed', delay: 0 },
  { icon: Users, value: '150+', label: 'Corporate Clients', delay: 0.1 },
  { icon: Award, value: '100%', label: 'Client Satisfaction', delay: 0.2 },
  { icon: Star, value: '10+', label: 'Years Excellence', delay: 0.3 },
];

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" className="py-32 md:py-48 relative overflow-hidden bg-arch-maroon">
      {/* Decorative Elements */}
      <motion.div
        style={{ y }}
        className="absolute -right-[10%] top-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] opacity-5 pointer-events-none"
      >
        <img
          src="/images/Graphic Elements-0١.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Subtle horizontal lines */}
      <div className="absolute left-0 top-32 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-arch-cream/10 to-transparent" />
      <div className="absolute right-0 bottom-32 w-1/4 h-[1px] bg-gradient-to-l from-transparent via-arch-cream/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-arch-rust to-arch-orange" />
            <span className="text-arch-orange font-semibold tracking-[0.3em] text-xs uppercase">
              Who We Are
            </span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column - Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="/images/freepik__tight-crop-of-elegant-table-setting-crystal-glass-__66218.jpeg"
                    alt="Elegant Table Setting"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Frame accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-arch-rust/40 rounded-sm z-[-1]" />
              </motion.div>

              {/* Secondary Image - Overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-16 -right-8 md:-right-16 w-2/3 z-20"
              >
                <div className="aspect-square overflow-hidden rounded-sm shadow-2xl border border-arch-cream/10">
                  <img
                    src="/images/freepik__closeup-photorealistic-shot-of-gourmet-canaps-on-g__66220.jpeg"
                    alt="Gourmet Canapes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 lg:pl-8 pt-8 lg:pt-0">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-arch-cream leading-[0.95] mb-8"
            >
              Elevating the
              <br />
              <span className="text-gradient">Standard of</span>
              <br />
              Excellence
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-arch-creamDim text-lg font-light leading-relaxed mb-12"
            >
              <p>
                <span className="text-arch-cream font-medium">The Arch</span> is not merely an events company—we are
                architects of emotion, craftsmen of moments that transcend the ordinary. Born from a passion
                for perfection, we blend industrial precision with refined luxury.
              </p>
              <p>
                From intimate corporate gatherings to grand-scale exhibitions, our vision transforms
                empty spaces into living, breathing experiences. We don't just plan events;
                we orchestrate legacies.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-arch-cream/10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + stat.delay }}
                  className="group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-arch-rust group-hover:text-arch-orange transition-colors" />
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-black text-arch-cream group-hover:text-gradient transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-arch-cream/50 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 md:mt-48 text-center"
        >
          <blockquote className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl font-display text-arch-rust/10">"</div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-arch-cream/80 max-w-4xl mx-auto leading-relaxed">
              We don't create events. We create{' '}
              <span className="text-arch-orange font-black">moments</span> that become{' '}
              <span className="text-arch-rust font-black">memories</span>.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
