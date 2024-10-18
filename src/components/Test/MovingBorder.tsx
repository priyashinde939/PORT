import { motion } from 'framer-motion';
import React from 'react';
import './MovingBorderWrapper.module.css';

type MovingBorderWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MovingBorderWrapper: React.FC<MovingBorderWrapperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`moving-border-wrapper-container ${className}`}>
      <motion.div
        className="moving-border"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
      />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MovingBorderWrapper;
