//StackCard.tsx
'use client';

import Image from 'next/image';
import styles from './StackCard.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import clsx from "clsx";

// Define an interface for the component props
interface StackCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: any; 
  range: number[];
  targetScale: number;
  targetOpacity: number;
}

const StackCard: React.FC<StackCardProps> = ({ i, title, description, src, color, progress, range, targetScale, targetOpacity }) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, targetOpacity]);

  return (
    <div ref={container} className={`${styles.cardContainer} ${i === 0 ? styles.firstCard : ''}`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          opacity,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        {i === 0 ? (
          <div className={styles.firstCard}>
            <h1 className={styles.firstCardHeading}>OUR SERVICES</h1>
            <svg
              className={styles.arrowIcon}
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path d="M0,50 L100,50 M75,25 L100,50 L75,75" stroke="black" strokeWidth="50" fill="none" />
            </svg>
          </div>
        ) : i === 4 ? (
          <div className={`${styles.lastCard} `}>
            <div className={`${styles.lastCardHeading}`}>
              last Card Content
            </div>
            {/* <Image fill src={`/images/${src}`} alt="-_-" /> */}
          </div>
        ) : (
          <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.body}>
              <div className={styles.description}>
                <h1 className="text-4xl font-black p-5"> Hola Hola Hola </h1>
                <div className="flex flex-row place-content-between font-medium mb-7"> 
                  <div> for pack: Erro </div>
                  <div> directory rena </div>
                  <div> client-deve </div>
                </div>
                <p>{description}</p>
                <span>
                  <a className="my-5 font-medium" target="_blank" rel="noopener noreferrer">See more</a>
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
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
};

export default StackCard;