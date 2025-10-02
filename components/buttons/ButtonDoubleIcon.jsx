"use client";
import "./ButtonDoubleIcon.css";

export default function ButtonDoubleIcon({ icon, text, iconTwo, color }) {
  return (
    <button href="#" className="button" style={{ "--clr": color }}>
      <span className="button__icon-wrapper">
        {icon}

        {iconTwo ? iconTwo : icon}
      </span>
      {text}
    </button>
  );
}
