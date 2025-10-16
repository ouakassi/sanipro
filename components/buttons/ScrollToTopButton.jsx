import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="scroll-to-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg viewBox="0 0 60 60" className="progress-svg">
        <circle cx="30" cy="30" r="25" pathLength="1" className="bg" />
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          pathLength="1"
          style={{ pathLength }}
          className="progress"
        />
      </svg>
      <span className="arrow">
        <FaArrowUp />
      </span>
    </motion.button>
  );
}
