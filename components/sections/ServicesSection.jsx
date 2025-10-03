"use client";

import "./ServicesSection.css";
import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import BlurText from "../animations/BlurText";
import { BsArrow90DegDown, BsPhone } from "react-icons/bs";
import Button from "../buttons/Button";
import ButtonDoubleIcon from "../buttons/ButtonDoubleIcon";
import { IoCall } from "react-icons/io5";
import AnimatedText from "../animations/BlurText";

const services = [
  {
    title: "Plomberie",
    paragraph:
      "Notre équipe de plombiers qualifiés intervient rapidement pour tous vos problèmes de robinetterie, canalisations bouchées et installations sanitaires. Nous garantissons des réparations durables et des installations aux normes avec un service disponible 7j/7 pour les urgences.",
    image: "/services/plomberie.png", // replace with your actual path
    icon: "/services/plomberie-icon.png", // replace with your actual path
  },
  {
    title: "Fuites",
    paragraph:
      "Grâce à nos équipements de détection modernes, nous localisons et réparons efficacement toutes les fuites, même les plus discrètes. Notre intervention rapide vous évite des dégâts importants et des factures d'eau élevées.",
    image: "/services/fuites.png",
    icon: "/services/fuites-icon.png",
  },
  {
    title: "Chauffe-eau & Chaudière",
    paragraph:
      "Spécialistes en chauffage et production d'eau chaude, nous installons et remplaçons tous types d'équipements : chaudières gaz, chauffe-eau électriques et thermodynamiques. Installation sécurisée avec mise en service complète incluse.",
    image: "/services/chauffe-eau.png",
    icon: "/services/chauffe-eau-icon.png",
  },
  {
    title: "Carrelage",
    paragraph:
      "Pose professionnelle de carrelage pour sols et murs avec finitions impeccables. Nous travaillons tous matériaux : faïence, grès cérame, pierre naturelle. Préparation soignée des supports et étanchéité garantie dans les pièces humides.",
    image: "/services/carrelage.png",
    icon: "/services/carrelage-icon.png",
  },
  {
    title: "Salle de bain clé en main",
    paragraph:
      "Rénovation complète de votre salle de bain de la conception à la finition. Notre service inclut la plomberie, l'électricité, le carrelage, la menuiserie et tous les équipements sanitaires pour un résultat harmonieux et fonctionnel.",
    image: "/services/salle-de-bain.png",
    icon: "/services/salle-de-bain-icon.png",
  },
  {
    title: "Parquet",
    paragraph:
      "Installation et rénovation de parquets massifs, contrecollés et stratifiés. Ponçage, vitrification et pose avec finitions soignées pour sublimer vos sols. Conseils personnalisés sur les essences et finitions adaptées à votre intérieur.",
    image: "/services/parquet.png",
    icon: "/services/parquet-icon.png",
  },
  {
    title: "Peinture",
    paragraph:
      "Travaux de peinture intérieure et extérieure avec préparation minutieuse des supports. Application de peintures de qualité pour un rendu durable et esthétique. Choix des teintes et finitions selon vos goûts et l'usage des pièces.",
    image: "/services/peinture.png",
    icon: "/services/peinture-icon.png",
  },
  {
    title: "Rénovation globale",
    paragraph:
      "Transformation complète de votre habitat avec coordination de tous les corps de métier. De la conception à la livraison, nous gérons votre projet dans son intégralité pour vous offrir un intérieur moderne et fonctionnel selon vos attentes.",
    image: "/services/renovation.png",
    icon: "/services/renovation-icon.png",
  },
  {
    title: "contactez-nous",
    paragraph: <Button text="0611423116" />,
    image: "/services/renovation.png",
    icon: "/services/contact.png",
  },
];

