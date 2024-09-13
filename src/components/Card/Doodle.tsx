import React from 'react';
import { motion } from 'framer-motion';
import styles from './Doodle.module.scss';

const colors = ['#51eaea', '#fffde1', '#ff9d76', '#FB3569'];

// Helper function to get a random value between a range
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

// Helper function to get a random color from the colors array
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Doodle: React.FC = () => {
  const heartsArray = Array.from({ length: 30 });

  return (
    <div className={styles['doodle-container']}>
      {heartsArray.map((_, i) => (
        <motion.div
          className={styles.heart}
          key={i}
          initial={{ opacity: 0, transform: 'translateZ(0) rotate(0)' }}
          animate={{
            opacity: [0, 1, 1, 0],
            translateZ: ['0vmin', '35vmin', '35vmin', '0vmin'],
            rotateZ: [`${getRandom(-180, 180)}deg`, `${getRandom(-180, 180)}deg`],
          }}
          transition={{
            duration: 12,
            ease: 'linear',
            repeat: Infinity,
            delay: (12 / 30) * i,
          }}
          style={{
            backgroundColor: getRandomColor(),
            boxShadow: `0 0 50px ${getRandomColor()}`,
          }}
        >
          {/* Before and After elements */}
          <div
            className={styles.before}
            style={{
              backgroundColor: getRandomColor(),
              top: `${getRandom(0, 100)}%`,
              left: `${getRandom(0, 100)}%`,
            }}
          />
          <div
            className={styles.after}
            style={{
              backgroundColor: getRandomColor(),
              top: `${getRandom(0, 100)}%`,
              left: `${getRandom(0, 100)}%`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Doodle;
