import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
// import "./styles.css";

const ITEMS = [
  {
    id: 0,
    title: "Mountain Dawn",
    text: "Crisp air, soft light, and the slow reveal of peaks above the cloud line.",
    src: "/images/img1.jpg", // replace with actual paths
  },
  {
    id: 1,
    title: "Forest Trail",
    text: "Dappled sun and pine scent leading through quiet, mossy turns.",
    src: "/images/img2.jpg",
  },
  {
    id: 2,
    title: "Ocean Edge",
    text: "Salt spray, rolling swells, and a horizon that never blinks.",
    src: "/images/img3.jpg",
  },
  {
    id: 3,
    title: "City Night",
    text: "Glass, neon, and reflected motion in a grid of stories.",
    src: "/images/img4.jpg",
  },
];

function ImagePanel({ item, index, registerRef }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    registerRef(index, sectionRef);
  }, [index, registerRef]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // 0 when enters viewport, 1 when leaves
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={sectionRef} className="panel" aria-label={item.title}>
      <motion.figure className="imageFrame" style={{ scale, opacity }}>
        <img src={item.src} alt={item.title} loading="lazy" />
        <figcaption className="sr-only">{item.title}</figcaption>
      </motion.figure>
    </section>
  );
}

export default function Test() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  const registerRef = useCallback((i, r) => {
    refs.current[i] = r;
  }, []);

  useEffect(() => {
    let raf = 0;

    const updateActive = () => {
      raf = 0;
      const centerY = window.innerHeight / 2;
      let bestIdx = active;
      let bestDist = Infinity;

      for (let i = 0; i < refs.current.length; i++) {
        const el = refs.current[i]?.current;
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - centerY);

        const visible =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visRatio = Math.max(0, Math.min(visible / rect.height, 1));

        if (visRatio >= 0.9 && dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }

      if (bestIdx !== active) setActive(bestIdx);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(updateActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once to set initial state
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active]);

  const item = ITEMS[active];

  return (
    <main className="page">
      <aside className="sidebar" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className="sidebarCard"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
          >
            <span className="eyebrow">
              {String(active + 1).padStart(2, "0")} / 04
            </span>
            <h1 className="title">{item.title}</h1>
            <p className="desc">{item.text}</p>
          </motion.div>
        </AnimatePresence>
      </aside>

      <section className="scroller" aria-label="Scroll gallery">
        {ITEMS.map((it, i) => (
          <ImagePanel
            key={it.id}
            item={it}
            index={i}
            registerRef={registerRef}
          />
        ))}
      </section>
    </main>
  );
}
