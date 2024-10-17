"use client";
import { useEffect, useRef } from "react";
import { stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const Texteffects = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref for the container

  useEffect(() => {
    const currentElement = containerRef.current;

    if (!currentElement) return; // Exit if the ref is not set

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when the element is in view
            animate(
              currentElement.querySelectorAll("span"),
              {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
              },
              {
                duration: duration || 1,
                delay: stagger(0.2),
              }
            );
          } else {
            // Reset animation when the element leaves the view
            animate(
              currentElement.querySelectorAll("span"),
              {
                opacity: 0,
                filter: filter ? "blur(15px)" : "none",
              },
              {
                duration: 1,
              }
            );
          }
        });
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <div ref={containerRef}>
        {words.split(" ").map((word, idx) => (
          <span key={idx} className="opacity-0">
            {word}{" "}
          </span>
        ))}
      </div>
    );
  };

  return <div className={cn("flex", className)}>{renderWords()}</div>;
};

export default Texteffects 