import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0); // Initialize with 0 instead of window.scrollY
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    // Set initial scroll position after mount
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg?.querySelector('path') as SVGPathElement;
    const pathLength = path?.getTotalLength() || 0;

    if (path) {
      path.style.strokeDasharray = `${pathLength}`;
      pathRef.current = path;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (pathRef.current) {
            pathRef.current.style.strokeDashoffset = entry.isIntersecting
              ? scrollDirection === 'down' ? '0' : `${pathLength}`
              : scrollDirection === 'down' ? `${pathLength}` : '0';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (svg) {
      observer.observe(svg);
    }

    return () => {
      if (svg) {
        observer.unobserve(svg);
      }
    };
  }, [scrollDirection]);

  return { svgRef, isVisible, scrollDirection };
};