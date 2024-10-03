import { Variants } from 'framer-motion';

// Define containerVariants as a function that takes a delay (default = 0)
export const containerVariants = (delay: number = 0): Variants => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2,
      delay,
    },
  },
});

export const tagVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
};

export const titleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.2,
    },
  },
};

export const desVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.6,
      delay: 0.2,
    },
  },
};
