import { motion } from "motion/react";
import "./MiniLogo.css";

export default function MiniLogo({ dark }) {
  return (
    <motion.span
      style={
        dark ? { background: "linear-gradient(45deg, #ffb187, #ffffff)" } : {}
      }
      initial={{ opacity: 0, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mini-logo"
    >
      <b>SANI</b>
      <b>PRO</b>
    </motion.span>
  );
}
