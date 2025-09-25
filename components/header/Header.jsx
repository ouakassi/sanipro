"use client";

import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../buttons/Button";

const navLinks = [
  { title: "accueil", link: "accueil" },
  { title: "services", link: "services" },
];

export default function Header() {
  return (
    <header className=" header">
      <nav className="container">
        <Logo />
        <NavList>
          {navLinks.map(({ title, link }) => (
            <NavItem title={title} link={link} />
          ))}
        </NavList>
        <Button icon={<FaPhoneAlt />} text={"+33 611 231 314"} />
      </nav>
    </header>
  );
}

const Logo = () => (
  <div className="logo">
    <Image src="/logo/sanipro-logo.png" width={100} height={100} alt="logo" />
    <span>sani</span>
    <span>pro</span>
  </div>
);

const NavList = ({ children }) => <ul>{children}</ul>;

const NavItem = ({ title, link }) => (
  <li>
    <Link href={"#" + link}>{title}</Link>
  </li>
);
