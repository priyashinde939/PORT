import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { FaCode, FaMobile, FaPaintBrush, FaCloud } from 'react-icons/fa';


interface CardProps {
  scrollYProgress: MotionValue<number>;
  content: string;
  icon: React.ReactNode;
  bgColor: string;
  index: number;
  totalCards: number;
  videoSrc?: string; // Add a videoSrc prop
}

const Card: React.FC<CardProps> = ({ scrollYProgress, content, icon, bgColor, index, totalCards, videoSrc  }) => {
  const cardStart = (index - 1) / totalCards;
  const cardEnd = index / totalCards;

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd],
    ['100vh', '0vh', '0vh', '-100vh']
  );

  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd],
    [0.8, 1, 1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.1, cardEnd - 0.2, cardEnd],
    [0.8, 1, 1, 0.8]
  );

  const rotate = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [10, -10]
  );

  return (
    <motion.div
      style={{ y, scale, opacity, rotate }}
      className={`sticky top-[20vh] flex items-center justify-center w-full h-[85vh] font-day`}
    >
      <motion.div 
        className={`${bgColor} text-white h-[75vh] w-[90vw] rounded-[2rem] flex items-center justify-between text-3xl font-bold shadow-2xl px-8 overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Left Side - Content */}
        <div className="flex flex-col items-start justify-center w-1/2 h-full pr-8">
          <motion.div 
            className="text-8xl mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            {icon}
          </motion.div>
          <motion.h2 
            className="text-4xl mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {content}
          </motion.h2>
          <motion.p 
            className="text-xl max-w-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          {/* Find Out More Button */}
          <motion.button
            className="mt-6 bg-white text-black px-6 py-2 rounded-lg font-bold shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
              Find Out More
          </motion.button>
        </div>

        {/* Right Side - Video */}
        {/* {videoSrc && ( */}
          <motion.div className="flex-1 h-[80%] bg-black rounded-[0px_100px_0px_0px]">
            {/* Video with autoplay, no controls, and muted */}
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-[0px_100px_0px_0px]" // Custom border radius for video
            />
          </motion.div>
        {/* )} */}
      </motion.div>
    </motion.div>
  );
};

const Heading: React.FC<{ scrollYProgress: MotionValue<number> }> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-20%']);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="flex flex-col items-center text-white">
        <motion.span 
          className="text-7xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          OUR
        </motion.span>
        <motion.span 
          className='text-9xl font-extrabold'
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        >
          SERVICES
        </motion.span>
      </div>
    </motion.div>
  );
};

const Blank: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    { content: "Web Development", icon: <FaCode />, bgColor: "bg-gradient-to-br from-pink-500 to-red-500" },
    { content: "Mobile App Development", icon: <FaMobile />, bgColor: "bg-gradient-to-br from-green-400 to-blue-500" },
    { content: "UI/UX Design", icon: <FaPaintBrush />, bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500" },
    { content: "Cloud Services", icon: <FaCloud />, bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-r from-black to-slate-900" 
      style={{ height: `${(cards.length + 1) * 150}vh` }}
    >
      <Heading scrollYProgress={scrollYProgress} />
      {cards.map((card, index) => (
        <Card
          key={index}
          scrollYProgress={scrollYProgress}
          content={card.content}
          icon={card.icon}
          bgColor={card.bgColor}
          index={index + 1}
          totalCards={cards.length + 1}
        />
      ))}
    </div>
  );
};

export default Blank;