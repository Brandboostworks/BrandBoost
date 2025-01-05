import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, offset = 50 }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rect = sectionRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementVisible = window.innerHeight;

      if (elementTop < scrolled + elementVisible) {
        const distance = scrolled - elementTop;
        const translation = distance * 0.3;
        sectionRef.current.style.transform = `translateY(${Math.min(translation, offset)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div ref={sectionRef} className="transition-transform duration-300">
      {children}
    </div>
  );
};

export default ParallaxSection;