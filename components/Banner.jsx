import "./Banner.css";
import Button from "./buttons/Button";
import { IoCall } from "react-icons/io5";
import { motion } from "motion/react";
import { CONTACT_INFO } from "@/data/data";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="container banner">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="image-container"
        >
          <img src="/banner/sanipro-car.png" alt="sanipro car" />
        </motion.div>
        <div className="content">
          <h1>
            Panne aujourd'hui ?
            <br />
            Réparé aujourd'hui !
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
      </div>
    </section>
  );
}
