import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './StackCard.module.scss';

interface StackCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
}

const StackCard: React.FC<StackCardProps> = ({ i, title, description, src, color }) => {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={container} className={`${styles.cardContainer}`}>
      <motion.div
        style={{
          backgroundColor: color,
        }}
        className={`${styles.card} ${i === 0 ? styles.firstCard : ''} ${i === 4 ? styles.lastCard : ''}`}
      >
        {i === 0 ? (
          <div className={styles.firstCard}>
            <h1 className={styles.firstCardHeading}>OUR SERVICES</h1>
          </div>
        ) : i === 4 ? (
          <div className={styles.lastCard}>
            <div className={styles.lastCardHeading}>Last Card Content</div>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.body}>
              <div className={styles.description}>
                <p>{description}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image fill src={`/images/${src}`} alt={title} />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default StackCard;
