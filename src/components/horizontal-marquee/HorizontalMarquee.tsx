import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./horizontal-marquee.module.scss";

gsap.registerPlugin(ScrollTrigger);

const phrase = "FROM THE LABORATORY...";
const splitted = phrase.split("");
const charsLength = splitted.length;

export const HorizontalMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animatedTextRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current || !animatedTextRef.current || !svgRef.current) return;

    // Animation for moving the entire text
    gsap.fromTo(
      animatedTextRef.current,
      { xPercent: 98 },
      {
        xPercent: -50,
        ease: "linear",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top top+=300px",
          end: "bottom top",
          scrub: true,
          markers: true, // Optional: remove if not needed
        },
      }
    );

    // Animation for individual letters
    splitted.forEach((_, i) => {
      const charStart = (i / charsLength) * 0.7;
      const charEnd = charStart + (1 / charsLength);

      gsap.fromTo(
        `#char-${i}`,
        {
          yPercent: 40,
          scale: 0.5,
          autoAlpha: 0,
          transformOrigin: "center right",
        },
        {
          autoAlpha: 1,
          scale: 1,
          yPercent: 0,
          ease: "linear",
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: `${charStart * 100}% top`,
            end: `${charEnd * 100}% top`,
            scrub: true,
          },
        }
      );
    });

    // Animation for the WorldSvg
    gsap.fromTo(
      svgRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1.45,
        opacity: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "90% top",
          end: "100% top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className={s.section} ref={marqueeRef}>
      <div className={s.pinned}>
        <div className={s.animated} ref={animatedTextRef}>
          <p>
            {splitted.map((char, i) => (
              <span
                key={i}
                id={`char-${i}`}
                style={{ display: "inline-block" }}
              >
                {char === " " ? <>&nbsp;</> : char}
              </span>
            ))}
          </p>
          <WorldSvg ref={svgRef} />
        </div>
      </div>
    </section>
  );
};

const WorldSvg = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      viewBox="0 0 699 467"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.worldSvg}
      ref={ref}
    >
      <path
        d="M632.89 340.891c-.843 1.264-1.898 2.528-2.741 3.897-2.32 3.477-3.058 3.582-7.065.633l17.82-15.802-8.014 055Z"
        fill="#fff"
      />
      <path
        d="M349.922 0C170.967 0 25 104.714 25 233.447S170.545 467 349.5 467 674 362.286 674 233.447C674 104.609 528.876 0 349.922 0Zm-95.485 450.566c2.846-2.739 5.691-5.478 8.747-8.112.876-.617 1.575-1.454 2.025-2.427.45-.5275-3.325-2.7396-5.315-3.5668-1.99-.8272-4.124-1.253-6.279-1.253Z"
        fill="#fff"
      />
      <path
        d="M673.384 93.2323h7.698c1.434-.1341 2.866.28 4.007 1.1588.478.4137.852.9349 1.091 1.5209.238.586.334 1.22.425-.632h-5.378v5.5835Z"
        fill="#fff"
      />
    </svg>
  );
});
WorldSvg.displayName = "WorldSvg";
