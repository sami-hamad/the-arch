import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-arch-rust hover:bg-arch-orange text-white border border-transparent shadow-lg shadow-arch-rust/20 hover:shadow-arch-orange/30';
      case 'secondary':
        return 'bg-arch-cream hover:bg-white text-arch-maroon border border-transparent';
      case 'outline':
        return 'bg-transparent text-arch-cream border border-arch-cream/30 hover:border-arch-rust hover:text-arch-rust';
      default:
        return 'bg-arch-rust text-white';
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm transition-all duration-300 ${getVariantStyles()} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
    </motion.div>
  );
};

export default MagneticButton;
