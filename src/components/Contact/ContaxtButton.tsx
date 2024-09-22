import { motion } from "framer-motion";
import React, { useState } from "react";

const AnimatedButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative px-24 py-5 font-semibold text-white rounded-full border"
      style={{ perspective: 1000, borderWidth:'5px'}} // Add perspective to the button container
    >
      {/* Background div with 3D rotation */}
      <motion.div
        className="absolute h-full inset-0 bg-black rounded-full"
        style={{ zIndex: -1 }}
        initial={{ rotateX: 0, rotateY: 0 }} // Initial 3D rotation
        animate={{
          rotateX: hovered ? 20 : 0, // Rotate the background on X-axis
          rotateY: hovered ? 15 : 0, // Rotate the background on Y-axis

        }}
        transition={{ duration: 0.4 }}
      />
      {/* Text div remains unrotated */}
        <motion.div className="relative px-2 z-10 flex place-content-between text-2xln"
        initial={{  rotateX: 0, rotateY: 0, }} // Initial 3D rotation
        animate={{
          rotateX: hovered ? '50deg' : 0, // Rotate the background on X-axis
          rotateY: hovered ? '50geg' : 0, // Rotate the background on Y-axis

        }}
        whileTap={{ scale: 1.6 }} 
        transition={{ duration: 0.4 }}

        >
            <motion.span
            className="mr-2"
            animate={{
                x: hovered ? -30 : -50, 
                // marginRight: hovered ? "20px" : "50px", // Large gap initially, smaller gap on hover
            }}
            transition={{ duration: 0.4 }} // Smooth transition
            >
            Send
            </motion.span>
            <motion.span
            animate={{
                x: hovered ? 30 : 50, 
            }}
            transition={{ duration: 0.4 }} // Smooth transition
            >
            →
            </motion.span>
        </motion.div>
    </motion.button>
  );
};

export default AnimatedButton;
