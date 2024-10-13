// FaqCard.tsx

import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { SkillSlider } from "@/components/Slider/SkillSlider";
import { SkillMarquee } from "../SkillMarquee";

interface FaqCardProps {
  data: {
    textHead: string;
    textMsg: string;
    textDesc: string;
  };
}

const Skill = ({ data }: FaqCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverControls = useAnimation();

  const handleHover = () => {
    hoverControls.start("animate");
    setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleLeave = () => {
    hoverControls.start("initial");
    setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleLeave()}
      className="w-full h-32  overflow-hidden   flex lg:flex-row flex-col justify-center lg:justify-between items-center relative cursor-pointer"
    >
<motion.div
        animate={hoverControls}
        initial={"initial"}
        variants={{
          initial: {
            color: "#000",
          },
          animate: {
            color: "#FFFFFF",
          },
        }}
        className=" w-full px-10 flex lg:flex-row flex-col justify-center lg:items-center relative z-40"
      >
        <div className="flex justify-between lg:justify-center items-center gap-4">
          <motion.p
            animate={hoverControls}
            initial={"initial"}
            variants={{
              initial: {
                y: 0,
              },
              animate: {
                y: -120,
              },
            }}
            className=" font-black text-lg xl:text-3xl"
            transition={transition}
          >
            {data.textMsg}
          </motion.p>



          {/* <motion.div
            animate={hoverControls}
            initial={"initial"}
            variants={{
              initial: {
                rotate: 0,
              },
              animate: {
                rotate: 90,
              },
            }}
          >
            <Image
              src={
                isHovered 
                  ? "/images/topright.png"
                  : "/images/bottomright.png"
              }
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 lg:w-6 lg:h-6  "
            />
          </motion.div> */}
        </div>
      </motion.div>

      <motion.div
        animate={hoverControls}
        initial={"initial"}
        variants={{
          initial: {
            y: 140,
            opacity: 0,
          },
          animate: {
            y: -0,
            opacity: 1,
          },
        }}
        transition={transition}
        className="w-full h-32 absolute flex justify-center lg:justify-center md:justify-start px-10 lg:pr-20 md:pt-10 items-center lg:pt-0 text-[#e8e7e6] bg-[#060c1d]"
      >
        {" "}
        <p className="lg:w-auto text-xl xl:text-2xl text-center font-medium"> {data.textDesc}</p>
        {/* <SkillSlider /> */}
        {/* <SkillMarquee /> */}
      </motion.div>
    </div>
  );
};

export default Skill;
