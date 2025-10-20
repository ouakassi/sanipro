import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import { SOCIAL_LINKS } from "./data";
import { FaTiktok } from "react-icons/fa6";

const socialData = [
  {
    name: "tiktok",
    link: SOCIAL_LINKS.TIKTOK,
    icon: <FaTiktok />,
  },
  {
    name: "facebook",
    link: SOCIAL_LINKS.FACEBOOK,
    icon: <FaFacebook />,
  },
  {
    name: "instagram",
    link: SOCIAL_LINKS.INSTAGRAM,
    icon: <FaInstagram />,
  },
  {
    name: "whatsapp",
    link: SOCIAL_LINKS.WHATSAPP,
    icon: <FaWhatsapp />,
  },
  {
    name: "google maps",
    link: SOCIAL_LINKS.GOOGLE_MAPS,
    icon: <PiMapPinLineFill />,
  },
];

export default socialData;
