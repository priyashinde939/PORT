
//TextEffectPresence

import React, { useRef, useState, useEffect } from 'react';
import { TextEffect } from '../TextEffects/CoreEffect'; 


interface TextEffectTriggerProps {
  text: string;
  delay?: number; 
  threshold?: number; 
}

const TextEffectTrigger: React.FC<TextEffectTriggerProps> = ({ text, delay = 0.5, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [threshold]);

  const variants = {
    container: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        rotateX: 90,
        y: 20,
        x: 10,
        filter: 'blur(10px)',
      },
      visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.2,
        },
      },
    },
  };

  return (
    <div ref={textRef} className="flex flex-col space-y-0">
      {isVisible && (
        <TextEffect
          per="char"
          variants={{
            container: variants.container,
            item: variants.item,
          }}
        >
          {text}
        </TextEffect>
      )}
    </div>
  );
};

export default TextEffectTrigger;
