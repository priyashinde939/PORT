export const calculateProgress = (element: HTMLElement | SVGElement): number => {
  const rect = element.getBoundingClientRect();
  const triggerPosition = window.innerHeight * 0.4;   // was 0.5
  const elementCenter = rect.top + rect.height * 0.5;  
  // Calculate progress based on element position
  const progress = Math.max(0, Math.min(1, 
    1 - (elementCenter - triggerPosition) / (window.innerHeight * 0.5)
  ));
  
  return progress;
};