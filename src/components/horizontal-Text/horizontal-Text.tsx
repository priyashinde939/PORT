import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./horizontal-Text.module.scss";

gsap.registerPlugin(ScrollTrigger);

const phrase = "FROM THE LABORATORY...";
const splitted = phrase.split("");
const charsLength = splitted.length;

export const HorizontalText: React.FC = () => {
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
      
      { scale: 0.1, opacity: 0.6, y:-200, x: -300, rotate:0,
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "0% top",
          end: "30% top",
          scrub: true,
        },
      },
      {
        scale: 3,
        rotate:360,
        opacity: 1,
        ease: "linear", 
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "30% top",
          end: "120% top",
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


        </div>
        <WorldSvg ref={svgRef} />
      </div>
    </section>
  );
};

const WorldSvg = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      viewBox="0 0 699 467"
      fill="none"
      className={s.worldSvg}
      ref={ref}
      
      
    >
    <path d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z" fill="lime" />
    </svg>
  );
});
WorldSvg.displayName = "WorldSvg";

