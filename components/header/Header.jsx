"use client";

import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Logo from "../logo/Logo";
import { CONTACT_INFO, PAGE_LINKS, SOCIAL_LINKS } from "@/data/data";
import { PiListDashesBold } from "react-icons/pi";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggleSiedbar, setToggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolled down, show when at top
      if (currentScrollY > 0) {
        setIsVisible(false);
      }
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleToggleSidebar = () => setToggleSidebar(!toggleSiedbar);

  return (
    <motion.header
      layout
      className="header"
      style={
        !isVisible
          ? { top: 10 }
          : { top: "calc(var(--top-header-height) + 1rem )" }
      }
    >
      <motion.nav
        layout
        className="container"
        style={{ left: !toggleSiedbar ? "-100%" : "0%" }}
      >
        <Link href={"#home"} className="logo-link">
          <Logo />
        </Link>

        <NavList>
          {PAGE_LINKS.map(({ label, href }) => (
            <NavItem
              key={label}
              title={label}
              link={href}
              onClick={handleToggleSidebar}
            />
          ))}
        </NavList>
        <Link target="_blank" href={SOCIAL_LINKS.WHATSAPP}>
          <Button
            icon={<FaPhoneAlt />}
            // text={"appelez-nous " + CONTACT_INFO.TELE}
            text={CONTACT_INFO.TELE}
          />
        </Link>
      </motion.nav>
      <motion.button
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggleSidebar}
        className="btn-reset toggle-btn"
        style={{ background: toggleSiedbar ? "red" : null }}
      >
        <motion.span
          initial={{ opacity: 0, y: -30, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          key={toggleSiedbar}
        >
          {!toggleSiedbar ? <PiListDashesBold /> : <RiCloseLargeLine />}
        </motion.span>
      </motion.button>
    </motion.header>
  );
}

const NavList = ({ children }) => <ul>{children}</ul>;

const NavItem = ({ title, link, onClick }) => (
  <li>
    <Link onClick={onClick} href={link}>
      {title}
    </Link>
  </li>
);
