"use client";

import { motion, useScroll, useTransform } from "motion/react";
import "./CallUsSection.css";

import Button from "@/components/buttons/Button";
import { useEffect, useRef } from "react";
import { HiMiniDocumentCurrencyEuro } from "react-icons/hi2";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/data";
import AnimatedHeader from "../animations/AnimatedHeader";
import MiniLogo from "../logo/MiniLogo";

const images = [
  {
    src: "/call-us/image-1.jpg",
    alt: "Plombier professionnel en action",
  },
  {
    src: "/call-us/image-3.jpg",
    alt: "Plombier réparant une fuite",
  },
];

export default function CallUsSection() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "start start"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (v) => console.log("progress:", v));
  }, [scrollYProgress]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

  return (
    <section className="call-us-section" id="call-us">
      <div className="container call-us-container">
        <div className="imgs-container">
          {images.map(({ src, alt }, index) => (
            <motion.div
              style={{ scale, opacity, rotate }}
              className="img-wrapper"
              key={index}
            >
              <motion.img
                ref={imgRef}
                src={src}
                alt={alt}
                className="img-style"
              />
            </motion.div>
          ))}
        </div>
        <div className="content">
          {/* <h1>Nous Répondons Rapidement à Votre Appel</h1> */}
          <h1>
            <AnimatedHeader speed={0.05}>
              <MiniLogo /> Répond Rapidement À Chacun de
              <span className="color-orange">Vos Appels</span>
            </AnimatedHeader>
          </h1>
          <p>
            Faites confiance à nos plombiers qualifiés et à la qualité
            professionnelle de notre travail. Chaque technicien Sanipro,
            identifié et expérimenté, intervient chez vous avec sérieux et
            efficacité.
          </p>
          <Link target="_blank" href={SOCIAL_LINKS.WHATSAPP}>
            <Button
              icon={<HiMiniDocumentCurrencyEuro />}
              text="Obtenez un devis gratuit"
              href="#contact"
            />
          </Link>
        </div>
      </div>
      {/* <div classNamme="custom-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            classNamme="shape-fill"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
