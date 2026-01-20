import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { Mail, MapPin, Phone, ArrowUpRight, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@thearch.sa",
    href: "mailto:hello@thearch.sa"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 11 123 4567",
    href: "tel:+966111234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    href: "#"
  }
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formState);
    alert("Thank you for reaching out. We will be in touch shortly.");
  };

  const InputField: React.FC<{
    id: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    isTextarea?: boolean;
  }> = ({ id, type = "text", value, onChange, label, isTextarea }) => {
    const isFocused = focused === id || value;
    const baseClasses = "w-full bg-transparent border-b-2 border-arch-cream/10 py-4 text-arch-cream focus:outline-none transition-all duration-500 placeholder-transparent font-light";
    const focusedBorder = "focus:border-arch-rust";

    return (
      <div className="relative group">
        {isTextarea ? (
          <textarea
            id={id}
            rows={4}
            className={`${baseClasses} ${focusedBorder} resize-none`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            placeholder={label}
          />
        ) : (
          <input
            type={type}
            id={id}
            className={`${baseClasses} ${focusedBorder}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            placeholder={label}
          />
        )}
        <label
          htmlFor={id}
          className={`absolute left-0 transition-all duration-300 pointer-events-none
            ${isFocused
              ? '-top-3 text-xs text-arch-rust font-medium tracking-wider uppercase'
              : 'top-4 text-arch-cream/40 text-base'
            }`}
        >
          {label}
        </label>
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-arch-rust to-arch-orange"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused === id ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>
    );
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-arch-maroon relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-[20%] top-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] opacity-[0.03]">
          <img
            src="/images/Graphic Elements-01.jpg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(252,216,210,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(252,216,210,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-arch-rust to-arch-orange" />
            <span className="text-arch-orange font-semibold tracking-[0.3em] text-xs uppercase">
              Get in Touch
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-arch-cream leading-[0.95] mb-8"
            >
              Let's Create
              <br />
              <span className="text-gradient">History</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-arch-creamDim text-lg font-light max-w-md mb-12 leading-relaxed"
            >
              Ready to elevate your next event into an unforgettable experience?
              Our team is here to transform your vision into reality.
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-5 p-4 -ml-4 rounded-lg hover:bg-arch-cream/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-arch-rust/10 flex items-center justify-center text-arch-rust group-hover:bg-arch-rust group-hover:text-white transition-all duration-300">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-arch-cream/40 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-arch-cream font-medium text-lg group-hover:text-arch-orange transition-colors">
                      {item.value}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-arch-cream/20 ml-auto group-hover:text-arch-orange transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Decorative Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 hidden lg:block"
            >
              <div className="relative w-3/4">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src="/images/freepik__tight-crop-photorealistic-image-of-catering-staff-__66214.jpeg"
                    alt="Professional Event Staff"
                    className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-arch-rust/20 rounded-sm z-[-1]" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <InputField
                id="name"
                value={formState.name}
                onChange={(value) => setFormState({ ...formState, name: value })}
                label="Your Name"
              />

              <InputField
                id="email"
                type="email"
                value={formState.email}
                onChange={(value) => setFormState({ ...formState, email: value })}
                label="Email Address"
              />

              <InputField
                id="company"
                value={formState.company}
                onChange={(value) => setFormState({ ...formState, company: value })}
                label="Company / Organization"
              />

              <InputField
                id="message"
                value={formState.message}
                onChange={(value) => setFormState({ ...formState, message: value })}
                label="Tell us about your vision"
                isTextarea
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <MagneticButton variant="primary" className="w-full md:w-auto">
                  <span className="flex items-center gap-3">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                </MagneticButton>

                <p className="mt-6 text-arch-cream/30 text-sm">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </motion.div>
            </form>

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12 p-6 border border-arch-cream/10 rounded-lg bg-arch-cream/[0.02]"
            >
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-green-400 mt-1 animate-pulse" />
                <div>
                  <h4 className="text-arch-cream font-semibold mb-1">Quick Response Guaranteed</h4>
                  <p className="text-arch-cream/50 text-sm font-light">
                    Our team typically responds within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
