import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cube: React.FC = () => {
  const size = 300; // Adjust the cube size here
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust these values to control rotation speed
      const xRotation = scrollY * 0.1; // Rotation on the X-axis
      const yRotation = scrollY * 0.1; // Rotation on the Y-axis
      setRotation({ x: xRotation, y: yRotation });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div className="flex items-center justify-center -top-20 text-7xl text-gray-300 font-black">
      <motion.div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <motion.div
          className="absolute flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `translateZ(${size / 2}px)`,
            backgroundImage: `url("./images/6.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Front */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            backgroundImage: `url("./images/9.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Back */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            backgroundImage: `url("./images/8.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Left */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            backgroundImage: `url("./images/10.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Right */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            backgroundImage: `url("./images/9.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top */}
        </motion.div>
        <motion.div
          className="absolute bg-violet-400 flex items-center justify-center shadow-lg"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            backgroundImage: `url("./images/mid.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Bottom */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cube;
