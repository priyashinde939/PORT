'use client'
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Cube2: React.FC = () => {
  const size = 100; // Cube size

  // Motion values for rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform the x and y motion values to rotations
  const rotateX = useTransform(y, [0, 1000], [0, 360]);
  const rotateY = useTransform(x, [0, 1000], [0, 360]);

  return (
    <motion.div className="flex items-center justify-center h-screen">
      <motion.div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
      >
        <motion.div
          className="absolute bg-orange-700 text-white flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `translateZ(${size / 2}px)`,
          }}
        >
          Front
        </motion.div>
        <motion.div
          className="absolute bg-orange-700 text-white flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
          }}
        >
          Back
        </motion.div>
        <motion.div
          className="absolute bg-orange-700 text-white flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
          }}
        >
          Left
        </motion.div>
        <motion.div
          className="absolute bg-orange-700 text-white flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
          }}
        >
          Right
        </motion.div>
        <motion.div
          className="absolute bg-orange-700 text-white flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
          }}
        >
          Top
        </motion.div>
        <motion.div
          className="absolute bg-orange-700 text-white flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
          }}
        >
          Bottom
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cube2;
