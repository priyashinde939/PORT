import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { FaCode, FaMobile, FaPaintBrush, FaCloud } from 'react-icons/fa';

interface CardProps {
  scrollYProgress: MotionValue<number>;
  content: string;
  bgColor: string;
  index: number;
  totalCards: number;
  videoSrc?: string;
  services: string[];
}

const Heading: React.FC<{ scrollYProgress: MotionValue<number> }> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-20%']);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className="h-[40vh] flex items-center justify-center text-[#4a5b80] "
    >
      <div className="flex flex-col items-center " >
        <motion.span 
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          RECENT
        </motion.span>
        <motion.span 
          className="text-6xl md:text-8xl font-extrabold"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        >
          PROJECTS
        </motion.span>
      </div>
    </motion.div>
  );
};

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
      className="sticky top-[10vh] md:top-[15vh] flex items-center justify-center w-full h-[80vh]"
    >
      <motion.div
        className={`${bgColor} h-[70vh] md:h-[75vh] w-[90vw] rounded-[3rem] flex flex-col md:flex-row items-center justify-between shadow-2xl px-4 md:px-8 overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex flex-col text-white items-start justify-center w-full md:w-1/2 h-full p-4 md:pr-8">
          <motion.h2
          style={{fontFamily:'Kota'}}
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-black"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {content}
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-3 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {services.map((service, i) => (
              <motion.a
                key={i}
                className="relative text-lg px-7 py-2 border border-gray-700 text-black rounded-full overflow-hidden transition-all duration-500 ease-in-out group"
                whileHover={{ backgroundColor: "transparent" }}
                transition={{ type: "linear", duration: 0.4 }}
                href="/services"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  {service}
                </span>
                <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-md md:text-lg font-light max-w-lg mt-4 text-[#dfdee9] leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.a
            className="relative text-lg mt-12 px-7 py-2 border border-gray-700 rounded-full overflow-hidden transition-all duration-500 ease-in-out group"
            whileHover={{ backgroundColor: "transparent" }}
            transition={{ type: "linear", duration: 0.4 }}
            href="/services"
          >
            <span style={{fontFamily:'Kota'}}
            className="relative z-10 text-[#dfdee9] group-hover:text-white transition-colors duration-400 ease-in-out ">
              Find Out More
            </span>
            <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
          </motion.a>
        </div>
        {videoSrc && (
          <motion.div className="hidden md:flex flex-1 h-[80%] bg-black rounded-[0px_165px_0px_0px]">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              className="w-full h-full rounded-[0px_165px_0px_0px] object-cover"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    { content: "CODING", bgColor: "bg-gradient-to-br from-pink-500 to-red-500 ", services: ["Creative Web Design", "Web Development", "Mobile Application Development" , "AI Solutions", "UI & UX Design" ,"Custom Software Development"], videoSrc: "./medias/vid.mp4" },
    { content: "MARKETING", bgColor: "bg-gradient-to-br from-green-400 to-blue-500", services: ["Social Media Management", "Logo Generation", "Wireframing", "Prototyping"], videoSrc: "./medias/vid.mp4" },
    { content: "ACCOUNTING", bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500", services: ["Accounting Solutions", "Lead Generation" ], videoSrc: "./medias/vid.mp4" },
    // { content: "Cloud Services", bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", services: ["AWS", "Azure", "Google Cloud"], videoSrc: "./medias/pubg.mp4" }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-[#060918] -mb-[200vh]  pt-[20vh]" 
      style={{ height: `${(cards.length + 1) * 200}vh` }}
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
          videoSrc={card.videoSrc} 
        />
      ))}
    </div>
  );
};

export default Projects;
