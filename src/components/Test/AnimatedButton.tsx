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
      className={`relative inline-block overflow-hidden whitespace-nowrap font-semibold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl `}
      style={{
        lineHeight: 0.85,
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
              bounce: 0.5,

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
              bounce: 0.5,
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