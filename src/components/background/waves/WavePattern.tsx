import React from 'react';
import { motion } from 'framer-motion';

const WavePattern: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30">
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
      </defs>
      
      <motion.path
        d="M0,100 Q200,150 400,100 T800,100"
        stroke="url(#wave-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.path
        d="M0,140 Q200,190 400,140 T800,140"
        stroke="url(#wave-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />
    </svg>
  );
};

export default WavePattern;