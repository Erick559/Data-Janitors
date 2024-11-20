import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 15 }, (_, index) => ({
      id: index,
      size: Math.random() * 10 + 40,
      delay: Math.random() * 50, 
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <>
        {stars.map((stars) => (
            <motion.img
            key={stars.id}
            initial={{ 
                opacity: 0,
                scale:0,
            }}
            src='../image-assets/sparkles.png'
            animate={{
                opacity: [0.7, 1, 0.8],
                scale:[0,1,0.4],
            }}
            transition={{
                duration: 2,
                delay: stars.delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className='pointer-events-none'
            style={{
                position: 'absolute',
                width: `${stars.size}px`,
                height: `${stars.size}px`,
                top: `${stars.top}%`,
                left: `${stars.left}%`,
            }}
            />
        ))}
    </>
  );
};

export default FloatingStars;