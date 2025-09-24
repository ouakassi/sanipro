"use client";
import Link from "next/link";
import "./TopHeader.css";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import socialData from "@/data/socialData";

export default function TopHeader() {
  return (
    <header className="top-header">
      <nav className="container top-header-navbar">
        <div>
          <div className="working-hours">
            <FaClock /> Horaires : 24h/24 7j/7
          </div>
          <div className="email">
            <FaEnvelope /> sanipro@gmail.com
          </div>
          <div className="phone">
            <FaPhone /> +33 611 231 314
          </div>
        </div>
        <div className="socials">
          {socialData.map(({ icon, name, link }) => (
            <SocialContainer key={name} icon={icon} name={name} link={link} />
          ))}
        </div>
      </nav>
    </header>
  );
}

const SocialContainer = ({ icon, name, link }) => (
  <Link href={link}>{icon}</Link>
);
