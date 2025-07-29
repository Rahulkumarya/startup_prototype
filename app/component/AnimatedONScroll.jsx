"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";

export default function ScrollHeader() {
  const lastY = useRef(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowHeader(y < lastY.current || y < 50); // Show when scrolling up or near top
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4"
    >
      <Header />
    </motion.header>
  );
}
