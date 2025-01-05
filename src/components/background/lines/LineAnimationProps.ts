export const getLineAnimation = (index: number, type: 'horizontal' | 'diagonal' | 'vertical') => {
  const baseDelay = type === 'horizontal' ? 0.2 : type === 'diagonal' ? 0.3 : 0.4;
  const baseDuration = type === 'horizontal' ? 4 : type === 'diagonal' ? 5 : 6;

  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: [0, 1],
      opacity: [0, 0.9, 0],
      [type === 'vertical' ? 'x' : 'y']: [0, type === 'vertical' ? 10 : -10, 0]
    },
    transition: {
      duration: baseDuration + index * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * baseDelay,
      times: [0, 0.5, 1]
    }
  };
};