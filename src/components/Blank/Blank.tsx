import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface CardProps {
  scrollYProgress: MotionValue<number>;
  content: string;
  bgColor: string;
  index: number;
  totalCards: number;
  videoSrc?: string;
  services: string[];
}

const Card: React.FC<CardProps> = ({ scrollYProgress, content, bgColor, index, totalCards, videoSrc, services }) => {
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
      className={`sticky top-[20vh] flex items-center justify-center w-full h-[85vh]`}
    >
      <motion.div 
        className={`${bgColor} text-white h-[75vh] w-[90vw] rounded-[2rem] flex items-center justify-between  shadow-2xl px-8 overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Left Side - Content */}
        <div className="flex flex-col items-start justify-center text-4xl font-semibold w-1/2 h-full pr-8">
          <motion.h2 
            className="text-6xl mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {content}
          </motion.h2>

          {/* Dynamic service buttons */}
          <motion.div
            className="flex flex-wrap gap-3 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
          {services.map((service, i) => (
            <motion.button
              key={i}
              className="border border-white border-opacity-25 text-black text-sm font-medium px-4 py-2 rounded-[3rem]"
              // initial={{b}}
              whileHover={{ backgroundColor: "#ffffff" }}
              transition={{ type: "linear", duration:0.4}}
            >
              {service}
            </motion.button>
          ))}
          </motion.div>

          <motion.p 
            className="text-xl font-normal max-w-lg mt-4 text-slate-900"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <motion.button
            className="mt-10 flex items-center justify-between border text-black px-8 py-2 font-medium text-2xl  rounded-[3rem]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className="mr-4">Find Out More</span>
            <span
              className="flex items-center justify-center w-6 h-6"
            >
              ➔ 
            </span>
          </motion.button>

        </div>

        {/* Right Side - Video */}
        {videoSrc && (
          <motion.div className="flex-1 h-[80%] bg-black rounded-[0px_165px_0px_0px]">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              className="w-full h-auto" // Custom border radius for video
            />
          </motion.div>
        )}
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
      className="relative h-screen flex top-[6%] justify-center font-day"
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
          transition={{ type: "spring", stiffness: 100, damping: 2, delay: 0.2 }}
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
    { content: "Web Development", bgColor: "bg-gradient-to-br from-pink-500 to-red-500", services: ["Creative Web Design", "Web Development", "Copywriting"], videoSrc: "path/to/video1.mp4" },
    { content: "Mobile App Development", bgColor: "bg-gradient-to-br from-green-400 to-blue-500", services: ["iOS Development", "Android Development", "React Native"], videoSrc: "path/to/video2.mp4" },
    { content: "UI/UX Design", bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500", services: ["User Research", "Wireframing", "Prototyping"], videoSrc: "path/to/video3.mp4" },
    { content: "Cloud Services", bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", services: ["AWS", "Azure", "Google Cloud"], videoSrc: "path/to/video4.mp4" }
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
          bgColor={card.bgColor}
          index={index + 1}
          totalCards={cards.length + 1}
          services={card.services}
          videoSrc={card.videoSrc} // Ensure videoSrc is passed dynamically
        />
      ))}
    </div>
  );
};

export default Blank;
