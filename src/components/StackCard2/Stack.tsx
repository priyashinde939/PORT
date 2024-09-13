//Stack.tsx
'use client';

import StackCard from './StackCard';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import styles from './Stack.module.scss';

// Define the type for each project
interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

// Array of projects with type annotations
const projects: Project[] = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "mid.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "black"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes.",
    src: "mid.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "white"
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "mid.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "white"
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold.",
    src: "mid.jpg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "white"
  },
  {
    title: "Mark Rammers",
    description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project.",
    src: "mid.jpg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "black"
  }
];

export default function Stack() {
  // Explicitly type the container ref
  const container = useRef<HTMLElement | null>(null);
  
  // Use Framer Motion's scroll progress hook
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Clean up the effect
    return () => lenis.destroy();
  }, []);



  // useEffect(() => {
  //   // Initialize Lenis with custom settings
  //   const lenis = new Lenis({
  //     duration: 3, // Adjust the duration to control scroll speed (higher means slower)
  //     // smooth: true, // Enable smooth scrolling
  //     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time); // Request animation frame for Lenis
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   // Cleanup on component unmount
  //   return () => lenis.destroy();
  // }, []);



  return (
    <section className={`${styles.section}`}
    ref={container}>
        {projects.map((project, i) => {
          const isSecondLastCard = i === projects.length - 2; // Second last card
          const targetScale = 1 - ((projects.length - i) * 0.04); 
          const targetOpacity = isSecondLastCard ? 0 : 1 - ((projects.length - 1.5 - i) * 1.2);
          // const targetScale = 1 - ((projects.length - i) * 0.05);
          // const targetOpacity = 1 - ((projects.length - 0.9 - i) * 0.9);

    
          const adjustedRange = isSecondLastCard 
            ? [(i * 0.25), 0.99] // This will fade out the second-last card earlier
            : [i * 0.25, 1]; // Original range for other cards
    
        return (
          <StackCard 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            // range={[i * 0.25, 1]} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale} 
            targetOpacity={targetOpacity} 
          />
        );
      })}
    </section>
  );
}
//

