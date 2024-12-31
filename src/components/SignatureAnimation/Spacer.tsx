import React from 'react';
import styles from './SignatureAnimation.module.css';

interface SpacerProps {
  size: 'small' | 'large';
}

export const Spacer: React.FC<SpacerProps> = ({ size }) => (
  <div className={`${styles.spacer} ${styles[size]}`} />
);