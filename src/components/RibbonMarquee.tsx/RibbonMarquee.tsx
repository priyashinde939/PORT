import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./RibbonMarquee.module.scss"; // Import your styles

gsap.registerPlugin(ScrollTrigger);

export const RibbonMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pretitleRef = useRef<HTMLDivElement | null>(null);
  const backgroundSvgRef = useRef<SVGSVGElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const marquee1Ref = useRef<HTMLDivElement | null>(null);
  const marquee2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Pretitle Animation
    gsap.fromTo(
      pretitleRef.current,
      { y: 0 },
      {
        y: -40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      }
    );

    // Background SVG Animation
    gsap.fromTo(
      backgroundSvgRef.current,
      { y: 0 },
      {
        y: 80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      }
    );

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 0 },
      {
        y: -80,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      }
    );

    // Marquee Animations
    gsap.to(marquee1Ref.current, {
      x: 1000,
      ease: "linear",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.1,
      },
    });
    // start: "top bottom",
    // end: "bottom top",
    gsap.to(marquee2Ref.current, {
      x:  -1000,
      ease: "linear",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "start bottom",
        end: "bottom top",
        scrub: 1.1,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={clsx(s.container)}>
      {/* Pretitle with SVG */}
      <div ref={pretitleRef} className={s.pretitle}>
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>chevron right</title>
          <path d="M5 4.5L-5.28505e-07 8.5L-1.78814e-07 0.5L5 4.5Z" fill="#EFEFEF" />
        </svg>
        <span>the lab</span>
      </div>

      {/* Background SVG */}
      <svg
        ref={backgroundSvgRef}
        width="732"
        height="301"
        viewBox="0 0 732 301"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={s.backgroundSvg}
      >
        {/* SVG Path */}
        <path
          d="M628.193 67.9406C563.929 76.1379 499.499 80.8854 435.955 96.0051..."
          stroke="#FF4D00"
          strokeWidth="1.15257"
          strokeLinecap="round"
          strokeDasharray="7 7"
        />
      </svg>

      {/* Title */}
      <h2 ref={titleRef} style={{ fontFamily: 'Day' }} className={s.title}>
        A peek into the latest in tech
      </h2>

      {/* Subtitle with SVG */}
      <p ref={subtitleRef} style={{ fontFamily: 'Jost' }} className={s.subtitle}>
        <svg
          width="9"
          height="153"
          viewBox="0 0 9 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.arrowDown}
        >
          <path d="M4.14645 152.354C4.34171 152.549 4.65829 152.549 4.85355 152.354L8.03553 149.172..." fill="#EFEFEF" />
        </svg>
        BSMNT LAB is carving out a vanguard position by combining intensive
        technology with formal design expertise – we are making the internet
        everything it can be.
      </p>

      {/* Marquees */}
      <div className={s.marquees}>
        <Marquee  className={s.marquee1} orange ref={marquee1Ref} />
        <Marquee  className={s.marquee2} reverse ref={marquee2Ref} />
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
          ["--marquee-color" as string]: orange ? "#ff4d00" : "white",
        }}
      >
        <div className={clsx(s.marqueeAnimationContainer, reverse && s.reverse)} data-marquee-animation-container>
          {Array.from({ length: 10 }, (_, i) => (
            <div style={{ fontFamily: 'Day' }} key={i} className={s.marqueeItem}>
              THE LAB <LabSvg />
            </div>
          ))}
        </div>
      </div>
    );
  }
);
Marquee.displayName = "Marquee";

// LabSvg Component
const LabSvg: React.FC = () => {
  return (
    <svg viewBox="0 0 90 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* SVG Paths */}
      <path d="M45 42.7769c21.7462 0 39.375-8.3117 39.375-18.5647..." stroke="#fff" strokeMiterlimit="10" strokeLinecap="round" />
      <path d="M44.9992 42.7769c7.6733 0 13.8938-8.3117 13.8938-18.5647..." stroke="#fff" strokeMiterlimit="10" strokeLinecap="round" />
      {/* Additional SVG content */}
    </svg>
  );
};
