import React from 'react';

export const NeonGradient = () => (
  <defs>
    <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="rgba(0, 72, 186, 0.4)" />
      <stop offset="50%" stopColor="rgba(0, 72, 186, 0.9)" />
      <stop offset="100%" stopColor="rgba(0, 72, 186, 0.4)" />
    </linearGradient>
    
    <filter id="neon-glow">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#0048BA" floodOpacity="0.7"/>
    </filter>
  </defs>
);