import React from 'react';
import { Preloader2Path } from './Preloader2Path';
import styles from './Preloader2.module.css';

const Preloader2: React.FC = () => {
  return (
    <div className={styles.preloader2Container}>
      <svg
        viewBox="0 0 800 600"
        className={styles.preloader2Svg}
        preserveAspectRatio="xMidYMid meet"
      >
        <Preloader2Path />
      </svg>
    </div>
  );
};

export default Preloader2;