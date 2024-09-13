import React from "react";
import MarqueeItems from "./FooterMarqueeItems";

const FooterMarquee: React.FC = () => {
  const upperMarqueeTexts = [
    "LET'S TURN YOUR VISION INTO REALITY",
  
  ];

  const lowerMarqueeTexts = [
    "LET'S TURN YOUR VISION INTO REALITY",
  ];

  return (
    <div 
    className=" container mx-auto max-w-full sticky bottom-0 overflow-hidden font-day">
      <MarqueeItems texts={upperMarqueeTexts} from={0} to={"-100%"} />
      <MarqueeItems texts={lowerMarqueeTexts} from={"-100%"} to={0} />
    </div>
  );
};

export default FooterMarquee;
