import React from "react";
import { motion } from "framer-motion";

interface MarqueeItemProps {
  texts: string[];
  from: number | string;
  to: number | string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ texts, from, to }) => {
  return (
    <div className="flex MyGradient font-day ">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {texts.map((text, index) => (
          <div className="text-9xl font-normal pr-20" key={index}>
            {text}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {texts.map((text, index) => (
          <div className="xl:lg:text-9xl md:text-[7xl] text-[3xl] font-normal pr-20" key={index}>
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
