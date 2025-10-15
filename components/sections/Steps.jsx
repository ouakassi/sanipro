"use client";

import {
  Fragment,
  use,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import "./Steps.css";
import { IoCall } from "react-icons/io5";
import AnimatedText from "../animations/AnimatedText";
import Button from "../buttons/Button";
import { FaPhoneAlt } from "react-icons/fa";
import MiniLogo from "../logo/MiniLogo";
import { CONTACT_INFO } from "@/data/data";

export const processSteps = [
  {
    id: 1,
    slug: "appel-immediat",
    title: "Appel immédiat",
    short: "On vous répond et on vous guide.",
    description:
      "Expliquez le problème, envoyez une photo si possible. Un technicien qualifié vous répond et vous donne les bons gestes pour limiter les dégâts.",
    details: [
      "Disponibilité 24h/24, 7j/7",
      "Devis indicatif et délai d’arrivée estimé",
      "Conseils d’urgence (couper l’eau, sécuriser la zone)",
    ],
    icon: "/steps/call.png",
    image: "/steps/steps-1.png",
    cta: { label: "Appeler maintenant", href: "tel:+33611423116" },
  },
  {
    id: 2,
    slug: "diagnostic-sur-place",
    title: "Diagnostic sur place",
    short: "On identifie l’origine de la panne.",
    description:
      "Arrivée rapide avec l’outillage adapté. Contrôle visuel et tests (fuite, pression, évacuation) pour localiser précisément le problème.",
    details: [
      "Inspection ciblée (cuisine, salle de bain, WC, chauffe‑eau)",
      "Devis clair et validé avant travaux",
      "Option de réparation immédiate",
    ],
    icon: "/steps/plumber-coming.png",
    image: "/steps/steps-2.jpg",
    cta: { label: "Valider le diagnostic", href: "#devis" },
  },
  {
    id: 3,
    slug: "intervention-reparation",
    title: "Intervention & réparation",
    short: "On répare durablement.",
    description:
      "Réparation aux normes avec pièces de qualité. Remplacement des éléments défectueux et tests de fonctionnement.",
    details: [
      "Matériel pro (joints, siphons, flexibles, robinets, mécanismes WC)",
      "Protection et propreté du chantier",
      "Solutions durables et garanties",
    ],
    icon: "/steps/fixing.png",
    image: "/steps/steps-3.jpg",
    cta: { label: "Lancer l’intervention", href: "#contact" },
  },
  {
    id: 4,
    slug: "controle-garantie",
    title: "Contrôle final & garantie",
    short: "On teste, on conseille, on garantit.",
    description:
      "Vérifications d’étanchéité et de pression. Conseils d’entretien personnalisés et remise d’une facture détaillée avec garantie.",
    details: [
      "Garantie main‑d’œuvre et pièces",
      "Conseils prévention (détartrage, entretien annuel)",
      "Suivi client et disponibilité après intervention",
    ],
    icon: "/steps/satisfied.png",
    image: "/steps/steps-4.jpg",
    cta: { label: "Demander la facture", href: "#facture" },
  },
];

const images = [
  "/steps/steps-1.png",
  "/steps/steps-2.png",
  "/steps/steps-3.png",
  "/steps/steps-4.png",
];

export const reassuranceBlocks = [
  {
    id: "speed",
    title: "Intervention rapide",
    text: "Arrivée sous 1h en urgence",
    icon: "/icons/bolt.svg",
  },
  {
    id: "availability",
    title: "Disponibilité 24/7",
    text: "Nous répondons jour et nuit",
    icon: "/icons/clock.svg",
  },
  {
    id: "transparency",
    title: "Devis transparent",
    text: "Prix clair avant travaux",
    icon: "/icons/receipt.svg",
  },
  {
    id: "quality",
    title: "Qualité certifiée",
    text: "Pièces et normes en vigueur",
    icon: "/icons/badge.svg",
  },
  {
    id: "guarantee",
    title: "Garantie travaux",
    text: "Main‑d’œuvre et pièces garanties",
    icon: "/icons/verified.svg",
  },
];

const backgrounds = {
  1: "gray",
  2: "bleu",
  3: "purple",
  4: "black",
};

export default function Steps() {
  const [activeCardId, setActiveCardId] = useState(1);
  const ref = useRef(null);

  console.log(activeCardId);

  // scroll progress for the line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    ["rgb(255 3 3)", "rgb(255 187 3)", "rgb(3 172 255)", "rgb(3 255 116)"]
  );
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useLayoutEffect(() => {
    document.body.style.background = background;
  }, [activeCardId]);

  return (
    <motion.section
      // style={{ background: background }}
      className="steps-section"
      id="steps"
      ref={ref}
    >
      <div className="container steps">
        <header>
          {/* <p>PROCESSUS D'INTERVENTION</p> */}
          <h1>
            <AnimatedText
              text={"Notre Intervention en 4 étapes"}
              speed={0.04}
            />
          </h1>
        </header>

        <main className="steps-main">
          {/* Vertical line */}
          <div className="line-container">
            <motion.div
              className="line-progress"
              style={{
                // background,

                scaleY,
                transformOrigin: "top center",
              }}
            />
          </div>

          {/* Cards */}
          <div className="cards">
            {processSteps.map((data, index) => (
              <Fragment key={data.id}>
                <Card
                  background={background}
                  data={data}
                  index={index}
                  cardId={data.id}
                  setActiveCardId={setActiveCardId}
                />
              </Fragment>
            ))}
          </div>
        </main>
        <div className="call-data">
          <h1>
            N’attendez plus, contactez <MiniLogo />
            dès aujourd’hui !
          </h1>
          <Button text="+33 611 231 314" icon={<FaPhoneAlt />} />
        </div>
      </div>
    </motion.section>
  );
}

