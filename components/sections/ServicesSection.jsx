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
import BlurText from "../animations/AnimatedText";
import { BsArrow90DegDown, BsPhone } from "react-icons/bs";
import Button from "../buttons/Button";
import ButtonDoubleIcon from "../buttons/ButtonDoubleIcon";
import { IoCall } from "react-icons/io5";
import AnimatedText from "../animations/AnimatedText";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/data";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";

const services = [
  {
    title: "Plomberie",
    paragraph:
      "Notre équipe de plombiers qualifiés intervient rapidement pour tous vos problèmes de robinetterie, canalisations bouchées et installations sanitaires. Nous garantissons des réparations durables et des installations aux normes avec un service disponible 7j/7 pour les urgences.",
    image: "/services/plomberie.jpg", // replace with your actual path
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
    title: "Chauffe-eau ",
    paragraph:
      "Spécialistes en chauffage et production d'eau chaude, nous installons et remplaçons tous types d'équipements : chaudières gaz, chauffe-eau électriques et thermodynamiques. Installation sécurisée avec mise en service complète incluse.",
    image: "/services/chauffe-eau.jpg",
    icon: "/services/chauffe-eau-icon.png",
  },
  {
    title: "Carrelage",
    paragraph:
      "Pose professionnelle de carrelage pour sols et murs avec finitions impeccables. Nous travaillons tous matériaux : faïence, grès cérame, pierre naturelle. Préparation soignée des supports et étanchéité garantie dans les pièces humides.",
    image: "/services/carrelage.jpg",
    icon: "/services/carrelage-icon.png",
  },
  {
    title: "Salle de bain ",
    paragraph:
      "Rénovation complète de votre salle de bain de la conception à la finition. Notre service inclut la plomberie, l'électricité, le carrelage, la menuiserie et tous les équipements sanitaires pour un résultat harmonieux et fonctionnel.",
    image: "/services/salle-de-bain.jpg",
    icon: "/services/salle-de-bain-icon.png",
  },
  {
    title: "Parquet",
    paragraph:
      "Installation et rénovation de parquets massifs, contrecollés et stratifiés. Ponçage, vitrification et pose avec finitions soignées pour sublimer vos sols. Conseils personnalisés sur les essences et finitions adaptées à votre intérieur.",
    image: "/services/parquet.jpg",
    icon: "/services/parquet-icon.png",
  },
  {
    title: "Peinture",
    paragraph:
      "Travaux de peinture intérieure et extérieure avec préparation minutieuse des supports. Application de peintures de qualité pour un rendu durable et esthétique. Choix des teintes et finitions selon vos goûts et l'usage des pièces.",
    image: "/services/peinture.jpg",
    icon: "/services/peinture-icon.png",
  },
  {
    title: "Rénovation globale",
    paragraph:
      "Transformation complète de votre habitat avec coordination de tous les corps de métier. De la conception à la livraison, nous gérons votre projet dans son intégralité pour vous offrir un intérieur moderne et fonctionnel selon vos attentes.",
    image: "/services/renovation.jpg",
    icon: "/services/renovation-icon.png",
  },
  {
    title: "contactez-nous",
    paragraph: (
      <span className="call-us-slide">
        À Chaque Appel, Nous Réagissons Sans Délai, Pour Vous Offrir Une
        Assistance Rapide et Fiable
        <Link target="_blank" href={SOCIAL_LINKS.WHATSAPP}>
          <Button icon={<IoCall />} text="0611423116" className="call-btn" />
        </Link>
      </span>
    ),
    image: "/services/call-us.jpg",
    icon: "/services/contact.png",
  },
];

