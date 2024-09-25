// Button.tsx
import React from 'react';
import s from './Button.module.scss'; // Import custom CSS file


export const Button = ({
  text,
  className
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  
  return (
    <a >
      <button className={s.bn54}>
        <span className={s.bn54span}> {text}</span>
      </button>
    </a>
  );
};

export default Button;