'use client'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Picture1 from '../../../public/images/logo/git.svg';

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
    className="overflow-hidden bg-black font-day">
      <div className="h-[20vh]" />
      <div ref={container}>
        <Slide src={Picture1} direction="left" left="-40%" progress={scrollYProgress} />
        <Slide src={Picture1} direction="right" left="-25%" progress={scrollYProgress} />
      </div>
      <div className="h-[20vh]" />
    </main>
  );
}

const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
  const directionFactor = direction === 'left' ? -1 : 1;
const translateX = useSpring(
  useTransform(progress, [0, 1], [300 * directionFactor, -300 * directionFactor]), 
  { stiffness: 100, damping: 30 }
);



  return (
    <motion.div 
    // initial={{rotate:-5}} animate={{rotate:-5}}
    style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
}
// #cb8b93
const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className="px-5 text-[3vw] flex gap-1 items-center text-[#fff9fa]">
      <p>Skill Set Overview</p>
      <span className="relative h-[5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p>Skill Set Overview</p>
      <span className="relative h-[5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p>Skill Set Overview</p>
      <span className="relative h-[5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p>Skill Set Overview</p>
      <span className="relative h-[5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p>Skill Set Overview</p>
      <span className="relative h-[5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
      <p>Skill Set Overview</p>
      <span className="relative h-[5vw] aspect-[2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'contain' }} src={src} alt="image" fill />
      </span>
    </div>
  );
}