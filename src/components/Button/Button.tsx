import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GsapButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const starRefs = useRef<HTMLDivElement[]>([]);

  // Add star divs to the refs array
  const addToStarRefs = (el: HTMLDivElement) => {
    if (el && !starRefs.current.includes(el)) {
      starRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Hover in animation
    tl.to(starRefs.current, {
      duration: 0.8,
      x: (index) => [150, 100, -100, -150, 200, -200][index], // Different X translations for stars
      y: (index) => [100, -150, 50, -50, 150, -100][index],  // Different Y translations for stars
      opacity: 1,
      scale: 1.5,
      stagger: 0.1,
      ease: 'power3.out',
      rotation: 360,
    });

    // Hover out animation
    gsap.to(buttonRef.current, {
      onMouseLeave: () => {
        gsap.to(starRefs.current, {
          duration: 0.8,
          x: 0,
          y: 0,
          opacity: 0,
          scale: 1,
          stagger: 0.1,
          ease: 'power3.in',
          rotation: 0,
        });
      },
    });

    const buttonEl = buttonRef.current;
    if (buttonEl) {
      buttonEl.addEventListener('mouseenter', () => tl.play());
      buttonEl.addEventListener('mouseleave', () => tl.reverse());
    }

    return () => {
      if (buttonEl) {
        buttonEl.removeEventListener('mouseenter', () => tl.play());
        buttonEl.removeEventListener('mouseleave', () => tl.reverse());
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative py-3 px-9 bg-[#fec195] text-[17px] font-medium text-[#181818] border-[3px] border-[#fec195] rounded-[8px] transition-all duration-300 ease-in-out cursor-pointer hover:bg-transparent hover:text-[#fec195] hover:shadow-[0_0_25px_#fec1958c]"
    >
      Button
      {/* Star elements */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={addToStarRefs}
          className={`absolute w-${index % 2 === 0 ? 6 : 4} h-auto opacity-0`}
          style={{
            top: `${20 + index * 10}%`,
            left: `${20 + index * 5}%`,
            zIndex: -5,
          }}
        >
          <StarSvg />
        </div>
      ))}
    </button>
  );
};

// Star SVG Component
const StarSvg: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className="fill-[#fffdef]"
  >
    <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
  </svg>
);

export default GsapButton;
