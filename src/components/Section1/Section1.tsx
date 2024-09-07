import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section1 = () => {
  // Ref and inView state for the entire section
  const { ref: sectionRef, inView: isSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
     className="mx-16 mt-44 font-jost" ref={sectionRef}>
      <motion.h1
        className="text-6xl w-[50%]"
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        SHAPING NEW THOUGHTS AND IDEAS
      </motion.h1>
      
      <div className="relative h-auto flex flex-row sm:flex-col my-32 gap-9">
        {['awards.jpg', 'mid.jpg', 'awards.jpg'].map((src, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col basis-1/4"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="relative flex h-[40%]">
              <Image
                src={`/images/${src}`}
                width={500}
                height={500}
                alt={`image-${index}`}
                className="relative overflow-hidden"
              />
            </div>
            <span className="relative border w-fit content-start font-semibold rounded-3xl mt-5 px-3 hover:bg-white hover:text-black">
              {['CONTACT', 'DESIGN', 'SEE MORE'][index]}
            </span>
            <div className="text-2xl my-2 font-sans">
              WEVE BEEN SHORTLISTED AS THE MARRIAGE THOUGHT PROVOKING STORIES
            </div>
            <p className="text-slate-500">
              WEVE BEEN SHORTLISTED AS THE MARRIAGE THOUGHT PROVOKING STORIES
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
