'use client'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Picture1 from '../../../public/images/git.svg';


interface SlideProps {
  src: 'Picture1';
  direction: 'left' | 'right';
  right: string;
  progress: any;
}

interface PhraseProps {
  src: 'Picture1';
}

export default function Test2() {
    
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });
  return (
    <main 
    className="overflow-hidden bg-black font-black ">
      <div className="h-[25vh]" />
      <motion.div 
      ref={container}>
        <Slide src={Picture1} direction="right" right="40%" progress={scrollYProgress} />
      </motion.div>
      <div className="h-[25vh]" />
    </main>
  );
}

const Slide: React.FC<SlideProps> = ({ src, direction, right, progress }) => {
  const directionFactor = direction === 'left' ? -1 : 1;
const translateX = useSpring(
  useTransform(progress, [0, 1], [400 * directionFactor, -400 * directionFactor]), 
  { stiffness: 100, damping: 30 }
);



  return (
    <motion.div 
    initial={{rotate:3}} animate={{rotate:3}}
    style={{ x: translateX, right }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
    </motion.div>
  );
}

const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className="px-5 flex gap-1 items-center text-white ">
      <p className="text-[4vw]">SOME TEXT CONTENT</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p className="text-[4vw]">SOME TEXT CONTENT</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p className="text-[4vw]">SOME TEXT CONTENT</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p className="text-[4vw]">SOME TEXT CONTENT</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p className="text-[4vw]">SOME TEXT CONTENT</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p className="text-[4vw]">SOME TEXT CONTENT</p>
      <span className="relative h-[7.5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
    </div>
  );
}