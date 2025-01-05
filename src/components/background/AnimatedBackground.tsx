import React from 'react';
import FloatingParticle from './particles/FloatingParticle';
import GlowingShape from './shapes/GlowingShape';
import WavePattern from './waves/WavePattern';
import NeonLines from './lines/NeonLines';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neon Lines */}
      <NeonLines />

      {/* Glowing shapes */}
      <GlowingShape 
        className="top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
        animationDuration={8}
      />
      
      <GlowingShape 
        className="top-40 right-20 w-96 h-96 bg-gradient-to-l from-pink-500/10 to-orange-500/10"
        animationDuration={10}
        delay={0.5}
      />
      
      <GlowingShape 
        className="bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-green-500/10"
        animationDuration={9}
        delay={1}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle
          key={i}
          size={4 + Math.random() * 4}
          color={`rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`}
          delay={i * 0.5}
          duration={4 + Math.random() * 4}
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
        />
      ))}

      {/* Wave patterns */}
      <WavePattern />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
    </div>
  );
};

export default AnimatedBackground;