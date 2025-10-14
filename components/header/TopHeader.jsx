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
import { CONTACT_INFO } from "@/data/data";

export default function TopHeader() {
  return (
    <header className="top-header">
      <nav className="container top-header-navbar">
        <div>
          <div className="working-hours desktop-only">
            <FaClock /> Horaires : 24h/24 7j/7
          </div>
          <div className="email">
            <FaEnvelope /> {CONTACT_INFO.EMAIL}
          </div>
          <div className="phone">
            <FaPhone /> {CONTACT_INFO.TELE}
          </div>
        </div>
        <div className="socials desktop-only">
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
