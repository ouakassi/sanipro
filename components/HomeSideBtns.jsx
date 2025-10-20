"use client";
import React from "react";
import WhatsappBtn from "./buttons/WhatsappBtn";
import ScrollToTop from "./buttons/ScrollToTopButton";
import "./HomeSideBtns.css";
import ContactSideBtn from "./buttons/ContactSideBtn";
import { motion } from "motion/react";

export default function HomeSideBtns() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20,
        delayChildren: 0.3,
      }}
      className="home-side-btns"
    >
      <ScrollToTop />
      <WhatsappBtn />
      <ContactSideBtn />
    </motion.div>
  );
}
