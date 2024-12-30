import React from "react";
import { motion } from "framer-motion";

interface RevealLinksProps {
  links: { href: string; label: string }[];
  textColor?: string;
  duration?: number;
  stagger?: number;
  textSize?: string;
}

export const RevealLinks: React.FC<RevealLinksProps> = ({
  links,
  textColor = "text-black",
  duration = 0.8,
  stagger = 0.025,

}) => {
  return (
    <section className={`grid place-content-center gap-2 px-8 py-24 ${textColor}`}>
      {links.map((link, index) => (
        <FlipButton
          key={index}
          href={link.href}
          duration={duration}
          stagger={stagger}

        >
          {link.label}
        </FlipButton>
      ))}
    </section>
  );
};

interface FlipButtonProps {
  children: string;
  href: string;
  duration: number;
  stagger: number;

}

export const FlipButton: React.FC<FlipButtonProps> = ({
  children,
  href,
  duration,
  stagger,

}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative inline-block border-sky-200 overflow-hidden whitespace-nowrap uppercase text-[0.7rem] sm:text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] `}
      style={{
        lineHeight: 1.1,
      }}
    >
      <div>
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration,
              ease: "linear",
              delay: stagger * index,
              type: 'spring',
              bounce: 0.6,

            }}

            className="inline-block"
          >
            {char}
          </motion.span>
          
        ))}
      </div>
      <div className="absolute inset-0"> 
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration,
              ease: "linear",
              delay: stagger * index,
              type: 'spring',
              bounce: 0.6,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};











// // Import necessary dependencies
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// interface FlipButtonProps {
//   children: string;
//   onClick?: () => void;
//   className?: string;
// }

// export const FlipButton: React.FC<FlipButtonProps> = ({
//   children,
//   onClick,
//   className = "",
// }) => {
//   const buttonRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const lines = buttonRef.current?.querySelectorAll(".line");
//     const chars = buttonRef.current?.querySelectorAll(".char");

//     if (lines && chars) {
//       // Initial setup: position one line below and characters below
//       gsap.set(lines, { yPercent: 100 });
//       gsap.set(chars, { yPercent: 100, opacity: 0, rotationX: 90 });

//       buttonRef.current?.addEventListener("mouseenter", () => {
//         // Line animation
//         gsap.to(lines[0], {
//           yPercent: -100,
//           duration: 0.6,
//           ease: "power3.out",
//         });
//         gsap.to(lines[1], {
//           yPercent: 0,
//           duration: 0.6,
//           ease: "power3.out",
//         });

//         // Character animation with stagger
//         gsap.to(chars, {
//           yPercent: 0,
//           opacity: 1,
//           rotationX: 0,
//           stagger: 0.05, // Stagger effect for characters
//           duration: 0.8,
//           ease: "back.out(1.7)",
//         });
//       });

//       buttonRef.current?.addEventListener("mouseleave", () => {
//         // Reset line animation
//         gsap.to(lines[0], {
//           yPercent: 0,
//           duration: 0.6,
//           ease: "power3.in",
//         });
//         gsap.to(lines[1], {
//           yPercent: 100,
//           duration: 0.6,
//           ease: "power3.in",
//         });

//         // Reset character animation with stagger
//         gsap.to(chars, {
//           yPercent: 100,
//           opacity: 0,
//           rotationX: -90,
//           stagger: 0.05,
//           duration: 0.8,
//           ease: "back.in(1.7)",
//         });
//       });
//     }
//   }, []);

//   return (
//     <div
//       ref={buttonRef}
//       className={`relative inline-block overflow-hidden cursor-pointer text-[1.5rem] font-bold uppercase ${className}`}
//       onClick={onClick}
//       style={{lineHeight:1}}
//     >
//       {/* First line of text */}
//       <div className="line relative inset-0 ">
//         {children.split("").map((char, index) => (
//           <span key={index} className="char inline-block">
//             {char}
//           </span>
//         ))}
//       </div>

//       {/* Second line of text */}
//       <div className="line absolute inset-0 ">
//         {children.split("").map((char, index) => (
//           <span key={index} className="char inline-block">
//             {char}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };
