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
import { usePathname, useRouter } from "next/navigation";
import { HiMiniDocumentCurrencyEuro } from "react-icons/hi2";

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
          {PAGE_LINKS.map(({ label, href, icon }) => (
            <NavItem
              key={label}
              title={label}
              icon={icon}
              link={href}
              onClick={handleToggleSidebar}
            />
          ))}
        </NavList>
        <div className="action-btns">
          {/* <Link href={"#devis"}>
            <Button icon={<HiMiniDocumentCurrencyEuro />} text={"Devis ?"} />
          </Link> */}
          <Link target="_blank" href={SOCIAL_LINKS.WHATSAPP}>
            <Button
              icon={<FaPhoneAlt />}
              className="call-btn"
              // text={"appelez-nous " + CONTACT_INFO.TELE}
              text={CONTACT_INFO.TELE}
            />
          </Link>
        </div>
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

export const NavItem = ({ title, link, icon, onClick }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (link.startsWith("#")) {
      e.preventDefault();

      if (pathname !== "/") {
        // Navigate to home first
        router.push("/");

        // Wait a small delay, then scroll
        setTimeout(() => {
          const el = document.getElementById(link.substring(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200); // adjust delay if needed
      } else {
        // Already on home page
        const el = document.getElementById(link.substring(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) onClick();
  };

  return (
    <li>
      <a href={link} onClick={handleClick}>
        {icon}
        {title}
      </a>
    </li>
  );
};
