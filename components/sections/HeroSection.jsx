"use client";

import Image from "next/image";
import "./HeroSection.css";

import { BsCheckCircleFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMiniDocumentCurrencyEuro } from "react-icons/hi2";
import Button from "../buttons/Button";
import { FaClock } from "react-icons/fa";
import RotatingText from "../animations/RotatingText";
import { motion, AnimatePresence } from "motion/react";
import CountUp from "../animations/CountUp";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/data";

const services = [
  "Plomberie",
  "Fuites",
  "Chauffe-eau",
  "Carrelage",
  "Bains",
  "Parquet",
  "Peinture",
  "Rénovation",
];

const list = [
  "Intervention d’urgence 7j/7.",
  "Expertise certifiée.",
  "Service rapide et fiable.",
  "Qualité assurée.",
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 👈 delay between each <li>
    },
  },
};

// child animation
const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="hero"
      className="hero-section"
    >
      <div className="container hero-container">
        <motion.div className="content">
          <motion.h2>
            <FaClock />
            Disponibilité 24h/24 et 7j/7
          </motion.h2>
          {/* <h1>Plomberie & Rénovation </h1> */}
          <motion.h1>
            Votre Expert de Confiance en{" "}
            <RotatingText
              texts={services}
              mainClassName="header-container"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.02}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h1>

          {/* <p>
            Nous intervenons 24h/24 et 7j/7 pour vos urgences de plomberie et
            vos projets de rénovation. Détection de fuites, remplacement de
            chauffe-eau, carrelage, peinture, parquet ou salle de bain clé en
            main — nous vous offrons des solutions rapides, durables et de
            qualité.
          </p> */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
          >
            {list.map((text, i) => (
              <motion.li key={i} variants={itemVariants}>
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <BsCheckCircleFill size={20} />
                </motion.span>
                {text}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className="call-to-action-btns">
            <Link href="#contact">
              <Button
                icon={<HiMiniDocumentCurrencyEuro />}
                text="devis gratuit"
              />
            </Link>
            <Link target="_blank" href={SOCIAL_LINKS.WHATSAPP}>
              <Button icon={<BsFillTelephoneFill />} text="Nous contacter" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="hero-image-container">
          <motion.div
            initial={{ clipPath: "circle(0% at 50% 0%)" }}
            animate={{ clipPath: "circle(100% at 50% 50%)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            // variants={itemVariants}
          >
            <span></span>
            <Image
              alt="worker"
              src={"/hero/hero.png"}
              width="1200"
              height="900"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
