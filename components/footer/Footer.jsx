"use client";

import Link from "next/link";
import "./Footer.css";
import Logo from "../logo/Logo";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaLocationDot />,
    text: "24 avenue de Stalingrad – 21000 DIJON - FRANCE",
  },
  {
    icon: <FaPhone />,
    text: "+33 6 81 18 05 25",
  },
  {
    icon: <FaEnvelope />,
    text: "service-client@saniprosarl.fr",
  },
];

const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/",
    label: "facebook",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/",
    label: "instagram",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/33681180525",
    label: "whatsapp",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/",
    label: "linkedin",
  },
];

export const servicesLinks = [
  { label: "Plomberie", href: "#services" },
  { label: "Rénovation", href: "#services" },
  { label: "Carrelage", href: "#services" },
  { label: "Peinture", href: "#services" },
  { label: "Parquet", href: "#services" },
  { label: "Dépannage", href: "#services" },
];

export const quickLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const legalLinks = [
  { label: "Mentions Légales", href: "#mentions-legales" },
  { label: "Politique de Confidentialité", href: "#politique-confidentialite" },
  { label: "Conditions Générales d’Utilisation", href: "#cgu" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer">
        <div className="top-footer">
          <div className="content">
            <div className="logo">
              <Logo className="footer-logo" />
            </div>
            <p>
              Chez Sanipro, nous garantissons une qualité et une précision
              exceptionnelles dans tous nos projets, avec un professionnalisme
              constant du premier contact jusqu’au résultat final.
            </p>
            <div className="contact-info-container">
              <ul className="social-media">
                {socialLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.url}
                      data-label={item.label}
                      target="_blank"
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="links-container">
            {/* <div className="links">
              <h4>Nos Services</h4>
              <ul>
                {servicesLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="links">
              <h4>Liens</h4>
              <ul>
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links">
              <h4>Contact</h4>
              <ul className="info">
                {contactInfo.map((item, i) => (
                  <li key={i}>
                    {item.icon}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="links">
            <h4>Contact</h4>
            <ul>
              <li>06 52 34 56 78</li>
              <li>12 Rue de la Paix, 75002 Paris</li>
            </ul>
          </div> */}
          </div>
        </div>
        <div className="bottom-footer">
          <p>© {year} SANIPRO. All rights reserved.</p>
          <ul>
            {legalLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
