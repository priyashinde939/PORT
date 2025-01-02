import React from 'react';
import styles from './Preloader2.module.css';
// #feffbe

export const Preloader2Path: React.FC = () => (
  <>
    <defs>
      <linearGradient id="preloader2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffefb3">
          <animate
            attributeName="offset"
            values="0;1;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#009999">
          <animate
            attributeName="offset"
            values="0.5;1.5;0.5"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#ffe599">
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
      className={styles.preloader2Path}
      d="M 0 450 C 50 350 250 450 250 300 C 250 200 200 150 150 150 C 50 150 50 250 200 250 C 450 250 500 50 800 200  "
      fill="none"
      stroke="url(#preloader2Gradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);