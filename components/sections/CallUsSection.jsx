"use client";

import { motion, useScroll, useTransform } from "motion/react";
import "./CallUsSection.css";

import Button from "@/components/buttons/Button";
import { useEffect, useRef } from "react";

const images = [
  {
    src: "/call-us/image-1.png",
    alt: "Plombier professionnel en action",
  },
  {
    src: "/call-us/image-3.png",
    alt: "Plombier réparant une fuite",
  },
];

export default function CallUsSection() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "start start"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (v) => console.log("progress:", v));
  }, [scrollYProgress]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

  return (
    <section className="call-us-section">
      <div className="container call-us-container">
        <div className="imgs-container">
          {images.map(({ src, alt }, index) => (
            <motion.div
              style={{ scale, opacity, rotate }}
              className="img-wrapper"
              key={index}
            >
              <motion.img
                ref={imgRef}
                src={src}
                alt={alt}
                className="img-style"
              />
            </motion.div>
          ))}
        </div>
        <div className="content">
          <h1>We Respond to Your Call Quickly</h1>
          <p>
            You can trust our plumbers and the quality professionalism of our
            work. Every residential plumbing technician for the uniformed and
            badged, and will arrive at your home.
          </p>
          <Button text="Get a Free Estimate" href="#contact" />
        </div>
      </div>
    </section>
  );
}
