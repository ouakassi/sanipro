import "./TimelineSection.css";
import { motion } from "motion/react";

const services = [
  {
    title: "Plomberie",

    icon: "/services/plomberie-icon.png",
  },
  {
    title: "Fuites",

    icon: "/services/fuites-icon.png",
  },
  {
    title: "Chauffe-eau & Chaudière",

    icon: "/services/chauffe-eau-icon.png",
  },
  {
    title: "Carrelage",

    icon: "/services/carrelage-icon.png",
  },
  {
    title: "Salle de bain clé en main",

    icon: "/services/salle-de-bain-icon.png",
  },
  {
    title: "Parquet",

    icon: "/services/parquet-icon.png",
  },
  {
    title: "Peinture",

    icon: "/services/peinture-icon.png",
  },
  {
    title: "Rénovation globale",

    icon: "/services/renovation-icon.png",
  },
];

export default function TimelineSection() {
  const timeLineDataArray = Array(10).fill(services).flat();

  return (
    <section className="container timeline-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="timeline-container"
      >
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            delay: 0.2,
            repeat: Infinity,
            repeatType: "loop",
            duration: 400,
            ease: "linear",
          }}
          className="timeline-track"
        >
          {timeLineDataArray.map(({ icon, title }, index) => (
            <div key={title + index} className="timeline-item">
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ amount: 0.8 }}
                src={icon}
                alt={title}
              />
              <h1>{title}</h1>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
