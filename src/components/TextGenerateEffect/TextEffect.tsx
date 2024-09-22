"use client";
import ShootingStars from "../Stars/Stars";
import { TextGenerateEffect } from "./TextGenerateEffect";

const words = `ASTERON! TECH - The Worldwide Leader Helping People And Businesses Realize Their Full Potential.`;

export function TextEffect() {
  return (
    <div className="flex rounded-2xl items-center justify-center h-[100vh] w-[100vw] bg-black text-white">
        
      <div className="text-center px-4 md:px-8  ">
        
        <div className="text-[1.5vw] leading-relaxed text-cyan-300 font-extralight italic ">
          <ShootingStars />
          <TextGenerateEffect className="font-sans" words={words} />
        </div>
      </div>
    </div>
  );
}
