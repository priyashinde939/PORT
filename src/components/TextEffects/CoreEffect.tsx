import { motion } from 'framer-motion';
import React from 'react';

type TextEffectProps = {
  children: string;
  per?: 'word' | 'char';
  variants: {
    container: any;
    item: any;
  };
};

export function TextEffect({
  children,
  per = 'word',
  variants,
}: TextEffectProps) {
  const segments = per === 'word' 
    ? children.split(/(\s+)/)
    : children.split(''); // Split by characters if per is 'char'

  return (
    <motion.div initial="hidden" animate="visible" variants={variants.container}>
      {segments.map((segment, index) => (
        <motion.span key={index} variants={variants.item} className="inline-block whitespace-pre">
          {segment}
        </motion.span>
      ))}
    </motion.div>
  );
}
