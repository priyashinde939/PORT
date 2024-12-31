import { useEffect, useRef } from 'react';
import { calculateProgress } from '../utils/animationUtils';

export const useSignatureAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wordRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const word = wordRef.current;
    const dot = dotRef.current;
    if (!word || !dot || !svgRef.current) return;

    const wordLength = word.getTotalLength();
    const dotLength = dot.getTotalLength();

    // Initialize paths
    word.style.strokeDasharray = `${wordLength}`;
    word.style.strokeDashoffset = `${wordLength}`;
    dot.style.strokeDasharray = `${dotLength}`;
    dot.style.strokeDashoffset = `${dotLength}`;

    const handleScroll = () => {
      const progress = calculateProgress(svgRef.current!);
      
      // Animate word (0-90% of progress)
      const wordProgress = Math.min(progress * 1.1, 1);
      word.style.strokeDashoffset = `${wordLength * (1 - wordProgress)}`;
      
      // Animate dot (90-100% of progress)
      const dotProgress = Math.max(0, (progress - 0.9) * 10);
      dot.style.strokeDashoffset = `${dotLength * (1 - dotProgress)}`;
      
      // Color transition
      const color = `rgb(51, 98, ${Math.floor(156 * progress)})`;
      word.style.stroke = color;
      dot.style.stroke = color;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { svgRef, wordRef, dotRef };
};