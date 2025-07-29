"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";

/**
 * Props:
 * - delay: number (seconds) -> delay before showing
 * - duration: number (seconds) -> animation duration
 * - distance: number (px) -> how far to translate when hiding
 * - threshold: number (0..1) -> how much must be visible to trigger
 * - once: boolean -> if true, animates only first time it appears
 * - className: string
 */
export default function FadeInSection({
  children,
  delay = 0.1,
  duration = 0.6,
  distance = 40,
  threshold = 0.15,
  once = false,
  className = "",
}) {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce: once,
  });

  // Track scroll direction
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const [dir, setDir] = useState("down"); // "down" | "up"

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDir(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Variants that react to direction
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration, ease: "easeOut", delay },
    },
    hiddenDown: {
      opacity: 0,
      y: distance,
      scale: 0.98,
      transition: { duration: Math.min(duration, 0.45), ease: "easeIn" },
    },
    hiddenUp: {
      opacity: 0,
      y: -distance,
      scale: 0.98,
      transition: { duration: Math.min(duration, 0.45), ease: "easeIn" },
    },
  };

  // Choose which hidden state to use when out of view
  const hiddenState = dir === "down" ? "hiddenDown" : "hiddenUp";

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenState}
      animate={inView ? "visible" : hiddenState}
      variants={variants}
    >
   
      {children}
    </motion.div>
  );
}
