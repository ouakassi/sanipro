"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Logo from "../logo/Logo";
import "./PreLoader.css";

export default function Preloader({ children }) {
  const delay = 0.2; // time between layers

  return (
    <AnimatePresence>
      <div className="pre-loader">
        {/* <motion.div
          className="page orange-page"
          initial={{ top: 0 }}
          animate={{ top: "-100vh" }}
          transition={{ delay: delay, duration: 0.2, ease: "easeInOut" }}
        /> */}
        {/* <motion.div
          className="page bleu-page"
          initial={{ top: 0 }}
          animate={{ left: "-100vw" }}
          transition={{ delay: delay * 2, duration: 0.2, ease: "easeInOut" }}
        /> */}
        <motion.div
          className="page black-page"
          animate={{ bottom: "100vh" }}
          transition={{ delay: delay * 8, duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 1.5 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: delay * 2, duration: 0.4, ease: "easeInOut" }}
            className="logo-wrapper"
          >
            <Logo className="logo" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
