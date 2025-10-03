import "./Logo.css";
import { motion } from "motion/react";

export default function Logo({ className = "" }) {
  return (
    <div className={`logo ${className}`}>
      <motion.img
        initial={{ scale: 0.8, rotate: -10, x: 30, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        src="/logo/sanipro-logo.png"
        width={100}
        height={100}
        alt="logo"
      />
      <motion.span
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        sani
      </motion.span>
      <motion.span
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        pro
      </motion.span>
    </div>
  );
}
