import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children, pagePosition }) => {
  const variants = {
    initial: (direction) => ({
      x: direction === 'right' ? '100%' : direction === 'left' ? '-100%' : 0,
      scale: 1,
      opacity: 0,
    }),
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      x: direction === 'right' ? '-100%' : direction === 'left' ? '100%' : 0,
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pagePosition}
        custom={pagePosition} 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
