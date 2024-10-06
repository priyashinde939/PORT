import React from 'react'
import {motion} from 'framer-motion'



const Blank = () => {
  return (
    <div className="flex h-[100vh] bg-[#000000] justify-center items-center">
      {/* <motion.div
      layout
      className="h-10 w-10"
      animate={{
        borderRadius: ["0%", "50%", "0%", "50%", "0%"],
        background: [
          "#ffffff56",
          "#84f26a56",
          "#ffffff56",
          "#ff7e7e56",
          "#ffffff56",
        ],
        border: [
          "2px solid #ffffff",
          "4px solid #84f26a",
          "2px solid #ffffff",
          "4px solid #ff7e7e",
          "2px solid #ffffff",
        ],
        transform: [
          "translateX(0px) scale(0.8) rotate(0deg)",
          "translateX(20px) scale(1.5) rotate(45deg)",
          "translateX(0px) scale(0.8) rotate(0deg)",
          "translateX(-20px) scale(1.5) rotate(-45deg)",
          "translateX(0px) scale(0.8) rotate(0deg)",
        ],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
      />   */}

{/* -------------------------------------------------------------------------------- */}


<motion.div
  layout
  className="h-10 w-10 absolute bg-white"
  animate={{
    opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 1, 0.5],
    background: [
      "#ffffff56",
      "#84f26a56",
      "#ffffff56",
      "#ff7e7e56",
      "#ffffff56",
      "#84f26a56",
      "#ffffff56",
      "#ff7e7e56",
      "#ffffff56",
    ],
    border: [
      "2px solid #ffffff",
      "4px solid #84f26a",
      "2px solid #ffffff",
      "4px solid #ff7e7e",
      "2px solid #ffffff",
      "4px solid #84f26a",
      "2px solid #ffffff",
      "4px solid #ff7e7e",
      "2px solid #ffffff",
    ],
    borderRadius: ["0%", "50%", "0%", "50%", "0%", "50%", "0%", "50%", "0%"],
    transform: [
      "translate(-80px, 80px) scale(1) rotate(0deg)",
      "translate(-80px, 80px) scale(1) rotate(0deg)",
      "translate(-40px, 40px) scale(1) rotate(90deg)",
      "translate(0px, 0px) scale(1) rotate(180deg)",
      "translate(40px, -40px) scale(1) rotate(270deg)",
      "translate(80px, -80px) scale(1) rotate(360deg)",
      "translate(80px, 80px) scale(1) rotate(360deg)",
      "translate(80px, 80px) scale(1) rotate(360deg)",
      "translate(-80px, 80px) scale(1) rotate(0deg)",
    ],
  }}
  transition={{
    duration: 7.5,
    ease: "backInOut",
    times: [0, 0.125, 0.25, 0.35, 0.425, 0.475, 0.55, 0.68, 0.81, 0.88],
    repeat: Infinity,
    repeatDelay: 1,
  }}
/>


{[0, 1, 2, 3, 4].map((n) => (
  <motion.div
    key={`keyframes-example-3-${n}`}
    layout
    className="h-1.5 w-10 absolute bg-white"
    animate={{
      transform: [
        `translate(${-80 + n * 40}px, 102px)`,
        `translate(${-80 + n * 40}px, ${102 - n * 40}px)`,
        `translate(${-80 + n * 40}px, ${102 - n * 40}px)`,
        `translate(${-80 + n * 40}px, 102px)`,
      ],
    }}
    transition={{
      duration: 7.5,
      ease: "backInOut",
      times: [0.05, 0.1, 0.65, 0.73],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
))}





    </div>
  )
}

export default Blank