"use client";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import "./ContactSction.css";
import MiniLogo from "../logo/MiniLogo";

export default function ContactSction() {
  return (
    <section className="contact-section">
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
        <div className="map-container">
          <iframe
            title="Sanipro Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.263107611926!2d-7.615!3d33.573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd!2sCasablanca!5e0!3m2!1sen!2sma!4v1700000000000&maptype=roadmap&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0x383838"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="cards">
          <div className="card">
            <FaPhone />
            <div className="data">
              <h3>call us</h3>
              <p>+33 6 81 18 05 25</p>
            </div>
          </div>
          <div className="card">
            <FaLocationDot />
            <div className="data">
              <h3>visite us</h3>
              <p>24 avenue de Stalingrad – 21000 DIJON</p>
            </div>
          </div>
          <div className="card">
            <FaEnvelope />
            <div className="data">
              <h3>email us</h3>
              <p>service-client@saniprosarl.fr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
