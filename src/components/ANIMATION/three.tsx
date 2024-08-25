import React from 'react';
import { motion } from 'framer-motion';

const SvgPathAnimation: React.FC = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400">
      {/* Define the path */}
      <path
        id="motionPath"
        fill="transparent"
        stroke="gray"
        strokeWidth="2"
        d="M 100 200 Q 200 50, 300 200 T 400 200"
      />

      {/* Motion component for the image */}
      <motion.image
        href="path/to/your/image.png" // Replace with your image path
        width="40"
        height="40"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          rotate: "0deg", // Keep the image upright
        }}
      >
        <animateMotion
          href="#motionPath"
          dur="4s"
          repeatCount="indefinite"
        />
      </motion.image>
    </svg>
  );
};

export default SvgPathAnimation;
