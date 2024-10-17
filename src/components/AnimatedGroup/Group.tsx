'use client';
import { AnimatedGroup } from './AnimatedGroup';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

type GroupProps = {
  items: {
    id: number;
    src: string;
    alt: string;
    text: string;
  }[];
};

export function Group({ items }: GroupProps) {
  return (
    <AnimatedGroup
      className='grid h-full place-self-center gap-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-4 grid-cols-4 '
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: -100,
            rotateX: 90,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            rotateX: 0,
            transition: {
              type: 'spring',
              bounce: 0.6,
              duration: 2,
            },
          },
        },
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="text-center flex flex-col justify-center items-center"
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.94, rotate:4 }}
          transition={{ type: 'spring', stiffness: 100, }} 
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={100}
            height={100}
            className='h-[50px] w-[50px] sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] lg:h-[50px] lg:w-[50px] xl:h-[50px] xl:w-[50px]'
          />
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {item.text}
          </p>
        </motion.div>
      ))}
    </AnimatedGroup>
  );
}
