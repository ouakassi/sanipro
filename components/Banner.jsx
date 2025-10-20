import "./Banner.css";
import Button from "./buttons/Button";
import { IoCall } from "react-icons/io5";
import { motion } from "motion/react";
import { CONTACT_INFO } from "@/data/data";
import useIsMobile from "@/hooks/useIsMobile";

export default function Banner() {
  const isMobile = useIsMobile(1024);

  return (
    <section className="banner-section">
      <div className="container banner">
        <motion.div
          initial={
            isMobile
              ? { y: 100, opacity: 0, scale: 0.5 }
              : { x: 100, opacity: 0, scale: 0.5 }
          }
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
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
