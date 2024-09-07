'use client'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Picture1 from '../../../public/images/git.svg';
import Picture2 from '../../../public//images/next.svg';

interface SlideProps {
  src: 'Picture1';
  direction: 'left' | 'right';
  left: string;
  progress: any;
}

interface PhraseProps {
  src: 'Picture1';
}

export default function Marquee() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  return (
    <main 
    className="overflow-hidden bg-slate-500 font-black font-sans rotate-90">
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slide src={Picture1} direction="left" left="-40%" progress={scrollYProgress} />
        <Slide src={Picture2} direction="right" left="-25%" progress={scrollYProgress} />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
  const directionFactor = direction === 'left' ? -1 : 1;
const translateX = useSpring(
  useTransform(progress, [0, 1], [500 * directionFactor, -500 * directionFactor]), 
  { stiffness: 100, damping: 30 }
);



  return (
    <motion.div 
    style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
}

const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className="px-2 flex gap-1 items-center text-white ">
      <p className="text-[4vw]">Some Text Content</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      {/* <p className="text-[4vw]">Some Text Content</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p className="text-[4vw]">Some Text Content</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span> */}
    </div>
  );
}