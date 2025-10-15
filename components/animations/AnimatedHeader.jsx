import { motion } from "framer-motion";
import React from "react";

export default function AnimatedHeader({
  children,
  className,
  speed = 0.05,
  once = false,
  blur = true,
}) {
  const renderAnimated = (child, i) => {
    // If child is a string, split into letters
    if (typeof child === "string") {
      return child.split("").map((char, j) => (
        <motion.span
          key={`${i}-${j}`}
          initial={{
            opacity: 0,
            y: -40,
            filter: blur ? "blur(10px)" : "blur(0px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: (i * 5 + j) * speed },
          }}
          viewport={once ? { once: true } : {}}
        >
          {char}
        </motion.span>
      ));
    }

    // If child is an element (like <span> or <MiniLogo />)
    return (
      <motion.span
        key={i}
        initial={{
          opacity: 0,
          y: -30,
          filter: blur ? "blur(8px)" : "blur(0px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay: i * speed * 10 },
        }}
        viewport={once ? { once: true } : {}}
        style={{ display: "inline-block" }}
      >
        {child}
      </motion.span>
    );
  };

  // Handle all children (string parts + React elements)
  return (
    <span className={className}>
      {React.Children.map(children, renderAnimated)}
    </span>
  );
}
