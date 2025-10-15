import { motion } from "motion/react";
import React from "react";

export default function ImageReveal({
  children,
  withHover = false,
  whileTap = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ amount: 0.6 }}
      whileHover={
        withHover ? { scale: 1.05, transition: { duration: 0.2 } } : null
      }
      whileTap={{ scale: whileTap ? 0.95 : null }}
    >
      {children}
    </motion.div>
  );
}
