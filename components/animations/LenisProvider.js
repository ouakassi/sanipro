"use client";

import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1, // Scroll animation duration in seconds
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
        orientation: "vertical", // Scroll orientation (vertical or horizontal)
        gestureOrientation: "vertical", // Gesture orientation for touch devices

        autoResize: true, // Automatically resize the instance using ResizeObserver
        overscroll: true, // Enable overscroll on nested Lenis instances
      }}
    >
      {children}
    </ReactLenis>
  );
}
