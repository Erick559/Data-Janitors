import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingBubbles = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index,
      size: Math.random() * 90, 
      delay: Math.random() * 10, 
      duration: Math.random() * 100 + 5, 
      x: Math.random() * 100, 
      initialX: Math.random() * window.innerWidth 
    }));
  }, []);

  return (
    <>
        {bubbles.map((bubble) => (
            <motion.img
            key={bubble.id}
            initial={{ 
                y: '100%', 
                x: bubble.initialX,
                opacity: 0,
                scale: bubble.size / 50
            }}
            src='/image-assets/bubble.png'
            animate={{
                y: '-1700%',
                x: bubble.initialX + bubble.x,
                opacity: [0.9, 1, 0.8],
                rotate:'360deg'
            }}
            transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
            className='pointer-events-none'
            style={{
                opacity:0,
                position: 'absolute',
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                bottom: '-100px',
                zIndex:0,
            }}
            />
        ))}
    </>
  );
};

export default FloatingBubbles;