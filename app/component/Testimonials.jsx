"use client";

import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, Finlytics",
    text:
      "The mentorship sessions helped us avoid costly mistakes and ship our MVP 2x faster.",
    avatar: "/assets/logo1.jpg",
  },
  {
    name: "Sara Khan",
    role: "Product Lead, Healthify",
    text:
      "Actionable advice and industry connects — this community is gold for any early-stage team.",
    avatar: "/assets/logo.jpg",
  },
  {
    name: "Rohan Gupta",
    role: "CTO, ShopIQ",
    text:
      "Loved the depth of feedback. The experts truly understand startup constraints.",
    avatar: "/assets/third.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">What Founders Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative rounded-2xl border bg-gray-50 p-6 shadow hover:shadow-lg transition">
              <FaQuoteLeft className="absolute -top-3 left-4 text-blue-600" />
              <p className="mt-4 text-gray-700">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover border" />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}