const miniservices = [
  {
    title: "Plomberie",
    paragraph:
      "Intervention rapide pour robinetterie, canalisations bouchées et installations sanitaires. Service d'urgence 7j/7.",
    icon: "/services/plomberie-icon.png",
  },
  {
    title: "Fuites",
    paragraph:
      "Détection et réparation efficace de toutes fuites grâce à nos équipements modernes. Intervention rapide garantie.",
    icon: "/services/fuites-icon.png",
  },
  {
    title: "Chauffage",
    paragraph:
      "Installation et remplacement de chaudières gaz, chauffe-eau électriques et thermodynamiques. Installation sécurisée.",
    icon: "/services/chauffe-eau-icon.png",
  },
  {
    title: "Carrelage",
    paragraph:
      "Pose professionnelle de carrelage sols et murs. Tous matériaux : faïence, grès cérame, pierre naturelle.",
    icon: "/services/carrelage-icon.png",
  },
  {
    title: "Bains",
    paragraph:
      "Rénovation complète : plomberie, électricité, carrelage, menuiserie. Résultat harmonieux et fonctionnel.",
    icon: "/services/salle-de-bain-icon.png",
  },
  {
    title: "Parquet",
    paragraph:
      "Installation et rénovation de parquets massifs, contrecollés et stratifiés. Ponçage et vitrification inclus.",
    icon: "/services/parquet-icon.png",
  },
  {
    title: "Peinture",
    paragraph:
      "Peinture intérieure et extérieure avec préparation minutieuse. Application de peintures de qualité.",
    icon: "/services/peinture-icon.png",
  },
  {
    title: "Rénovation",
    paragraph:
      "Transformation complète avec coordination de tous les corps de métier. Gestion de projet intégrale.",
    icon: "/services/renovation-icon.png",
  },
  {
    title: "contactez-nous",
    paragraph: (
      <Button text={CONTACT_INFO.TELE} className="call-btn" icon={<IoCall />} />
    ),
    icon: "/services/contact.png",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["400px", "0px"]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={
        !isMobile
          ? {
              scale,
              borderRadius,
              y,
            }
          : { scale: 1, borderRadius: "0px", y: 0 }
      }
      // ref={sectionRef}
      id="services"
      className="services-section"
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          nos Services
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Nos Services à Votre Portée
        </motion.h1>

        <motion.p>
          <AnimatedText
            text="Des interventions rapides, efficaces et de qualité pour tous vos
            besoins en plomberie et rénovation"
            speed={0.02}
            blur={false}
          />
        </motion.p>
      </motion.header>

      <div className="container slider-section">
        <CardsSlider items={services} />
      </div>
      <motion.div className="mini-services-container">
        {miniservices.map(({ icon, title, paragraph }, i) => (
          <motion.div key={title} className="service">
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
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 400,
                mass: 1,
                delay: 0.2,
              }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1 + 0.2,
                }}
                viewport={{ once: true }}
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
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: " 30px" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="services-wave "
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </motion.div>
    </motion.section>
  );
}

function CardsSlider({ items }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  // control autoplay based on visibility
  if (swiperRef.current) {
    if (isInView) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
  }

  return (
    <div ref={containerRef}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onInit={(swiper) => {
          // attach refs after init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="swiper-container"
      >
        {items.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              title={service.title}
              paragraph={service.paragraph}
              image={service.image}
            />
          </SwiperSlide>
        ))}

        {/* ✅ Put custom buttons once here */}

        {/* Autoplay progress indicator */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="swiper-button-prev-custom">
        <motion.button
          whileTap={{ scale: 0.9 }}
          ref={prevRef}
          className="btn-reset custom-prev"
        >
          <FaChevronCircleLeft size={32} />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          ref={nextRef}
          className="btn-reset custom-next"
        >
          <FaChevronCircleRight size={32} />
        </motion.button>
      </div>
    </div>
  );
}

const ServiceCard = ({ title, paragraph, image }) => {
  const cardRef = useRef();
  const isCardInView = useInView(cardRef, { amount: 0.9 });
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
            <AnimatedText text={title} />
          </h2>
          <p>{paragraph}</p>
          {/* <AnimatedText speed={0.01} blur={false} text={paragraph} /> */}
        </div>
      </motion.div>
    </motion.article>
  );
};
