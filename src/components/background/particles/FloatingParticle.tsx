import React from 'react';
import { motion } from 'framer-motion';

interface FloatingParticleProps {
  size: number;
  color: string;
  delay: number;
  duration: number;
  left: string;
  top: string;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({ 
  size, 
  color, 
  delay, 
  duration, 
  left, 
  top 
}) => {
  return (
    <motion.div
      className="absolute rounded-full blur-sm"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left,
        top,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [-20, 20, -20]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default FloatingParticle;