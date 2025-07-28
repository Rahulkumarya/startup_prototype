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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web Development Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Professional solutions for web, mobile, and DevOps – Choose your
          package today.
        </p>
      </section>

 
   
    </div>
  );
}
