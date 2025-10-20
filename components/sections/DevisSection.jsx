import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./DevisSection.css";
import Button from "../buttons/Button";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CONTACT_INFO } from "@/data/data";
import { FaBriefcase, FaUser } from "react-icons/fa6";
import { FaPhoneAlt, FaRegFileAlt } from "react-icons/fa";
import { BsChatSquareTextFill } from "react-icons/bs";
import MiniLogo from "../logo/MiniLogo";
import AnimatedHeader from "../animations/AnimatedHeader";
import { motion } from "motion/react";
import AnimatedText from "../animations/AnimatedText";
import { toast, Toaster } from "sonner";

const options = [
  { value: "plomberie", label: "Plomberie" },
  { value: "fuites", label: "Fuites" },
  { value: "chauffage", label: "Chauffage" },
  { value: "carrelage", label: "Carrelage" },
  { value: "bains", label: "Bains" },
  { value: "parquet", label: "Parquet" },
  { value: "peinture", label: "Peinture" },
  { value: "renovation", label: "Rénovation" },
  { value: "autre", label: "Autre Service" },
];

const DevisSection = () => {
  const form = useRef();
  const saniproNumber = CONTACT_INFO.TELE.replace(/\s+/g, "");
  const formatedSaniProNumber = saniproNumber.startsWith("0")
    ? "33" + saniproNumber.slice(1)
    : saniproNumber;

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
    const service = form.current.service.value.trim();

    if (!name || !email || !message || !service) {
      toast.warning(
        "Veuillez remplir tous les champs obligatoires avant d’envoyer !"
      );
      return false;
    }

    return { name, email, message, service };
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (!valid) return;

    emailjs
      .sendForm("service_ode6sah", "template_rpzx5n5", form.current, {
        publicKey: "FRwH8zku70NQhozM_",
      })
      .then(
        () => {
          toast.success("Message envoyé avec succès par e-mail !");

          form.current.reset();
        },
        (error) => {
          toast.warning("Erreur lors de l’envoi de l’e-mail !");
        }
      );
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (!valid) return;

    const phone = form.current.user_phone.value.trim();
    const whatsappMsg = encodeURIComponent(
      `*Nouvelle demande de contact depuis votre site web*\n\n` +
        `Nom : ${valid.name}\n` +
        (phone ? `Téléphone : ${phone}\n` : "") +
        `Email : ${valid.email}\n` +
        `Service : ${valid.service}\n\n` +
        `Message :\n${valid.message}\n\n` +
        `Merci de bien vouloir me recontacter dans les plus brefs délais.\n\n` +
        `— Message envoyé automatiquement depuis le formulaire du site.`
    );

    window.open(
      `https://wa.me/${formatedSaniProNumber}?text=${whatsappMsg}`,
      "_blank"
    );
  };

  return (
    <section id="devis" className="devis-section">
      <Toaster position="bottom-center" />
      <div className="container devis-container-wrapper">
        <h1>
          <AnimatedHeader speed={0.05}>
            Demander un <span className="color-orange">devis</span> à
            <MiniLogo />
          </AnimatedHeader>
        </h1>
        <div className="devis-container">
          <motion.div
            initial={{
              opacity: 0,
              x: 50,

              clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            transition={{ duration: 0.8 }}
            className="img-container"
          >
            <img src="/contact/contact-plumber.png" alt="" />
          </motion.div>
          <div className="container devis-form">
            <header>
              <h2>
                <AnimatedText
                  text={"Remplissez le formulaire"}
                  speed={0.02}
                  blur={false}
                />
              </h2>
              <AnimatedText
                text={"Demandez votre devis personnalisé dès maintenant."}
                speed={0.04}
                blur={false}
              />
            </header>
            <form action="" ref={form}>
              <div className="row">
                <AnimatedInput
                  icon={<FaUser />}
                  label="Nom complet"
                  name="user_name"
                  type="text"
                  required
                />
                <AnimatedInput
                  icon={<FaPhoneAlt />}
                  label="Telephone"
                  name="user_phone"
                  type="phone"
                  required
                />
              </div>
              <div className="row">
                <AnimatedInput
                  icon={<IoMdMail />}
                  label="Email"
                  name="user_email"
                  type="email"
                  required
                />
                <label className="select">
                  <AnimatedLabelText icon={<FaBriefcase />} text={"Service"} />

                  <SelectComponent
                    label="Type de service"
                    name="service"
                    value={form.service}
                    // onChange={handleChange}
                    options={options}
                  />
                </label>
              </div>
              <label>
                <AnimatedLabelText
                  icon={<BsChatSquareTextFill />}
                  text={"Message"}
                />

                <textarea name="message" required />
              </label>

              <div className="btns-container">
                <Button
                  icon={<IoIosSend />}
                  text="Envoyer par Email"
                  className="submit-button btn-mail"
                  onClick={sendEmail}
                />
                <Button
                  icon={<IoLogoWhatsapp />}
                  text="Envoyer par WhatsApp"
                  className="submit-button btn-wtsp"
                  onClick={sendWhatsApp}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevisSection;

function SelectComponent({ label, options, name, value, onChange }) {
  return (
    <div className="select-group">
      {/* {label && <label htmlFor={name}>{label}</label>} */}
      <div className="select-wrapper">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required
        >
          <option value="">Choisissez un service</option>
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
    </div>
  );
}

const AnimatedInput = ({
  icon,
  label,
  name,
  type = "text",
  required = false,
}) => {
  return (
    <label className="animated-label">
      <AnimatedLabelText icon={icon} text={label} />
      <motion.input
        type={type}
        name={name}
        required={required}
        whileFocus={{ scale: 1.02 }}
      />
    </label>
  );
};

const AnimatedLabelText = ({ icon, text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ amount: 0.9 }}
    >
      {icon}
      {text}
    </motion.span>
  );
};
