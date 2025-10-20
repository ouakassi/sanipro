'use client";';

import "./ProjectsSection.css";
import { useEffect, useRef } from "react";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useScroll, useTransform, motion, useInView } from "motion/react";
import AnimatedText from "../animations/AnimatedText";
import MiniLogo from "../logo/MiniLogo";
import ImageReveal from "../animations/ImageReveal";
import useIsMobile from "@/hooks/useIsMobile";

const projects = [
  {
    id: 1,
    before: "/projects/compare-1.jpeg",
    after: "/projects/compare-1-twin.jpeg",
    portrait: true,
    caption: "Rénovation complète de salle de bain à Dijon.",
  },
  {
    id: 2,
    before: "/projects/compare-2.jpeg",
    after: "/projects/compare-2-twin.jpeg",
    caption:
      "Installation d’un WC suspendu avec coffrage affleurant et habillage céramique pour un rendu moderne et facile d’entretien.",
  },
  {
    id: 3,
    before: "/projects/compare-3.jpeg",
    after: "/projects/compare-3-twin.jpeg",
    portrait: true,
    caption:
      "Rénovation intégrale d’un espace sanitaire transformé en entrée lumineuse et propre.",
  },
  {
    id: 4,
    before: "/projects/compare-4.jpeg",
    after: "/projects/compare-4-twin.jpeg",
    caption:
      "Transformation complète d’un escalier ancien en un passage moderne, sûr et élégant.",
  },
];

const materialItems = [
  {
    id: 1,
    img: "/projects/material-1.jpeg",
    label: "Grohe",
  },
  {
    id: 2,
    img: "/projects/material-2.jpeg",
    label: "Villeroy & Boch",
  },
  {
    id: 3,
    img: "/projects/material-3.jpeg",
    label: "Hansgrohe",
  },
  {
    id: 4,
    img: "/projects/material-4.jpeg",
    label: "Duravit",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: ["end start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <motion.section
      transition={{ duration: 1 }}
      style={
        !isMobile
          ? {
              scale,
              borderRadius,
            }
          : {
              scale: 1,
              borderRadius: "0px",
            }
      }
      className="projects-section"
      id="projects"
    >
      <div className="container projects-container">
        <motion.header
          className="section-header"
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Nos Réalisations
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Des interventions maîtrisées, des résultats durables.
          </motion.h1>

          <motion.p>
            <AnimatedText
              text="Découvrez nos réalisations — des projets menés avec précision, fiabilité et un savoir-faire qui transforme chaque installation en une solution durable et élégante."
              speed={0.02}
              blur={false}
            />
          </motion.p>
        </motion.header>
        <div className="projects">
          {projects
            .reduce((rows, project, index) => {
              // Create a new row every 2 projects
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(project);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((project) => (
                  <div className="project-feature" key={project.id}>
                    <ImageReveal>
                      <ReactCompareSlider
                        className="compare-slider"
                        portrait={project.portrait}
                        itemOne={
                          <ReactCompareSliderImage
                            src={project.before}
                            alt="Avant"
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={project.after}
                            alt="Après"
                          />
                        }
                      />
                    </ImageReveal>

                    <p className="caption">
                      <PiArrowBendDownRightBold />
                      {project.caption}
                    </p>
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div className="materials">
          <header className="materials-header">
            <h2>
              Avec <MiniLogo dark={true} />
              Qualité premium, matériaux modernes
            </h2>
            <p>
              Chez
              <b> SANI</b>
              <b>PRO </b>, nous utilisons les matériaux les plus modernes et les
              technologies les plus avancées pour garantir des installations
              durables, sûres et esthétiques. Chaque projet est réalisé avec des
              produits certifiés de haute qualité, sélectionnés pour leur
              performance, leur résistance et leur respect des normes les plus
              strictes du secteur.
            </p>
          </header>
          <div className="materias-imgs">
            {materialItems.map((item) => (
              <ImageReveal key={item.id}>
                <img src={item.img} alt={item.label} />
              </ImageReveal>
            ))}
          </div>
        </div>
        <div className="latest-projects">
          <header>
            <h2>Nos Derniers Projets</h2>
            <p>
              Découvrez comment Sanipro allie savoir-faire et matériaux de
              pointe pour offrir des résultats modernes, fiables et esthétiques.
            </p>
          </header>
          <div className="latest-projects-container">
            {Array.from({ length: 7 }).map((_, index) => (
              <ImageReveal key={index} withHover={true}>
                <img
                  src={`/projects/project-${index + 1}.jpeg`}
                  alt={`Project ${index + 1}`}
                />
              </ImageReveal>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
