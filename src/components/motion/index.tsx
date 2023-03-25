import React from 'react';
import { motion } from 'framer-motion';

interface MotionProps {
  delay?: number;
}

const Motion: React.FC<MotionProps> = ({ delay, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: delay ?? 0.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
