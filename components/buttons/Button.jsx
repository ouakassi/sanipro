"use client";

import "./Button.css";

export default function Button({ icon, text, className }) {
  return (
    <button className={`cssbuttons-io-button ${className}`}>
      {icon}
      <span>{text}</span>
    </button>
  );
}
