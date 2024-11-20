import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingBubbles = () => {
  // Generate random bubbles
  const bubbles = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index,
      size: Math.random() * 90, // Random size between 30-80px
      delay: Math.random() * 10, // Random initial delay
      duration: Math.random() * 100 + 5, // Random animation duration
      x: Math.random() * 100, // Random horizontal movement
      initialX: Math.random() * window.innerWidth // Random starting x position
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
            src='/image-assets/bubble-3.png'
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