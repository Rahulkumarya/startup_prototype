"use client";

import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Founders from "../component/data/Founders";

export default function WebFounder() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState(""); // Sort state
  const [search, setSearch] = useState(""); // Search state

  // Sample Founders Data
//   const founders = [
//     {
//       id: 1,
//       name: "Rahul Kumar",
//       skills: "Full Stack, DevOps",
//       languages: "English, Hindi",
//       experience: 9,
//       orders: 13720,
//       price: 50,
//       rating: 4.8,
//       image: "/assets/first1.png",
//       level: "Advanced",
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       skills: "UI/UX, React",
//       languages: "English, Hindi, Punjabi",
//       experience: 5,
//       orders: 20715,
//       price: 30,
//       rating: 4.5,
//       image: "/assets/first1.png",
//       level: "Standard",
//     },
//     {
//       id: 3,
//       name: "Arjun Verma",
//       skills: "Backend, Cloud",
//       languages: "English, Hindi",
//       experience: 8,
//       orders: 8551,
//       price: 40,
//       rating: 4.9,
//       image: "/assets/first1.png",
//       level: "Advanced",
//     },
//     {
//       id: 4,
//       name: "Simran Kaur",
//       skills: "Mobile Apps, Flutter",
//       languages: "English, Punjabi",
//       experience: 6,
//       orders: 41236,
//       price: 45,
//       rating: 4.7,
//       image: "/assets/first1.png",
//       level: "Basic",
//     },
//   ];
const founders = Founders;
  /** -----------------------------
   *  1️⃣ FILTER FOUNDERS BY LEVEL
   * ----------------------------- */
  let filteredFounders =
    filter === "All" ? founders : founders.filter((f) => f.level === filter);

  /** -----------------------------
   *  2️⃣ SEARCH BY NAME (Case-insensitive)
   * ----------------------------- */
  filteredFounders = filteredFounders.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  /** -----------------------------
   *  3️⃣ SORT BASED ON SELECTED OPTION
   * ----------------------------- */
  if (sort === "price-low-high") {
    filteredFounders.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high-low") {
    filteredFounders.sort((a, b) => b.price - a.price);
  } else if (sort === "rating-high-low") {
    filteredFounders.sort((a, b) => b.rating - a.rating);
  } else if (sort === "experience-high-low") {
    filteredFounders.sort((a, b) => b.experience - a.experience);
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Top Section - Filter, Sort, Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-black">Hire a Founder</h1>

        <div className="flex flex-wrap gap-3">
          {/* Filter Dropdown */}
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 rounded-md text-black"
          >
            <option value="All">All Levels</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Sort Dropdown */}
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-md text-black"
          >
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Rating: High to Low</option>
            <option value="experience-high-low">Experience: High to Low</option>
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-md text-black"
          />
        </div>
      </div>

      {/* Founder Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFounders.map((founder) => (

          <div
            key={founder.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition"
          >
            <Link href={`/component/details/${founder.id}`}>
            {/* Profile Image */}
            <img
              src={founder.image}
              alt={founder.name}
              className="w-20 h-20 rounded-full object-cover border"
            />
            </Link>

            {/* Info Section */}
            <div className="flex-1">
              <h3 className="text-lg font-bold">{founder.name}</h3>
              <p className="text-sm text-gray-600">{founder.skills}</p>
              <p className="text-xs text-gray-500">{founder.languages}</p>
              <p className="text-xs text-gray-500">
                Exp: {founder.experience} Years
              </p>

              {/* Rating & Orders */}
              <div className="flex items-center gap-2 text-sm mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(founder.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-500">{founder.orders} orders</span>
              </div>

              {/* Price & Book Button */}
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-green-600">
                  ${founder.price}/hr
                </span>
                <button className="border border-green-600 text-green-600 px-4 py-1 rounded-md hover:bg-green-100 transition">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
