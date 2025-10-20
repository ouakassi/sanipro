import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase, FaHammer } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiHome7Fill } from "react-icons/ri";
import { TbMessageStar } from "react-icons/tb";

const CONTACT_INFO = {
  TELE: "06 81 18 05 25",
  EMAIL: "sanipro21000@gmail.com" || "service-client@saniprosarl.fr",
  ADDRESS: "22 avenue de Stalingrad – 21000 DIJON",
};

const SOCIAL_LINKS = {
  FACEBOOK: "https://web.facebook.com/profile.php?id=61576141945211",
  TIKTOK: "https://www.tiktok.com/@sanipro21_?_t=ZN-90bgzTDQ2Yo&_r=1",
  INSTAGRAM:
    "https://www.instagram.com/sanipro_21000?igsh=cmI3MWpnYmcxdDdk&utm_source=qr",
  WHATSAPP:
    "https://api.whatsapp.com/send/?phone=33681180525&text=Bonjour%2C+je+suis+int%C3%A9ress%C3%A9%28e%29+par+les+services+propos%C3%A9s+par+Sanipro%2C+notamment+en+plomberie%2C+installation+sanitaire+et+carrelage.+Pourriez-vous+me+donner+plus+d%E2%80%99informations+sur+vos+prestations%2C+tarifs+et+disponibilit%C3%A9s+%3F+Merci+d%E2%80%99avance+pour+votre+retour.",
  GOOGLE_MAPS:
    "https://www.google.com/maps/place/22+Av.+de+Stalingrad,+21000+Dijon,+France/",
};

const PAGE_LINKS = [
  { label: "Accueil", href: "#home", icon: <RiHome7Fill /> },
  { label: "À Propos", href: "#about", icon: <FaUserAlt /> },
  { label: "Services", href: "#services", icon: <FaBriefcase /> },
  { label: "Projets", href: "#projects", icon: <FaHammer /> },
  { label: "Avis", href: "#reviews", icon: <TbMessageStar /> },
  { label: "Contact", href: "#contact", icon: <IoMdMail /> },
];

export { CONTACT_INFO, SOCIAL_LINKS, PAGE_LINKS };
