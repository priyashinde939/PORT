import { useState } from "react";
import { motion } from "framer-motion";

const gridAreas = [
  
    "small1 small1 large",
    "small2 small2 large"
  ,
  
    "small1 large large",
    "small2 large large"
  ,
  
    "large large large",
    "small1 small2 small2"
  ,
];

const Services = () => {
  const [step, setStep] = useState(0);

  const handleGridClick = () => {
    setStep((prevStep) => (prevStep + 1) % 3);
  };

  return (
    <motion.div
      className="grid gap-4 p-4 cursor-pointer"
      style={{ gridTemplateAreas: gridAreas[step] }}
      layout
      transition={{ duration: 0.5 }}
      onClick={handleGridClick}
      aria-label="Click to change grid layout"
    >
      <motion.div
        className="bg-slate-400 p-4 rounded-xl"
        layout
        style={{ gridArea: "small1" }}
      >
        Small 1
      </motion.div>
      <motion.div
        className="bg-slate-300 p-4 rounded-xl"
        layout
        style={{ gridArea: "small2" }}
      >
        Small 2
      </motion.div>
      <motion.div
        className="bg-slate-300 p-4 rounded-xl"
        layout
        style={{ gridArea: "large" }}
      >
        Large
      </motion.div>
    </motion.div>
  );
};

export default Services;
 