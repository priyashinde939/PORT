import React from 'react';
import styles from './Preloader.module.css';

export const PreloaderPath: React.FC = () => (
  <>
    <defs>
      <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3CB5F1">
          <animate
            attributeName="offset"
            values="0;1;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#CF2AF0">
          <animate
            attributeName="offset"
            values="0.5;1.5;0.5"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#69EF72">
          <animate
            attributeName="offset"
            values="1;2;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
    <path
      className={styles.preloaderPath}
      d="M 0 450 C 50 350 250 450 250 300 C 250 200 200 150 150 150 C 50 150 50 250 200 250 C 450 250 500 50 800 200  "
      fill="none"
      stroke="url(#preloaderGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);