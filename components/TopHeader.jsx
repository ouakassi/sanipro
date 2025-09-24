"use client";
import "./TopHeader.css";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function TopHeader() {
  return (
    <header className="top-header">
      <div>
        <div className="working-hours">
          <FaClock /> Working Hours: Mon to Fri - 8:00am - 16:00pm
        </div>
        <div className="email">
          <FaEnvelope /> sanipro@gmail.com
        </div>
        <div className="phone">
          <FaPhone /> +33 611 231 314
        </div>
      </div>
      <div className="socials">
        <span>fb</span>
        <span>fb</span>
        <span>fb</span>
        <span>fb</span>
        <span>fb</span>
      </div>
    </header>
  );
}
