import React from 'react';
import { Signature } from './Signature';
import { Spacer } from './Spacer';
import styles from './SignatureAnimation.module.css';

const SignatureAnimation: React.FC = () => {
  return (
    <div className={styles.container}>
      <Spacer size="large" />
      <div id="trigger1">
        <Spacer size="small" />
      </div>
      <Signature />
      <Spacer size="large" />
    </div>
  );
};

export default SignatureAnimation;