import Image from "next/image";
import "./HeroSection.css";

import { BsCheckCircleFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMiniDocumentCurrencyEuro } from "react-icons/hi2";
import Button from "./buttons/Button";
import { FaClock } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero-container">
      <div className="container hero">
        <div className="content">
          {/* <h1>Plomberie & Rénovation </h1> */}
          <h1>Votre Expert de Confiance en Plomberie</h1>
          <h2>
            <FaClock />
            Disponibilité 24h/24 et 7j/7
          </h2>
          {/* <p>
            Nous intervenons 24h/24 et 7j/7 pour vos urgences de plomberie et
            vos projets de rénovation. Détection de fuites, remplacement de
            chauffe-eau, carrelage, peinture, parquet ou salle de bain clé en
            main — nous vous offrons des solutions rapides, durables et de
            qualité.
          </p> */}
          <ul>
            <li>
              <BsCheckCircleFill />
              Disponibilité 24h/24 et 7j/7.
            </li>
            <li>
              <BsCheckCircleFill />
              Expertise certifiée.
            </li>
            <li>
              <BsCheckCircleFill />
              Service rapide et fiable.
            </li>
            <li>
              <BsCheckCircleFill />
              Qualité assurée.
            </li>
          </ul>
          <div className="call-to-action-btns">
            <Button
              icon={<HiMiniDocumentCurrencyEuro />}
              text="devis gratuit"
            />
            <Button icon={<BsFillTelephoneFill />} text="Nous contacter" />
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            alt="worker"
            src={"/hero/hero.webp"}
            width="1200"
            height="900"
          />
        </div>
        <div className="data">
          <div className="card">
            <span>+500</span>
            <span>Projets réalisés</span>
          </div>
          <div className="card">
            <span>+400</span>
            <span>Clients satisfaits</span>
          </div>
          <div className="card">
            <span>+20</span>
            <span>Années d’expérience</span>
          </div>
          <div className="card">
            <span>24h/7j</span>
            <span>Disponibilité</span>
          </div>
          {/* <Image width={5} height={5} /> */}
          <img
            className="screw-icon screw-one"
            src={"/hero/screw.svg"}
            alt=""
          />
          <img
            className="screw-icon screw-two"
            src={"/hero/screw.svg"}
            alt=""
          />
          <img
            className="screw-icon screw-three"
            src={"/hero/screw.svg"}
            alt=""
          />
          <img
            className="screw-icon screw-four"
            src={"/hero/screw.svg"}
            alt=""
          />
        </div>
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
