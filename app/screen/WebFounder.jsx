"use client";

import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Founders from "../component/data/Founders";

export default function WebFounder() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");

  const founders = Founders;

  // Collect industries dynamically
  const allIndustries = Array.from(
    new Set(founders.flatMap((f) => f.industries || []))
  );

  // Filter by level
  let filteredFounders =
    filter === "All" ? founders : founders.filter((f) => f.level === filter);

  // Filter by industry
  filteredFounders =
    industry === "All"
      ? filteredFounders
      : filteredFounders.filter((f) => (f.industries || []).includes(industry));

  // Search by name
  filteredFounders = filteredFounders.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
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
        <div className="flex flex-wrap gap-3">
          {/* Level Filter */}
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 rounded-md text-black"
          >
            <option value="All">All Levels</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Industry Filter */}
          <select
            onChange={(e) => setIndustry(e.target.value)}
            className="border px-4 py-2 rounded-md text-black"
          >
            <option value="All">All Industries</option>
            {allIndustries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
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
            className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4 hover:shadow-lg transition"
          >
            <Link href={`/component/details/${founder.id}`}>
              <img
                src={founder.image}
                alt={founder.name}
                className="w-20 h-20 rounded-full object-cover border"
              />
            </Link>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold">{founder.name}</h3>
                  <p className="text-sm text-gray-600">{founder.skills}</p>
                  <p className="text-xs text-gray-500">{founder.languages}</p>
                  <p className="text-xs text-gray-500">Exp: {founder.experience} Years</p>
                  {/* Industries */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {(founder.industries || []).map((ind) => (
                      <span
                        key={ind}
                        className="text-[10px] px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < Math.round(founder.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-gray-500">{founder.orders} orders</span>
                  </div>
                  <div className="mt-2 font-bold text-green-600">Rs: {founder.price}/hr</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-3">
                <Link href={`/component/details/${founder.id}`} className="text-blue-600 hover:underline">
                  View details
                </Link>
                <Link href={`/component/details/${founder.id}`} className="border border-green-600 text-green-600 px-4 py-1 rounded-md hover:bg-green-100 transition">
                  Book
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
