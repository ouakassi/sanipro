import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import { SOCIAL_LINKS } from "./data";

const socialData = [
  {
    name: "facebook",
    link: SOCIAL_LINKS.FACEBOOK,
    icon: <FaFacebook />,
  },
  {
    name: "whatsapp",
    link: SOCIAL_LINKS.WHATSAPP,
    icon: <FaWhatsapp />,
  },
  {
    name: "instagram",
    link: SOCIAL_LINKS.INSTAGRAM,
    icon: <FaInstagram />,
  },
  {
    name: "google maps",
    link: SOCIAL_LINKS.GOOGLE_MAPS,
    icon: <PiMapPinLineFill />,
  },
];

export default socialData;
