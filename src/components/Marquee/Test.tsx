'use client'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import Picture1 from '../../../public/images/git.svg';
import Picture2 from '../../../public/images/next.svg';

interface SlideProps {
  src: string;
  direction: 'up' | 'down';
  top: string;
  progress: any;
}

export default function VerticalMarquee() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  // Debugging scrollYProgress by logging it
  useEffect(() => {
    scrollYProgress.onChange((v) => console.log("Scroll Progress:", v));
  }, [scrollYProgress]);

  return (
    <main className="overflow-hidden bg-black text-white font-sans flex flex-col h-[200vh]">
      {/* Left section for vertical text */}
      <div className="w-full h-screen flex">
        <div className="w-1/3 flex items-center justify-center">
          <motion.div 
            className="flex flex-col text-[vw] font-bold rotate-90 whitespace-nowrap"
            initial={{ y: 300 }} 
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>AMBER K. DUNFORD</div>
          </motion.div>
        </div>

        {/* Right section for sliding content */}
        <div ref={container} className="w-2/3 relative">
          <Slide src={Picture1} direction="up" top="10%" progress={scrollYProgress} />
          <Slide src={Picture2} direction="down" top="30%" progress={scrollYProgress} />
        </div>
      </div>
    </main>
  );
}

const Slide: React.FC<SlideProps> = ({ src, direction, top, progress }) => {
  const directionFactor = direction === 'up' ? -1 : 1;
  const translateY = useSpring(
    useTransform(progress, [0, 1], [300 * directionFactor, -300 * directionFactor]), 
    { stiffness: 100, damping: 30 }
  );

  return (
    <motion.div 
      style={{ y: translateY, top }} 
      className="absolute w-full h-auto">
      <Image src={src} alt="Sliding Image" layout="fill" objectFit="cover" />
    </motion.div>
  );
}
