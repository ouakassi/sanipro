"use client";

import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../buttons/Button";

export default function Header() {
  return (
    <header className=" header">
      <nav className="container">
        <Logo />
        <NavList>
          <NavItem text={"Accueil"} />
          <NavItem text={"Services"} />
          <NavItem text={"Projets"} />
          <NavItem text={"À propos"} />
          <NavItem text={"Contact"} />
        </NavList>
        <Button icon={<FaPhoneAlt />} text={"+33 611 231 314"} />
      </nav>
    </header>
  );
}

const Logo = () => (
  <div className="logo">
    <Image src="/logo/sanipro-logo.png" width={50} height={70} alt="logo" />
    <span>sani</span>
    <span>pro</span>
  </div>
);

const NavList = ({ children }) => <ul>{children}</ul>;

const NavItem = ({ text }) => (
  <li>
    <Link href={"#"}>{text}</Link>
  </li>
);
