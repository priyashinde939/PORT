import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedGrid.module.css";

const gridAreas = {
  initial: `
    "small1 small1 large"
    "small2 small2 large"
  `,
  intermediate: `
    "small1 large large"
    "small2 large large"
  `,
  final: (clickedSection: string) => {
    if (clickedSection === "small1") {
      return `
        "small1 small1 small2"
        "small1 small1 large"
      `;
    } else if (clickedSection === "small2") {
      return `
        "small2 small2 small1"
        "small2 small2 large"
      `;
    } else {
      return `
        "large large small1"
        "large large small2"
      `;
    }
  }
};

const AnimatedGrid = () => {
  const [step, setStep] = useState(0);
  const [clickedSection, setClickedSection] = useState("large");

  const handleGridClick = (section: string) => {
    setClickedSection(section);
    setStep((prevStep) => (prevStep + 1) % 3);
  };

  const getGridArea = () => {
    if (step === 2) {
      return gridAreas.final(clickedSection);
    } else if (step === 1) {
      return gridAreas.intermediate;
    }
    return gridAreas.initial;
  };

  return (
    <motion.div
      className={styles.gridContainer}
      style={{ gridTemplateAreas: getGridArea() }}
      layout
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.gridItem}
        layout
        style={{ gridArea: "small1" }}
        onClick={() => handleGridClick("small1")}
      >
        Digital Marketing Program Execution
      </motion.div>
      <motion.div
        className={styles.gridItem}
        layout
        style={{ gridArea: "small2" }}
        onClick={() => handleGridClick("small2")}
      >
        Go-To-Market Strategy & Integration
      </motion.div>
      <motion.div
        className={styles.largeItem}
        layout
        style={{ gridArea: "large" }}
        onClick={() => handleGridClick("large")}
      >
        Creative & Content Development
      </motion.div>
    </motion.div>
  );
};

export default AnimatedGrid;
