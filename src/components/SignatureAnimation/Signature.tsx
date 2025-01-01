import React from 'react';
import { useSignatureAnimation } from './hooks/useSignatureAnimation';
import styles from './SignatureAnimation.module.css';

export const Signature: React.FC = () => {
  const { svgRef, lineRef } = useSignatureAnimation();

  return (
    <svg
      ref={svgRef}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
      className={styles.signature}
    >
      <path
        ref={lineRef}
        className={styles.path}
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        d="M 0 0 Q 200 50 100 100 Q 0 150 150 150 Q 400 150 250 350 Q 200 450 450 400 C 650 350 550 550 800 600"
      />
    </svg>

  );
};