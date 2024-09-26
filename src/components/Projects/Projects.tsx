import React, { useState } from 'react';
import Product from './Project';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Projects() {
  const data = [
    {
      title: 'UI & UX Design',
      desc: 'Creating intuitive and engaging user experiences.',
      live: true,
      case: true,
      bg: '#5355ee',
    },
    {
      title: 'Website Development',
      desc: "Building responsive and dynamic websites.",
      live: true,
      case: true,
      bg: '#4a576b',
    },
    {
      title: 'Mobile Application Development',
      desc: 'Custom mobile apps tailored to your business needs.',
      live: true,
      case: true,
      bg: '#3e4365',
    },
    {
      title: 'Custom Software Development',
      desc: 'Bespoke software solutions for unique challenges.',
      live: true,
      case: true,
      bg: '#2dcb76',
    }
  ];

  const images = [
    '/images/1.jpg',
    '/images/5.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
  ];

  const [pos, setPos] = useState(0);
  const mover = (val: number) => {
    setPos(val * 16);
  };

  return (
    <div className="hidden sm:block mt-[8vw] relative">
      {data.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: '-50%' }}
          animate={{ y: pos + `vw` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[24vw] h-[16vw] bg-[#bdbbc2] left-[45%] -translate-x-1/2 overflow-hidden rounded-2xl"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `vw` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
              className="w-full h-full overflow-hidden"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;