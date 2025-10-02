"use client";

import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const navLinks = [
  { title: "accueil", link: "accueil" },
  { title: "services", link: "services" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <motion.header
      layout
      className=" header"
      style={
        !isVisible
          ? { top: 10 }
          : { top: "calc(var(--top-header-height) + 1rem )" }
      }
    >
      <nav className="container">
        <Link href={"/"} className="logo-link">
          <Logo />
        </Link>

        <NavList>
          {navLinks.map(({ title, link }) => (
            <NavItem key={title} title={title} link={link} />
          ))}
        </NavList>
        <Button icon={<FaPhoneAlt />} text={"+33 611 231 314"} />
      </nav>
    </motion.header>
  );
}

const Logo = () => (
  <div className="logo">
    <motion.img
      initial={{ scale: 0.8, rotate: -10, x: 30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      src="/logo/sanipro-logo.png"
      width={100}
      height={100}
      alt="logo"
    />
    <motion.span
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      sani
    </motion.span>
    <motion.span
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      pro
    </motion.span>
  </div>
);

const NavList = ({ children }) => <ul>{children}</ul>;

const NavItem = ({ title, link }) => (
  <li>
    <Link href={"#" + link}>{title}</Link>
  </li>
);
