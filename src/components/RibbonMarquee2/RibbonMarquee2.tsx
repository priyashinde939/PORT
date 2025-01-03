import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./RibbonMarquee2.module.scss"; // Import your styles

gsap.registerPlugin(ScrollTrigger);

export const RibbonMarquee2: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const marquee1Ref = useRef<HTMLDivElement | null>(null);
    const marquee2Ref = useRef<HTMLDivElement | null>(null);
    const pretitleRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);
    const backgroundSvgRef = useRef<SVGSVGElement | null>(null);


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
            d="M10 10 H 90 V 90 H 10 L 10 10" 
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
            <path d="M10 10 H 90 V 90 H 10 L 10 10"  fill="#EFEFEF" />
            </svg>
            BSMNT LAB is carving out a vanguard position by combining intensive
            technology with formal design expertise – we are making the internet
            everything it can be.
        </p>


        {/* Marquees */}
        <div className={s.marquees}>
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
            ["--marquee-color" as string]: orange ? "#cb8b93" : "#979cba",
            }}
        >
            <div className={clsx(s.marqueeAnimationContainer, reverse && s.reverse)} data-marquee-animation-container>
            {Array.from({ length: 20 }, (_, i) => (
                <div style={{ fontFamily: 'Day' }} key={i} className={s.marqueeItem}>
                Asteron <Star />
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
    <img className={s.star} src="/images/next.svg" alt="img"/>
  );
};

export default RibbonMarquee2