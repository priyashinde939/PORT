import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./horizontal-Text.module.scss";

gsap.registerPlugin(ScrollTrigger);

const phrase = "Behind the Code ....";
const splitted = phrase.split("");
const charsLength = splitted.length;

export const HorizontalText: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animatedTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!marqueeRef.current || !animatedTextRef.current) return;

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
          scrub: 0.3,
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
            scrub: 0.3,
          },
        }
      );
    });
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
      </div>
    </section>
  );
};
