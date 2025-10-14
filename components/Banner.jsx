import Image from "next/image";
import "./Banner.css";
import Button from "./buttons/Button";
import { BsPhone } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { motion } from "motion/react";
import { CONTACT_INFO } from "@/data/data";

export default function Banner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Delay the content appearance until the cover animation is almost done
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="banner-section">
      <motion.div
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        className="container banner"
      >
        <motion.div className="image-container">
          <img src="/banner/sanipro-car.png" alt="sanipro car" />
        </motion.div>
        <div className="content">
          <h1>
            Panne aujourd'hui ?<br /> réparé aujourd'hui !
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id
            volutpat imperdiet quis at pellentesque nunc commodo nunc purus
            adipiscing
          </p> */}
          <Button
            text={CONTACT_INFO.TELE}
            className="call-btn"
            icon=<IoCall />
          />
        </div>

        <svg
          className="icon one"
          width="342"
          height="112"
          viewBox="0 0 342 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M305.443 -1C304.891 -1 304.443 -0.552285 304.443 0V71.7162C304.443 72.9643 303.431 73.976 302.183 73.976H-0.00292969C-0.555214 73.976 -1.00293 74.4237 -1.00293 74.976L-1.00293 107.574C-1.00293 108.127 -0.555214 108.574 -0.00292969 108.574H302.183C322.539 108.574 339.041 92.0724 339.041 71.7162V0C339.041 -0.552285 338.593 -1 338.041 -1L305.443 -1Z"
            stroke="#1871F6"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M302.488 18.2402L302.488 19.2402L303.488 19.2402L339.998 19.2402L340.998 19.2402L340.998 18.2402L340.998 9.76469L340.998 8.76469L339.998 8.76468L303.488 8.76468L302.488 8.76468L302.488 9.76468L302.488 18.2402Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="2"
          />
          <path
            d="M267.628 72.02L266.628 72.02L266.628 73.02L266.628 109.53L266.628 110.53L267.628 110.53L276.104 110.53L277.104 110.53L277.104 109.53L277.104 73.02L277.104 72.02L276.104 72.02L267.628 72.02Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="2"
          />
          <path
            d="M-0.477539 72.02L-1.47754 72.02L-1.47754 73.02L-1.47754 109.53L-1.47754 110.53L-0.477542 110.53L7.99801 110.53L8.99801 110.53L8.99801 109.53L8.99801 73.02L8.99801 72.02L7.99801 72.02L-0.477539 72.02Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="2"
          />
        </svg>

        {/* ICON TWO */}
        <svg
          className="icon two"
          width="159"
          height="97"
          viewBox="0 0 159 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.1989 141.785C35.1989 142.337 34.7512 142.785 34.1989 142.785H4.04492C3.49264 142.785 3.04492 142.337 3.04492 141.785L3.04492 37.4519C3.04492 18.5807 18.3431 3.2825 37.2143 3.2825H191C191.552 3.2825 192 3.73021 192 4.2825V34.4365C192 34.9888 191.552 35.4365 191 35.4365H37.2143C36.1012 35.4365 35.1989 36.3388 35.1989 37.4519V141.785Z"
            stroke="#1871F6"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M157.943 1L158.943 1L158.943 2L158.943 35.7725L158.943 36.7725L157.943 36.7725L150.103 36.7725L149.103 36.7725L149.103 35.7725L149.103 2L149.103 1L150.103 1L157.943 1Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="2"
          />
          <path
            d="M68.9434 1L69.9434 1L69.9434 2L69.9434 35.7725L69.9434 36.7725L68.9434 36.7725L61.1033 36.7725L60.1033 36.7725L60.1033 35.7725L60.1033 2L60.1033 1L61.1033 1L68.9434 1Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="2"
          />
          <path
            d="M1.10352 86L1.10352 85L2.10352 85L35.876 85L36.876 85L36.876 86L36.876 93.84L36.876 94.84L35.876 94.84L2.10352 94.84L1.10352 94.84L1.10352 93.84L1.10352 86Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="2"
          />
        </svg>

        <svg
          className="icon three"
          width="162"
          height="237"
          viewBox="0 0 162 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-18.7863 29.5717C-18.7863 29.9188 -18.5049 30.2003 -18.1577 30.2003L129.115 30.2003C130.255 30.2003 131.18 31.125 131.18 32.2657L131.18 282C131.18 282.347 131.461 282.629 131.809 282.629L158.749 282.629C159.096 282.629 159.377 282.347 159.377 282L159.377 32.2657C159.377 15.552 145.828 2.003 129.115 2.003L-18.1577 2.00299C-18.5049 2.00299 -18.7863 2.28442 -18.7863 2.63159L-18.7863 29.5717Z"
            stroke="#1871F6"
            strokeWidth="1.2572"
            strokeLinejoin="round"
          />
          <path
            d="M129.563 196.51L129.563 197.139L130.192 197.139L160.365 197.139L160.993 197.139L160.993 196.51L160.993 189.506L160.993 188.877L160.365 188.877L130.192 188.877L129.563 188.877L129.563 189.506L129.563 196.51Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="1.2572"
          />
          <path
            d="M129.563 51.394L129.563 52.0226L130.192 52.0226L160.365 52.0226L160.993 52.0226L160.993 51.394L160.993 44.3896L160.993 43.761L160.365 43.761L130.192 43.761L129.563 43.761L129.563 44.3896L129.563 51.394Z"
            fill="#3083FF"
            stroke="#1871F6"
            strokeWidth="1.2572"
          />
        </svg>
      </motion.div>
    </section>
  );
}
