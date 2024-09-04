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
    <div style={{fontFamily: 'saira-Saira '}}
    className=" saira-Saira container mx-auto max-w-full sticky -top-[100vh] overflow-hidden ">
      <MarqueeItems texts={upperMarqueeTexts} from={0} to={"-100%"} />
      <MarqueeItems texts={lowerMarqueeTexts} from={"-100%"} to={0} />
    </div>
  );
};

export default FooterMarquee;
