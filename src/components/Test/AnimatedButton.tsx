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
  duration = 0.25,
  stagger = 0.025,
  textSize = "text-4xl sm:text-7xl md:text-8xl lg:text-9xl",
}) => {
  return (
    <section className={`grid place-content-center gap-2 px-8 py-24 ${textColor}`}>
      {links.map((link, index) => (
        <FlipButton
          key={index}
          href={link.href}
          duration={duration}
          stagger={stagger}
          textSize={textSize}
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
  textSize: string;
}

export const FlipButton: React.FC<FlipButtonProps> = ({
  children,
  href,
  duration,
  stagger,
  textSize,
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative inline-block overflow-hidden whitespace-nowrap font-black uppercase ${textSize}`}
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
              ease: "easeInOut",
              delay: stagger * index,
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
              ease: "easeInOut",
              delay: stagger * index,
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
