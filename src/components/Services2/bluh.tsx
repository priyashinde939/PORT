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
}

const Card: React.FC<CardProps> = ({ scrollYProgress, content, icon, bgColor, index, totalCards }) => {
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
    [cardStart, cardStart + 0.1, cardEnd - 0.1, cardEnd],
    [0, 1, 1, 0]
  );

  const rotate = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [10, -10]
  );

  return (
    <motion.div
      style={{ y, scale, opacity, rotate }}
      className={`sticky top-[15vh] flex items-center justify-center w-full h-[80vh]`}
    >
      <motion.div 
        className={`${bgColor} text-white h-[75vh] w-[90vw] rounded-[2rem] flex flex-col items-center justify-center text-3xl font-bold shadow-2xl p-8 overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="text-8xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          {icon}
        </motion.div>
        <motion.h2 
          className="text-4xl mb-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {content}
        </motion.h2>
        <motion.p 
          className="text-xl text-center max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
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

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    { content: "Web Development", icon: <FaCode />, bgColor: "bg-gradient-to-br from-pink-500 to-red-500" },
    { content: "Mobile App Development", icon: <FaMobile />, bgColor: "bg-gradient-to-br from-green-400 to-blue-500" },
    { content: "UI/UX Design", icon: <FaPaintBrush />, bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500" },
    // { content: "Cloud Services", icon: <FaCloud />, bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 -mb-[200vh]" 
      style={{ height: `${(cards.length + 1) * 200}vh` }}
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

export default Services;