"use client";

import { Users, Rocket, CalendarCheck2, Star } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "Experts", value: "120+", Icon: Users, color: "text-blue-600" },
    { label: "Startups", value: "450+", Icon: Rocket, color: "text-purple-600" },
    { label: "Sessions Booked", value: "5,200+", Icon: CalendarCheck2, color: "text-green-600" },
    { label: "Avg Rating", value: "4.8/5", Icon: Star, color: "text-yellow-500" },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ label, value, Icon, color }, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow hover:shadow-md transition"
          >
            <div className={`mx-auto mb-3 inline-flex rounded-full bg-white p-3 ${color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-600 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}