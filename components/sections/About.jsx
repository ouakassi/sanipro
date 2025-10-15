"use client";

import { FaBolt, FaBriefcase, FaDollarSign, FaTools } from "react-icons/fa";
import CountUp from "../animations/CountUp";
import "./About.css";
import { motion } from "motion/react";
import Image from "next/image";
import MiniLogo from "../logo/MiniLogo";
import BlurText from "../animations/BlurText";
import ImageReveal from "../animations/ImageReveal";
import AnimatedHeader from "../animations/AnimatedHeader";

const stats = [
  {
    value: 500,
    label: "Projets réalisés",
    from: 100,
    icon: "/about/projects.png",
  },
  { value: 400, label: "Clients satisfaits", icon: "/about/clients.png" },
  { value: 20, label: "Années d’expérience", icon: "/about/experience.png" },
  // { value: "24h/7j", label: "Disponibilité", icon: "/about/clients.png" },
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

export const features = [
  {
    title: "Années d’Expérience",
    description:
      "Avec plus de 20 ans d’expérience, notre équipe qualifiée a relevé tous types de défis en plomberie et rénovation. Nous mettons à votre service notre savoir-faire et les techniques les plus modernes pour garantir des résultats fiables et durables.",
    icon: <FaTools />,
  },
  {
    title: "Service Rapide",
    description:
      "Les urgences ne peuvent pas attendre. Disponible 24h/24 et 7j/7, notre équipe intervient rapidement pour résoudre vos problèmes et limiter les désagréments. Réactivité et efficacité sont au cœur de notre engagement.",
    icon: <FaBolt />,
  },
  {
    title: "Tarifs Abordables",
    description:
      "Nous croyons en une tarification claire et équitable. Notre objectif est d’offrir un service de haute qualité au meilleur prix, pour que chacun puisse bénéficier de solutions professionnelles sans mauvaise surprise.",
    icon: <FaDollarSign />,
  },
];

const images = [
  "/about/image-1.jpg",
  "/about/image-2.jpg",
  "/about/image-3.jpg",
  "/about/image-4.jpg",
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <header>
          <h1>
            <AnimatedHeader speed={0.05}>
              <MiniLogo />
              votre
              <span className="color-orange">partenaire </span> de confiance en
              plomberie
            </AnimatedHeader>
          </h1>
        </header>

        <main>
          <div className="images">
            {images.map((src, index) => (
              <ImageReveal key={src}>
                <img src={src} alt={"image" + "1"} />
              </ImageReveal>
            ))}
          </div>
          <div className="features">
            {features.map(({ title, description, icon }, index) => (
              <Feature
                index={index}
                key={title}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>
        </main>
        <div className="counts-table">
          <CountData />
        </div>
      </div>
    </section>
  );
}

const CountData = () => (
  <div className="container card-background">
    <motion.div
      className="data-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Stats */}
      {stats.map((stat, i) => (
        <motion.div key={i} className="card" variants={cardVariants}>
          <>
            <div>
              <span>
                {typeof stat.value === "number" ? (
                  <span>
                    +
                    <CountUp
                      from={stat.from || stat.value - 200}
                      to={stat.value}
                      delay={0.2}
                      separator=","
                      duration={0.6}
                      className="count-up-text"
                    />
                  </span>
                ) : (
                  stat.value
                )}
              </span>
              <span>{stat.label}</span>
            </div>
          </>
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
);

const Feature = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="feature"
  >
    <motion.span
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="icon-container"
    >
      {icon}
    </motion.span>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </motion.div>
);
