"use client";

import "./ServicesSection.css";
import Image from "next/image";

const services = [
  {
    title: "Plomberie",
    paragraph: "Interventions rapides pour fuites, robinets et canalisations.",
    image: "/services/plomberie.png", // replace with your actual path
    icon: "/services/plomberie-icon.png", // replace with your actual path
  },
  {
    title: "Fuites",
    paragraph: "Détection et réparation efficaces pour éviter tout dégât.",
    image: "/services/fuites.png",
    icon: "/services/fuites-icon.png",
  },
  {
    title: "Chauffe-eau & Chaudière",
    paragraph: "Installation et remplacement sécurisés et performants.",
    image: "/services/chauffe-eau.png",
    icon: "/services/chauffe-eau-icon.png",
  },
  {
    title: "Carrelage",
    paragraph: "Pose et rénovation pour sols et murs modernes.",
    image: "/services/carrelage.png",
    icon: "/services/carrelage-icon.png",
  },
  {
    title: "Salle de bain clé en main",
    paragraph: "Rénovation complète de A à Z.",
    image: "/services/salle-de-bain.png",
    icon: "/services/salle-de-bain-icon.png",
  },
  {
    title: "Parquet",
    paragraph: "Pose et rénovation pour un sol élégant et durable.",
    image: "/services/parquet.png",
    icon: "/services/parquet-icon.png",
  },
  {
    title: "Peinture",
    paragraph: "Travaux soignés pour un rendu impeccable.",
    image: "/services/peinture.png",
    icon: "/services/peinture-icon.png",
  },
  {
    title: "Rénovation globale",
    paragraph: "Transformation complète de votre espace avec expertise.",
    image: "/services/renovation.png",
    icon: "/services/renovation-icon.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-container">
      <div className="container services-section">
        <header>
          <h1>Nos Services à Votre Portée</h1>

          <p>
            Des interventions rapides, efficaces et de qualité pour tous vos
            besoins en plomberie et rénovation
          </p>
        </header>
        <div className="services-container">
          {services.map(({ title, paragraph, image, icon }) => (
            <ServiceCard
              key={title}
              title={title}
              paragraph={paragraph}
              image={image}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ title, paragraph, image, icon }) => (
  <article>
    <div className="service">
      <div className="img-container">
        <Image
          className="img"
          src={image}
          alt={title}
          width={20}
          height={20}
          unoptimized
        />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
    <span className="icon">
      <Image
        src={icon}
        width={80}
        height={80}
        unoptimized
        alt={title + " icon"}
      />
    </span>
  </article>
);
