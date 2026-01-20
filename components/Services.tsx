import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Events Management",
    description: "Holistic planning and meticulous execution. From intimate gatherings to grand galas, we orchestrate every detail with precision and artistry.",
    image: "/images/freepik__photorealistic-shot-of-a-luxury-saudi-morning-busi__66210.jpeg",
    tags: ["Strategic Planning", "Execution", "Crowd Management"]
  },
  {
    id: 2,
    title: "Exhibitions Organizing",
    description: "Creating immersive brand worlds. We design and construct exhibition spaces that transcend the ordinary—destinations that captivate and inspire.",
    image: "/images/freepik__closeup-photorealistic-photo-of-an-elegant-brand-s__66211.jpeg",
    tags: ["Design", "Construction", "Brand Activation"]
  },
  {
    id: 3,
    title: "Marketing & PR",
    description: "Amplifying your narrative. Strategic digital campaigns, media center operations, and PR initiatives that ensure your event resonates far beyond its walls.",
    image: "/images/freepik__closeup-photorealistic-shot-of-a-podium-microphone__66216.jpeg",
    tags: ["Digital Strategy", "Media Relations", "Campaigns"]
  },
  {
    id: 4,
    title: "Production & Equipment",
    description: "The technical backbone of unforgettable experiences. State-of-the-art lighting, immersive sound, and cinematic production that transforms vision into reality.",
    image: "/images/freepik__tightcrop-photorealistic-image-of-an-av-technician__66212.jpeg",
    tags: ["AV Systems", "Lighting Design", "Stage Production"]
  }
];

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[700px] ${isEven ? '' : 'lg:direction-rtl'}`}
    >
      {/* Image Section */}
      <div className={`relative h-[300px] lg:h-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        {/* Number Overlay */}
        <div className="absolute top-6 left-6 z-20">
          <span className="text-[10rem] lg:text-[15rem] font-display font-black leading-none text-white/5 group-hover:text-white/10 transition-all duration-700">
            0{service.id}
          </span>
        </div>

        {/* Image with hover effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-arch-dark via-arch-dark/60 to-transparent opacity-60`} />
        </div>
      </div>

      {/* Content Section */}
      <div className={`relative bg-arch-dark flex items-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Decorative corner */}
        <div className={`absolute top-8 ${isEven ? 'right-8' : 'left-8'} w-20 h-20 border-t border-r border-arch-cream/5`} />

        <div className="p-8 lg:p-16 w-full">
          {/* Service number - mobile */}
          <div className="lg:hidden mb-4">
            <span className="text-arch-rust font-display font-black text-6xl opacity-20">0{service.id}</span>
          </div>

          {/* Title */}
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-arch-cream mb-6 leading-tight group-hover:text-gradient transition-all duration-500"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <p className="text-arch-creamDim font-light leading-relaxed mb-8 text-base lg:text-lg max-w-md">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {service.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 text-xs uppercase tracking-widest border border-arch-cream/10 rounded-full text-arch-cream/50 group-hover:border-arch-rust/40 group-hover:text-arch-cream/70 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-arch-rust uppercase text-sm font-semibold tracking-widest group/btn"
          >
            <span className="group-hover/btn:text-arch-orange transition-colors">Discover More</span>
            <span className="w-10 h-10 rounded-full border border-arch-rust/30 flex items-center justify-center group-hover/btn:bg-arch-rust group-hover/btn:border-arch-rust transition-all">
              <ArrowUpRight className="w-4 h-4 group-hover/btn:text-white transition-colors" />
            </span>
          </motion.button>
        </div>

        {/* Decorative line */}
        <div className={`absolute bottom-0 ${isEven ? 'left-0' : 'right-0'} w-1/2 h-[1px] bg-gradient-to-r from-arch-rust/40 to-transparent`} />
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-arch-dark relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[10%] right-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] opacity-[0.02]">
          <img
            src="/images/Graphic Elements-01.jpg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 lg:mb-32 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-arch-rust to-arch-orange" />
            <span className="text-arch-orange font-semibold tracking-[0.3em] text-xs uppercase">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.95]"
          >
            Crafting the
            <br />
            <span className="text-gradient">Unforgettable</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-arch-creamDim text-lg font-light max-w-2xl"
          >
            Four pillars of excellence, unified by a singular vision—to transform every occasion
            into an extraordinary experience that resonates long after the final moment.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
