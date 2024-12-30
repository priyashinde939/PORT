// Import necessary dependencies
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface FlipButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

export const FlipButton: React.FC<FlipButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lines = buttonRef.current?.querySelectorAll(".line");
    const chars = buttonRef.current?.querySelectorAll(".char");

    if (lines && chars) {
      // Initial setup: position one line below and characters below
      gsap.set(lines, { yPercent: 0 });
      gsap.set(chars, { yPercent: 0, opacity: 0, rotationX: 90 });

      buttonRef.current?.addEventListener("mouseenter", () => {
        // Line animation
        gsap.to(lines[0], {
          yPercent: -100,
          duration: 0.6,
          ease: "power3.out",
        });
        gsap.to(lines[1], {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
        });

        // Character animation with stagger
        gsap.to(chars, {
          yPercent: 0,
          opacity: 1,
          rotationX: 0,
          stagger: 0.05, // Stagger effect for characters
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      });

      buttonRef.current?.addEventListener("mouseleave", () => {
        // Reset line animation
        gsap.to(lines[0], {
          yPercent: 0,
          duration: 0.6,
          ease: "power3.in",
        });
        gsap.to(lines[1], {
          yPercent: 100,
          duration: 0.6,
          ease: "power3.in",
        });

        // Reset character animation with stagger
        gsap.to(chars, {
          yPercent: 100,
          opacity: 0,
          rotationX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.in(1.7)",
        });
      });
    }
  }, []);

  return (
    <div
      ref={buttonRef}
      className={`relative inline-block overflow-hidden cursor-pointer text-[1.5rem] font-bold uppercase ${className}`}
      onClick={onClick}
      style={{lineHeight:1.5}}
    >
      {/* First line of text */}
      <div className="line relative inset-0 ">
        {children.split("").map((char, index) => (
          <span key={index} className="char inline-block">
            {char}
          </span>
        ))}
      </div>

      {/* Second line of text */}
      <div className="line absolute inset-0 ">
        {children.split("").map((char, index) => (
          <span key={index} className="char inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
