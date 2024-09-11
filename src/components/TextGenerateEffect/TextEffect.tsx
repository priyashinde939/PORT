"use client";
import Marquee from "../Marquee/VerticalMarquee";
import ShootingStars from "../Stars/Stars";
import { TextGenerateEffect } from "./TextGenerateEffect";

const words = `ASTERON! TECH - The Worldwide Leader Helping People And Businesses Realize Their Full Potential.`;

export function TextEffect() {
  return (
    <div className="flex rounded-2xl items-center justify-center h-screen w-full bg-black text-white">
        
      <div className="text-center max-w-3xl px-4 md:px-8">
        
        <div className="text-lg md:text-xl leading-relaxed text-cyan-300 font-extralight italic pt-[6vw]">
          <ShootingStars />
          <TextGenerateEffect className="font-sans" words={words} />
        </div>
      </div>
    </div>
  );
}
