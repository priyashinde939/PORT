import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants } from '@/lib/animation';
import './HowItWorks2.module.scss';
import useCursor from '../Test/cursor-provider'; 


interface Feature {
  title: string;
  des: string;
  icon: string;
}

const hitFeatures: Feature[] = [
  {
    icon: "/images/logo/6.png",
    title: "Connect",
    des: "Register and qualify for funding in less than 5 mins. Connect revenue and marketing platforms you already use.",
  },
  {
    icon: "/next.svg",
    title: "Get Funded",
    des: "Get a term sheet with up to 3 funding offers. Select option that best suits and complete onboarding to receive funds in days.",
  },
  {
    icon: "/images/logo/9.png",
    title: "Support Growth",
    des: "Access curated feed of actionable insights and on-demand execution expertise. Auto qualify for follow-on funding as you grow.",
  },
];

const featureVariants = {
  offscreen: { scale: 0.5 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", duration: 1.5 },
  },
};

const HowItWorks2: React.FC = () => {
  const { setCursor, resetCursor } = useCursor(); 
  return (
    <div className="hiw-wrapper py-32 cursor-none">
      <div className="container mx-auto">
        <div className="hiw-container flex flex-col gap-8">
          {/* head */}
          <div
          onMouseEnter={() => {
            setCursor({ variant: "blurred", content: "" }); 
            }}
            onMouseLeave={resetCursor} 
          className="hiw-head text-center flex flex-col gap-8 mx-auto max-w-xl mb-36">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="tag text-gradient3 font-black text-[5rem]"
            >
              How it works
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="title text-[1rem] font-bold text-[#7086bc] "
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>

          {/* features */}
          <div 
            className="hiw-features flex flex-col items-center gap-8">
            {hitFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={featureVariants}
                initial="offscreen"
                whileInView="onscreen"
                className={`hiw-feature bg-[#dbdcdf] rounded-3xl flex items-center max-w-[40rem] py-4 px-6 shadow-lg ${
                  i % 2 === 0 ? 'md:mr-20' : 'md:ml-20'
                }`}
              >
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "easeIn", duration: 1, delay: 0.7 },
                  }}
                  className="detail flex flex-col gap-4 items-start text-[rgb(96,126,162)]"
                >
                  <span className="text-lg font-semibold">0{i + 1}</span>
                  <span className="sec-title text-xl font-black">{feature.title}</span>
                  <span className="text-[#000000] font-semibold">{feature.des}</span>
                </motion.div>

                {/* right side */}
                <div className="icon ml-8">
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="feature"
                    className="translate-x-1/2"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks2;
