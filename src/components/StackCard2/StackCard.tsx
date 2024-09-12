//StackCard.tsx
'use client';

import Image from 'next/image';
import styles from './StackCard.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

// Define an interface for the component props
interface StackCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: any; // You may want to refine this type if you know the exact type
  range: number[];
  targetScale: number;
}

const StackCard: React.FC<StackCardProps> = ({ i, title, description, src, color, progress, range, targetScale }) => {
  // Specify the type for the ref (can be HTMLDivElement or null)
  const container = useRef<HTMLDivElement | null>(null);
  
  // Set up scroll and animations
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container}   className={`${styles.cardContainer} ${i === 0 ? styles.firstCard : ''}`}>
      <motion.div 
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)`
        // ...(i === 0 && { width:"100vw", backgroundColor:'white' })
        }} 
        className={styles.card}
      >
    {/* Check if it's the first card (i === 0) */}
    {i === 0 ? (
      <div className={styles.ourServicesContainer}>
        <h1 className={styles.ourServicesHeading}>OUR SERVICES</h1>
        <svg
          className={styles.arrowIcon}
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 L100,50 M75,25 L100,50 L75,75" stroke="black" strokeWidth="5" fill="none" />
        </svg>
      </div>
    ) : (
      <>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <span>
              <a target="_blank" rel="noopener noreferrer">See more</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt={title} />
            </motion.div>
          </div>
        </div>
      </>
    )}
  </motion.div>
</div>
  );
}

export default StackCard;
