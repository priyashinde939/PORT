import React from 'react';
import { motion } from 'framer-motion';

const Cube: React.FC = () => {
  const size = 300; // Adjust the cube size here

  return (
    <motion.div className="flex items-center justify-center -top-20 text-7xl text-gray-300 font-black ">
      <motion.div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(0deg) rotateY(0deg)',
          animation: 'rotateCube 10s infinite linear',
        }}
      >
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `translateZ(${size / 2}px)`,
          }}
        >
          hello
          {/* Front */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
          }}
        >
          hola
          {/* Back */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        >
          hola hola
          {/* Left */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        >
          ello
          {/* Right */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        >
          top ello
          {/* Top */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        >

          {/* Bottom */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cube;

