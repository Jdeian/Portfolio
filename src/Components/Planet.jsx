import React from 'react';
import Moon from '../assets/img/planet.png';
import { motion, AnimatePresence } from 'framer-motion';

const Planet = ({ position }) => {
  const variants = {
    hidden: (direction) => ({
      x: direction === 'right' ? '150%' : '-150%',
      opacity: 0,
    }),
    visible: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === 'right' ? '-150%' : '150%',
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        key={position}
        className={`absolute flex items-center h-screen justify-center ${
          position === 'right' ? 'right-[-170px]' : 'left-[-170px]'
        } overflow-hidden`}
        custom={position}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{
          visible: { duration: 5, ease: 'easeInOut' }, 
          exit: { duration: 5, ease: 'easeInOut' },  
        }}
      >
        <div className="flex items-center justify-center w-[350px] h-[350px] border-[3px] border-[#b1b0b0] border-r-[0] border-t-white rounded-full">
          <div className="gradient-border flex items-center w-[220px] h-[220px] border-[10px] border-r-white border-l-white border-t-[#b1b0b0] border-b-[#b1b0b0] rounded-full">
            <img src={Moon} alt="Planet" className="w-[220px] h-[220px] object-cover animate-spin" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Planet;
