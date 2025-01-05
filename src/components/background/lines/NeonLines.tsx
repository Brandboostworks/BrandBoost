import React from 'react';
import { motion } from 'framer-motion';
import { NeonGradient } from './NeonGradient';
import { getLineAnimation } from './LineAnimationProps';

const NeonLines: React.FC = () => {
  const generatePath = (index: number, type: 'horizontal' | 'diagonal' | 'vertical') => {
    const spacing = type === 'horizontal' ? 20 : type === 'diagonal' ? 100 : 80;
    const yOffset = index * spacing;
    
    if (type === 'horizontal') {
      return `M-100,${50 + yOffset} C${200 + index * 40},${90 + yOffset} ${400 - index * 30},${30 + yOffset} ${800 + index * 40},${70 + yOffset}`;
    } else if (type === 'diagonal') {
      return `M${-50 + index * 100},-50 C${100 + index * 80},${180} ${300 + index * 60},${90} ${800},${230 + index * 30}`;
    } else {
      return `M${100 + index * 80},-50 C${130 + index * 70},200 ${70 + index * 90},400 ${100 + index * 80},650`;
    }
  };

  return (
    <svg className="absolute inset-0 w-full h-full">
      <NeonGradient />
      
      {/* Horizontal lines */}
      {[...Array(18)].map((_, i) => (
        <motion.path
          key={`h-${i}`}
          d={generatePath(i, 'horizontal')}
          stroke="url(#neon-gradient)"
          strokeWidth={1.5 + Math.random()}
          fill="none"
          filter="url(#neon-glow)"
          {...getLineAnimation(i, 'horizontal')}
        />
      ))}

      {/* Diagonal lines */}
      {[...Array(12)].map((_, i) => (
        <motion.path
          key={`d-${i}`}
          d={generatePath(i, 'diagonal')}
          stroke="url(#neon-gradient)"
          strokeWidth={1.5 + Math.random()}
          fill="none"
          filter="url(#neon-glow)"
          {...getLineAnimation(i, 'diagonal')}
        />
      ))}

      {/* Vertical lines */}
      {[...Array(10)].map((_, i) => (
        <motion.path
          key={`v-${i}`}
          d={generatePath(i, 'vertical')}
          stroke="url(#neon-gradient)"
          strokeWidth={1.5 + Math.random()}
          fill="none"
          filter="url(#neon-glow)"
          {...getLineAnimation(i, 'vertical')}
        />
      ))}
    </svg>
  );
};

export default NeonLines;