import React from 'react';
import styles from './AnimatedSVG.module.scss';
import { useScrollAnimation } from './useScrollAnimation';
import { GradientPath } from './GradientPath';
// import { animationConfig } from './config';

const AnimatedSVG: React.FC = () => {
  const { svgRef, isVisible, scrollDirection } = useScrollAnimation();
  const animationConfig = {
    // Duration in seconds
    duration: 1,
    // Timing function for the animation
    easing: 'ease-in-out',
  };
  return (
    <div 
      className={styles.container}
      style={{
        '--animation-duration': `${animationConfig.duration}s`,
        '--animation-easing': animationConfig.easing,
      } as React.CSSProperties}
    >
      <svg
        className={`${styles.squiggle} ${isVisible ? styles.animate : ''} ${
          scrollDirection === 'up' ? styles.reverse : ''
        }`}
        ref={svgRef}
        width="1145"
        height="1084"
        viewBox="0 0 1145 1084"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <GradientPath />
      </svg>
    </div>
  );
};

export default AnimatedSVG;