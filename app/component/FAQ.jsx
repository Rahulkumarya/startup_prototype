"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "How does Foundora connect founders with experts?",
    a: "Browse experts by domain, view profiles, and book 1:1 sessions instantly with real-time availability.",
  },
  {
    q: "Is this a paid platform?",
    a: "We provide both free community access and paid expert sessions. Pricing varies by expert.",
  },
  {
    q: "Can I reschedule a session?",
    a: "Yes, sessions can be rescheduled up to 24 hours before the start time without any charge.",
  },
  {
    q: "Do you offer refunds?",
    a: "Full refunds are available if the expert does not join or if you cancel within the permitted period.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-xl border bg-gray-50">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
              >
                <span className="font-semibold text-gray-900">{item.q}</span>
                {openIdx === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`px-4 overflow-hidden transition-all ${openIdx === idx ? "max-h-40 pb-4" : "max-h-0"}`}>
                <p className="text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}