const Card = ({ data, index, cardId, setActiveCardId, background }) => {
  const cardRef = useRef(null);
  const cardDelay = 0.2;

  return (
    <motion.div className="card-backgroundd">
      <div ref={cardRef} className="card">
        <div className="content">
          <motion.span
            className="number"
            // style={{ color: background }}
            initial={{ sclae: 0, y: -50, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.6,
              delay: cardDelay + index * 0.2,
            }}
          >
            0{index + 1}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.6,
              delay: cardDelay,
            }}
          >
            {data.title}
          </motion.h2>
          {/* <AnimatedText text={data.short} className="short" /> */}
          <p>
            <AnimatedText text={data.description} speed={0.01} blur={false} />
          </p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {data.details.map((item, idx) => (
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.4 }}
                key={idx}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{
            scale: 1.1,
            opacity: 0.8,
            clipPath: "circle(0% at 50% 50%)",
            x: "30%",
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            clipPath: "circle(100% at 50% 50%)",
            x: "45%",
          }}
          transition={{ duration: 0.6, delay: cardDelay }}
          viewport={{ amount: 1 }}
          className="img-container"
          // style={{ borderColor: background }}
        >
          <motion.img src={data.image} alt={data.title} />
          <span className="mask"></span>
        </motion.div>
      </div>
    </motion.div>
  );
};
const scrollData = [
  {
    id: 1,
    image: "/steps/steps-1.png",
    title: "Appel immédiat",
    description:
      "Expliquez le problème, envoyez une photo si possible. Un technicien qualifié vous répond et vous donne les bons gestes pour limiter les dégâts.",
  },
  {
    id: 2,
    image: "/steps/steps-2.png",
    title: "Diagnostic sur place",
    description:
      "Arrivée rapide avec l'outillage adapté. Contrôle visuel et tests (fuite, pression, évacuation) pour localiser précisément le problème.",
  },
  {
    id: 3,
    image: "/steps/steps-3.png",
    title: "Intervention & réparation",
    description:
      "Réparation aux normes avec pièces de qualité. Remplacement des éléments défectueux et tests de fonctionnement.",
  },
  {
    id: 4,
    image: "/steps/steps-4.png",
    title: "Contrôle final & garantie",
    description:
      "Vérifications d'étanchéité et de pression. Conseils d'entretien personnalisés et remise d'une facture détaillée avec garantie.",
  },
];

const BouncingArrow = () => {
  return (
    <motion.div
      className="scroll-indicator"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M7 13l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
};
