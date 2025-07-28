"use client";

import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useState } from "react";
import Founders from "../../data/Founders";
import WebDevelopment from "../../../screen/WebDevelopment";

export default function FounderDetails() {
  const { id } = useParams();
  const selectedFounder = Founders.find((f) => f.id.toString() === id);

  const [mode, setMode] = useState("online");
  const [selectedTime, setSelectedTime] = useState("");
  const [price, setPrice] = useState(selectedFounder.price);

  if (!selectedFounder) return <p>Founder not found</p>;

  // Handle mode change & update price
  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    setPrice(
      selectedMode === "offline"
        ? selectedFounder.price + 20
        : selectedFounder.price
    );
  };

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:30 AM - 12:30 PM",
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM",
    "6:00 PM - 7:00 PM",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen text-black">
      <WebDevelopment />

      <div className="flex justify-center py-8 px-4">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 overflow-y-auto max-h-[90vh] custom-scroll">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
            <img
              src={selectedFounder.image}
              alt={selectedFounder.name}
              className="w-40 h-40 rounded-full border-4 border-green-500 object-cover shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold">{selectedFounder.name}</h2>
              <p className="text-gray-700 text-lg">{selectedFounder.skills}</p>
              <p className="text-sm text-gray-500">
                {selectedFounder.languages}
              </p>
              <p className="text-sm text-gray-500">
                Exp: {selectedFounder.experience} Years
              </p>
              <p className="text-2xl font-bold text-green-600 mt-4">
                Rs{price}/hr
              </p>
            </div>
          </div>

          {/* Mode Selection */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Select Mode</h3>
            <div className="flex gap-4">
              {["online", "offline"].map((m) => (
                <button
                  key={m}
                  className={`px-5 py-3 rounded-xl border text-lg font-medium transition ${
                    mode === m
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-green-100"
                  }`}
                  onClick={() => handleModeChange(m)}
                >
                  {m === "online" ? "Online" : "Offline (+$20)"}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Select Time Slot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 rounded-xl border text-center text-lg font-medium transition ${
                    selectedTime === slot
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-green-100"
                  }`}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="mt-8">
            <button
              disabled={!selectedTime}
              className={`w-full px-6 py-4 rounded-xl text-xl font-bold transition ${
                selectedTime
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={() =>
                alert(
                  `✅ Booking confirmed with ${
                    selectedFounder.name
                  } (${mode.toUpperCase()}) at ${selectedTime} for $${price}`
                )
              }
            >
              {selectedTime ? "Book Now" : "Select a Time Slot"}
            </button>
          </div>

          {/* About Me */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="text-gray-600 text-lg">
              {selectedFounder.about ||
                "This expert specializes in advanced solutions for web, mobile, and cloud platforms, delivering high-quality services globally."}
            </p>
          </div>

          {/* Ratings & Reviews */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Rating & Reviews</h3>
            <div className="flex items-center gap-4 mt-4">
              <div className="text-3xl font-bold">{selectedFounder.rating}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(selectedFounder.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } text-2xl`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Custom Scrollbar Hidden */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
      `}</style>
    </div>
  );
}
