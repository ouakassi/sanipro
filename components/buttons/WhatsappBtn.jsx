"use client";

import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./WhatsappBtn.css";
import { SOCIAL_LINKS } from "@/data/data";
import { motion } from "motion/react";

export default function WhatsappBtn() {
  return (
    <Link target="_blank" href={SOCIAL_LINKS.WHATSAPP}>
      <motion.button
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="btn-reset wtsp-btn"
      >
        <BsWhatsapp />
      </motion.button>
    </Link>
  );
}
