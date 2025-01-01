import React from 'react';
import { PreloaderPath } from './PreloaderPath';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloaderContainer}>
      <svg
        viewBox="0 0 800 600"
        className={styles.preloaderSvg}
        preserveAspectRatio="xMidYMid meet"
      >
        <PreloaderPath />
      </svg>
    </div>
  );
};

export default Preloader;