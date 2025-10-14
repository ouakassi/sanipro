"use client";

import "./Button.css";

export default function Button({ icon, text, className = "", ...rest }) {
  return (
    <button {...rest} className={`cssbuttons-io-button ${className}`}>
      {icon}
      <span>{text}</span>
    </button>
  );
}
