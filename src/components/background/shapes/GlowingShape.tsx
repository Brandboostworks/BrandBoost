import React from 'react';
import { motion } from 'framer-motion';

interface GlowingShapeProps {
  className?: string;
  animationDuration?: number;
  delay?: number;
}

const GlowingShape: React.FC<GlowingShapeProps> = ({ 
  className = '', 
  animationDuration = 8, 
  delay = 0 
}) => {
  return (
    <motion.div
      className={`absolute blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 0],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: animationDuration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default GlowingShape;