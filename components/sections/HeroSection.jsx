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

const services = [
  "Plomberie",
  "Réparation de Fuites",
  "Chauffe-eau",
  "Carrelage",
  "Salle de Bain clé en main",
  "Parquet",
  "Peinture",
  "Rénovation",
];

const stats = [
  { value: 500, label: "Projets réalisés", from: 100 },
  { value: 400, label: "Clients satisfaits" },
  { value: 20, label: "Années d’expérience" },
  { value: "24h/7j", label: "Disponibilité" },
];

const screws = ["one", "two", "three", "four"];

const containerVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.4, // 👈 cards animate one by one
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

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
      staggerChildren: 0.25, // 👈 delay between each <li>
    },
  },
};

// child animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="container hero">
        <div className="content">
          <h2>
            <FaClock />
            Disponibilité 24h/24 et 7j/7
          </h2>
          {/* <h1>Plomberie & Rénovation </h1> */}
          <h1>
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
          </h1>

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
            viewport={{ once: true, amount: 0.3 }}
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {list.map((text, i) => (
              <motion.li key={i} variants={itemVariants}>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.25 }}
                >
                  <BsCheckCircleFill size={20} />
                </motion.span>
                {text}
              </motion.li>
            ))}
          </motion.ul>
          <div className="call-to-action-btns">
            <Button
              icon={<HiMiniDocumentCurrencyEuro />}
              text="devis gratuit"
            />
            <Button icon={<BsFillTelephoneFill />} text="Nous contacter" />
          </div>
        </div>
        <div className="hero-image-container">
          <div>
            <span></span>
            <Image
              alt="worker"
              src={"/hero/hero.webp"}
              width="1200"
              height="900"
            />
          </div>
        </div>

        <motion.div
          className="data"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stats */}
          {stats.map((stat, i) => (
            <motion.div key={i} className="card" variants={cardVariants}>
              <span>
                {typeof stat.value === "number" ? (
                  <>
                    +
                    <CountUp
                      from={stat.from || stat.value - 80}
                      to={stat.value}
                      delay={0.4}
                      separator=","
                      duration={1.5}
                      className="count-up-text"
                    />
                  </>
                ) : (
                  stat.value
                )}
              </span>
              <span>{stat.label}</span>
            </motion.div>
          ))}

          {/* Screws */}
          {screws.map((pos, i) => (
            <motion.img
              key={i}
              src="/hero/screw.svg"
              alt=""
              className={`screw-icon screw-${pos}`}
              initial={{
                rotate: 0,
                scale: 1.2,
                filter: "drop-shadow(black 1px 1px 4px)",
              }}
              whileInView={{
                rotate: 360,
                scale: 1,
                color: "white",
                filter: "unset",
              }}
              transition={{
                duration: 0.8,
                delay: 0.8 + i * 0.4, // stagger screws
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

<div>
  <div>
    <span>icon</span>
    <h2>Équipe hautement qualifiée</h2>
    <p>
      Des plombiers certifiés, expérimentés et en formation continue pour
      garantir un service irréprochable.
    </p>
  </div>
  <div>
    <span>icon</span>
    <h2>Rapide et fiable</h2>
    <p>
      Intervention efficace et soignée, 24h/24 et 7j/7, avec des délais
      respectés.
    </p>
  </div>
  <div>
    <span>icon</span>
    <h2>Travail de qualité</h2>
    <p>
      Des prestations solides et durables pour vos réparations comme pour vos
      rénovations complètes.
    </p>
  </div>
</div>;

<h1>Des experts depuis 2001 || Building our reputation since 2001.</h1>;
