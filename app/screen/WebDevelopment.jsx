"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import WebFounder from "./WebFounder";

export default function WebDevelopment() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Experts Marketplace</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Hire vetted experts or pick fixed-price packages across Finance, EdTech, HealthTech, Mobile, Cloud, and more.
        </p>
      </section>
    </div>
  );
}
