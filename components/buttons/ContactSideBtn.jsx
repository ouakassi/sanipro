"use client";
import { IoCall } from "react-icons/io5";
import "./ContactSideBtn.css";
import Link from "next/link";
import { motion } from "motion/react";

export default function ContactSideBtn() {
  return (
    <Link href="/#devis">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className=" btn-reset contact-side-btn"
      >
        <IoCall />
      </motion.button>
    </Link>
  );
}
