import React from 'react';
import styles from './styles.module.scss';

const ShootingStars: React.FC = () => {
  const starsArray = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className={`h-full w-full ${styles.night} flex justify-center items-center`}>
      {starsArray.map((_, i) => (
        <div key={i} className={styles.shooting_star}></div>
      ))}
    </div>
  );
};

export default ShootingStars;
