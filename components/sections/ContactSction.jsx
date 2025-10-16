"use client";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import "./ContactSction.css";
import MiniLogo from "../logo/MiniLogo";
import { CONTACT_INFO } from "@/data/data";
import ImageReveal from "../animations/ImageReveal";

const contactCards = [
  {
    icon: <FaLocationDot />,
    title: "Rendez-nous visite",
    content: CONTACT_INFO.ADDRESS,
  },
  {
    icon: <FaPhone />,
    title: "Appelez-nous",
    content: CONTACT_INFO.TELE,
  },
  {
    icon: <FaEnvelope />,
    title: "Écrivez-nous",
    content: CONTACT_INFO.EMAIL,
  },
];
export default function ContactSction() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <header>
          <div>
            {/* <h2 className="contact-title">Contact Us</h2> */}
            <h1>
              Contact <span> experts</span>
            </h1>
          </div>
          <p>
            Besoin d’une intervention rapide ou d’un devis gratuit ? L’équipe
            <MiniLogo />
            est à votre écoute pour répondre à toutes vos demandes en plomberie,
            chauffage, et rénovation. Contactez-nous dès aujourd’hui !
          </p>
        </header>

        <ImageReveal>
          <div className="map-container">
            <iframe
              title="Sanipro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1517.4418336814338!2d5.055800760491652!3d47.338286202266076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ed62000c1f0f71%3A0x1a7917ee8a12ac67!2s22%20Av.%20de%20Stalingrad%2C%2021000%20Dijon%2C%20France!5e0!3m2!1sen!2sma!4v1760615882662!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </ImageReveal>
        <div className="cards">
          {contactCards.map(({ icon, title, content }, index) => (
            <Card key={title} icon={icon} title={title} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Card = ({ icon, title, content }) => (
  <div className="card">
    <div className="icon-container">{icon}</div>
    <div className="data">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);
