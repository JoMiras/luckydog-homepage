import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 70,
        left: 0, 
        width: "100%",
        height: "5px", // Adjust the height as needed
        backgroundColor: "teal", // Customize the color as needed
        transformOrigin: "left", // Ensure scaling happens from the left side
        scaleX: scrollYProgress,
        zIndex: -9999,
      }}
    />
  );
};

export default ProgressBar;
