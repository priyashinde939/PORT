import React from 'react';
import styles from './HowItWorks.module.css';  // Importing CSS Module
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants } from '@/lib/animation';
import  TextEffectPresence  from '../TextEffects/TextEffectPresence'
import { TRUE } from 'sass';


// Define the type for each feature item in hitFeatures
interface Feature {
  title: string;
  des: string;
  icon: string;
}

const hitFeatures: Feature[] = [
  {
    icon: "/images/bg/Frame-0.png",
    title: "Connect",
    des: "Register and qualify for funding in less than 5 mins. Connect revenue and marketing platforms you already use.",
  },
  {
    icon: "/images/bg/Frame-0.png",
    title: "Get Funded",
    des: "Get a term sheet with up to 3 funding offers. Select option that best suits and complete onboarding to receive funds in days.",
  },
  {
    icon: "/images/bg/Frame-0.png",
    title: "Support Growth",
    des: "Access curated feed of actionable insights and on demand execution expertise. Auto qualify for follow-on funding as you grow.",
  },
];

const HowItWorks: React.FC = () => {
  // Animation variants for feature items
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  };

  return (
    <div className={styles.hiwWrapper}>
      <div className="container">
        <div className={styles.hiwContainer}>
          {/* head */}
          <div className={styles.hiwHead}>
            <motion.span 
              variants={tagVariants}
              initial="offscreen"
              whileInView="onscreen"
              className={styles.tag}
            >
              

              {/* How it works */}
              <TextEffectPresence text="How It Works" />
            </motion.span>
            <motion.span 
              variants={titleVariants}
              initial="offscreen"
              whileInView="onscreen"
              className={styles.title}
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>
          
          {/* features */}
          <div className={styles.hiwFeatures}>
            {hitFeatures.map((feature: Feature, i: number) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView="onscreen"
                className={styles.hiwFeature}
                key={i}
              >
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: 'easeIn',
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className={styles.detail}
                >
                  <span className={styles.des}>0{i + 1}</span>
                  <span className={styles.secTitle}>{feature.title}</span>
                  <span className={styles.text}>{feature.des}</span>
                </motion.div>

                {/* right side */}
                <div className={styles.icon}>
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt={feature.title} // More descriptive alt text
                    style={{ translate: '50% 0rem' }}
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

export default HowItWorks;