const miniservices = [
  {
    title: "Plomberie",
    paragraph:
      "Intervention rapide pour robinetterie, canalisations bouchées et installations sanitaires. Service d'urgence 7j/7.",
    image: "/services/plomberie.png",
    icon: "/services/plomberie-icon.png",
  },
  {
    title: "Fuites",
    paragraph:
      "Détection et réparation efficace de toutes fuites grâce à nos équipements modernes. Intervention rapide garantie.",
    image: "/services/fuites.png",
    icon: "/services/fuites-icon.png",
  },
  {
    title: "Chauffe-eau & Chaudière",
    paragraph:
      "Installation et remplacement de chaudières gaz, chauffe-eau électriques et thermodynamiques. Installation sécurisée.",
    image: "/services/chauffe-eau.png",
    icon: "/services/chauffe-eau-icon.png",
  },
  {
    title: "Carrelage",
    paragraph:
      "Pose professionnelle de carrelage sols et murs. Tous matériaux : faïence, grès cérame, pierre naturelle.",
    image: "/services/carrelage.png",
    icon: "/services/carrelage-icon.png",
  },
  {
    title: "Salle de bain clé en main",
    paragraph:
      "Rénovation complète : plomberie, électricité, carrelage, menuiserie. Résultat harmonieux et fonctionnel.",
    image: "/services/salle-de-bain.png",
    icon: "/services/salle-de-bain-icon.png",
  },
  {
    title: "Parquet",
    paragraph:
      "Installation et rénovation de parquets massifs, contrecollés et stratifiés. Ponçage et vitrification inclus.",
    image: "/services/parquet.png",
    icon: "/services/parquet-icon.png",
  },
  {
    title: "Peinture",
    paragraph:
      "Peinture intérieure et extérieure avec préparation minutieuse. Application de peintures de qualité.",
    image: "/services/peinture.png",
    icon: "/services/peinture-icon.png",
  },
  {
    title: "Rénovation globale",
    paragraph:
      "Transformation complète avec coordination de tous les corps de métier. Gestion de projet intégrale.",
    image: "/services/renovation.png",
    icon: "/services/renovation-icon.png",
  },
  {
    title: "Contactez-nous",
    paragraph: (
      <Button text="+33 611 231 314" className="call-btn" icon={<IoCall />} />
    ),
    image: "/services/renovation.png",
    icon: "/services/contact.png",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef();
  const cardRef = useRef();

  const isSectionInView = useInView(sectionRef, {
    amount: 0.1,
    margin: "20px",
  });
  const isCardInView = useInView(cardRef, {
    amount: 0.2,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log("current : ", sectionRef.current);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = sectionRef.scrollY;

      console.log(currentScrollY);

      // Hide header when scrolled down, show when at top
      if (currentScrollY > 0) {
        setIsVisible(false);
      }
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={
        isSectionInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              borderRadius: "10px",
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            }
          : {
              opacity: 0.7,
              y: 50,
              scale: 0.95,
              borderRadius: "40px",
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }
      }
      id="services"
      className="services-section"
    >
      <div className="servicess">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={
            isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={
              isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            nos Services
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={
              isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Nos Services à Votre Portée
          </motion.h1>

          <motion.p>
            {isSectionInView && (
              <AnimatedText
                text="Des interventions rapides, efficaces et de qualité pour tous vos
            besoins en plomberie et rénovation"
                speed={0.02}
                blur={false}
              />
            )}
          </motion.p>
        </motion.header>

        <motion.div className="servicess-container">
          {miniservices.map(({ icon, title, paragraph }, i) => (
            <motion.div
              ref={cardRef}
              key={title}
              className="service"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={
                isSectionInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }
                  : {
                      opacity: 0,
                      y: 40,
                      scale: 0.9,
                      transition: {
                        duration: 0.3,
                        delay: (miniservices.length - i) * 0.1,
                      },
                    }
              }
            >
              <motion.span
                className="icon-container"
                initial={{
                  y: -30,
                  opacity: 0,
                  scale: 0.3,
                  rotate: -10,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={
                  {
                    // once: true,
                    // amount: 1,
                  }
                }
                transition={{
                  type: "spring",
                  damping: 12, // More bounce for water effect
                  stiffness: 400,
                  mass: 1,
                  delay: 0.2, // Slight delay for better timing
                }}
                // Add a subtle secondary animation
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <img src={icon} alt="" />
              </motion.span>

              <motion.div
                className="service-content"
                initial={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.3,
                    delay: (miniservices.length - i) * 0.02,
                  },
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.1 + 0.1,
                    ease: "easeOut",
                  },
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1 + 0.2,
                  }}
                >
                  {title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1 + 0.3,
                  }}
                >
                  {paragraph}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

const ServiceCard = ({ title, paragraph, image, icon }) => {
  const cardRef = useRef();
  const isCardInView = useInView(cardRef, { amount: 0.8 });
  return (
    <motion.article
      ref={cardRef}
      animate={isCardInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.div
        animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6 }}
        className="service"
      >
        <motion.div
          animate={
            isCardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.1 }}
          className="img-container"
        >
          <Image
            className="img"
            src={image}
            alt={title}
            width={20}
            height={20}
            unoptimized
          />
        </motion.div>
        <div className="content">
          <h2>
            <BlurText text={title} />
          </h2>
          <div>
            <BlurText speed={0.01} blur={false} text={paragraph} />
          </div>
        </div>
      </motion.div>
      <motion.span
        animate={
          isCardInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: 300 }
        }
        transition={{ delay: 0.4 }}
        className="icon"
      >
        <Image
          src={icon}
          width={80}
          height={80}
          unoptimized
          alt={title + " icon"}
        />
      </motion.span>
    </motion.article>
  );
};

<div className="container services-section">
  {/* <header>
          <h1>Nos Services à Votre Portée</h1>

          <p>
            Des interventions rapides, efficaces et de qualité pour tous vos
            besoins en plomberie et rénovation
          </p>
        </header> */}
  <div className="services-content">
    {/* <h1>all what you need in one place</h1> */}

    {/* <motion.div className="services-container">
            {services.map(({ title, paragraph, image, icon }) => (
              <ServiceCard
                key={title}
                title={title}
                paragraph={paragraph}
                image={image}
                icon={icon}
              />
            ))}
          </motion.div> */}
  </div>
</div>;
