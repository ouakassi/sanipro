import "./Button.css";

export default function Button({ icon, text }) {
  return (
    <button className="cssbuttons-io-button">
      {icon}
      <span>{text}</span>
    </button>
  );
}
