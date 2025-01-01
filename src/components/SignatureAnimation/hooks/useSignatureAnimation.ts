import { useEffect, useRef } from 'react';
import { calculateProgress } from '../utils/animationUtils';

export const useSignatureAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line || !svgRef.current) return;

    const lineLength = line.getTotalLength();

    // Initialize path
    line.style.strokeDasharray = `${lineLength}`;
    line.style.strokeDashoffset = `${lineLength}`;

    const handleScroll = () => {
      const progress = calculateProgress(svgRef.current!);
      
      // Animate line
      line.style.strokeDashoffset = `${lineLength * (1 - progress)}`;
      
      // Color transition
      const color = `rgb(51, 98, ${Math.floor(156 * progress)})`;
      line.style.stroke = color;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { svgRef, lineRef };
};