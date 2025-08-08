"use client";

import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import Founders from "../../data/Founders";
import WebDevelopment from "../../../screen/WebDevelopment";

export default function FounderDetails() {
  const { id } = useParams();
  const selectedFounder = Founders.find((f) => f.id.toString() === id);

  const [mode, setMode] = useState("online");
  const [selectedTime, setSelectedTime] = useState("");
  const [price, setPrice] = useState(selectedFounder?.price ?? 0);
  const [bookingType, setBookingType] = useState("hourly"); // 'hourly' | 'package'
  const [selectedPackageId, setSelectedPackageId] = useState("");

  if (!selectedFounder) return <p>Founder not found</p>;

  const packages = selectedFounder.packages || [];
  const selectedPackage = useMemo(
    () => packages.find((p) => p.id === selectedPackageId),
    [packages, selectedPackageId]
  );

  // Handle mode change & update price
  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    setPrice(selectedMode === "offline" ? selectedFounder.price + 20 : selectedFounder.price);
  };

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:30 AM - 12:30 PM",
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM",
    "6:00 PM - 7:00 PM",
  ];

  const canBook = bookingType === "hourly" ? Boolean(selectedTime) : Boolean(selectedPackageId);

  const handleBook = () => {
    if (bookingType === "hourly") {
      alert(
        `✅ Booking confirmed with ${selectedFounder.name} (${mode.toUpperCase()}) at ${selectedTime} for Rs ${price}/hr`
      );
    } else if (selectedPackage) {
      alert(
        `✅ Package booked: ${selectedPackage.name} with ${selectedFounder.name} — Rs ${selectedPackage.price} (${selectedPackage.duration})`
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen text-black">
      <WebDevelopment />

      <div className="flex justify-center py-8 px-4">
        <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 overflow-y-auto max-h-[90vh] custom-scroll">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
            <img
              src={selectedFounder.image}
              alt={selectedFounder.name}
              className="w-40 h-40 rounded-full border-4 border-green-500 object-cover shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold">{selectedFounder.name}</h2>
              <p className="text-gray-700 text-lg">{selectedFounder.skills}</p>
              <p className="text-sm text-gray-500">{selectedFounder.languages}</p>
              <p className="text-sm text-gray-500">Exp: {selectedFounder.experience} Years</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {(selectedFounder.industries || []).map((ind) => (
                  <span key={ind} className="text-xs px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full">
                    {ind}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-xl font-bold">{selectedFounder.rating}</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < Math.round(selectedFounder.rating) ? "text-yellow-400" : "text-gray-300"} text-xl`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right">
              {bookingType === "hourly" ? (
                <p className="text-2xl font-bold text-green-600 mt-4">Rs{price}/hr</p>
              ) : selectedPackage ? (
                <div>
                  <div className="text-xs text-gray-500">Selected package</div>
                  <div className="text-lg font-semibold">{selectedPackage.name}</div>
                  <div className="text-2xl font-bold text-green-600">Rs{selectedPackage.price}</div>
                  <div className="text-xs text-gray-500">{selectedPackage.duration}</div>
                </div>
              ) : (
                <p className="text-2xl font-bold text-green-600 mt-4">Select a package</p>
              )}
            </div>
          </div>

          {/* Booking Type Toggle */}
          <div className="mt-6">
            <div className="inline-flex rounded-xl overflow-hidden border">
              {[
                { id: "hourly", label: "Hire by Hour" },
                { id: "package", label: "Package Services" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  className={`px-5 py-3 text-sm font-medium transition ${
                    bookingType === opt.id ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-green-100"
                  }`}
                  onClick={() => setBookingType(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hourly Booking Controls */}
          {bookingType === "hourly" && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Mode Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Select Mode</h3>
                <div className="flex gap-4">
                  {["online", "offline"].map((m) => (
                    <button
                      key={m}
                      className={`px-5 py-3 rounded-xl border text-lg font-medium transition ${
                        mode === m ? "bg-green-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-green-100"
                      }`}
                      onClick={() => handleModeChange(m)}
                    >
                      {m === "online" ? "Online" : "Offline (+20)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Select Time Slot</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`px-4 py-3 rounded-xl border text-center text-lg font-medium transition ${
                        selectedTime === slot ? "bg-green-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-green-100"
                      }`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Package Selection */}
          {bookingType === "package" && (
            <div className="mt-6">
              {packages.length === 0 ? (
                <div className="text-gray-600">No packages available for this provider.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`border rounded-xl p-4 bg-white/70 ${
                        selectedPackageId === pkg.id ? "ring-2 ring-green-500" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-lg font-semibold">{pkg.name}</div>
                          <div className="text-xs text-gray-500">{pkg.duration}</div>
                        </div>
                        <div className="text-2xl font-bold text-green-700">Rs{pkg.price}</div>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">{pkg.description}</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                        {(pkg.deliverables || []).map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <div className="flex gap-2 mt-4">
                        <button
                          className="px-4 py-2 text-sm rounded-md border border-green-600 text-green-700 hover:bg-green-50"
                          onClick={() => setSelectedPackageId(pkg.id)}
                        >
                          Select
                        </button>
                        <button
                          className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                          onClick={() => alert(`${pkg.name}:\n\n${pkg.description}\n\nIncludes: ${pkg.deliverables.join(", ")}`)}
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* About Me */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-gray-600 text-lg">
              {selectedFounder.about ||
                "This expert specializes in advanced solutions for web, mobile, and cloud platforms, delivering high-quality services globally."}
            </p>
          </div>

          {/* Book Now Button */}
          <div className="mt-8">
            <button
              disabled={!canBook}
              className={`w-full px-6 py-4 rounded-xl text-xl font-bold transition ${
                canBook ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleBook}
            >
              {bookingType === "hourly"
                ? selectedTime
                  ? "Book Hourly"
                  : "Select time slot"
                : selectedPackageId
                ? "Book Package"
                : "Select a package"}
            </button>
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
                    className={`${i < Math.round(selectedFounder.rating) ? "text-yellow-400" : "text-gray-300"} text-2xl`}
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
