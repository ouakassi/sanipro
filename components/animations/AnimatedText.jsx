import { motion } from "framer-motion";
import React from "react";

export default function AnimatedText({
  className,
  text,
  speed = 0.1,
  once = false,
  blur = true,
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => {
        return (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: -50,
              filter: blur ? "blur(15px)" : "blur(0px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { delay: i * speed },
            }}
            viewport={once ? { once: true } : {}}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}
