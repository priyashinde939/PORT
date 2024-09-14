// Button.tsx
import React from 'react';
import s from './Button.module.scss'; // Import custom CSS file

const Button: React.FC = () => {
  return (
    <a >
      <button className={s.bn54}>
        <span className={s.bn54span}> Find Out More ➔</span>
      </button>
    </a>
  );
};

export default Button;
