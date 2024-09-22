import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./RibbonMarquee.module.scss"; // Import your styles

gsap.registerPlugin(ScrollTrigger);

export const RibbonMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const marquee1Ref = useRef<HTMLDivElement | null>(null);
  const marquee2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;


    // Marquee Animations
    gsap.to(marquee1Ref.current, {
      x: -600,
      ease: "linear",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    // start: "top bottom",
    // end: "bottom top",
    gsap.to(marquee2Ref.current, {
      x: -600,
      ease: "linear",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "start bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={clsx(s.container)}>
     

      {/* Marquees */}
      <div 
      className={s.marquees}>
        <Marquee className={s.marquee1} orange ref={marquee1Ref} />
        <Marquee className={s.marquee2} reverse ref={marquee2Ref} />
      </div>
    </div>
  );
};

// Marquee Component
const Marquee = React.forwardRef<HTMLDivElement, { reverse?: boolean; orange?: boolean; className?: string }>(
  ({ reverse, orange, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(s.marqueeContainer, className)}
        style={{
          ["--marquee-color" as string]: orange ? "#ff4d00" : "white"
        }}
      >
        <div className={clsx(s.marqueeAnimationContainer, reverse && s.reverse)} data-marquee-animation-container>
          {Array.from({ length: 20 }, (_, i) => (
            <div style={{ fontFamily: 'Black' }} key={i} className={s.marqueeItem}>
              ASTERON <Star />
            </div>
          ))}
        </div>
      </div>
    );
  }
);
Marquee.displayName = "Marquee";

// LabSvg Component
const Star: React.FC = () => {
  return (
    <img className={s.star} src="/asteron1.svg"/>
  );
};