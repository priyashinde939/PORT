import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import styles from './styles.module.scss';

interface CardProps {
  scrollYProgress: MotionValue<number>;
  content: React.ReactNode;
  bgColor: string;
  index: number;
  totalCards: number;
}

const Card: React.FC<CardProps> = ({ scrollYProgress, content, bgColor, index, totalCards }) => {
  const cardStart = (index - 1) / totalCards;
  const cardEnd = index / totalCards;
  const nextCardMid = (index + 0.5) / totalCards;

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.1, cardEnd, nextCardMid],
    ['100vh', '0vh', '0vh', '-100vh']
  );

  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.1, cardEnd, nextCardMid],
    [0.8, 1, 1, 0.8]
  );

  const opacity = useTransform(
    scrollYProgress,
    [cardEnd, nextCardMid],
    [1, 0]
  );

  return (
    <motion.div
      style={{ y, scale, opacity }}
      className={`sticky top-[20vh] flex items-center justify-center w-full h-[80vh]`}
    >
      <div className={`${bgColor} text-black h-[75vh] w-[90vw] rounded-[3rem] flex items-center justify-center text-2xl font-bold`}>
        {content}
      </div>
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
      className="h-screen flex items-center justify-center"
      transition={{type:'spring', duration:'50', ease:"circIn"}}
    >
      <div className="flex flex-col items-start">
        <span className="text-[8vw]">OUR</span>
        <span className='text-blue-800 font-bold self-start pl-24 ml-24 text-[8vw]' 
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}} 
        >
          SERVICES
        </span>
      </div>
    </motion.div>
  );
};

const Services2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    { content: "Web Development", bgColor: "bg-pink-700" },
    { content: "Mobile App Development", bgColor: "bg-lime-500" },
    { content: "UI/UX Design", bgColor: "bg-orange-800" }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-r from-blue-200 to-cyan-200" 
      style={{ height: `${(cards.length + 1) * 150}vh` }}
    >
      <Heading scrollYProgress={scrollYProgress} />
      {cards.map((card, index) => (
        <Card
          key={index}
          scrollYProgress={scrollYProgress}
          content={card.content}
          bgColor={card.bgColor}
          index={index + 1}
          totalCards={cards.length + 1}
        />
      ))}
    </div>
  );
};

export default Services2;