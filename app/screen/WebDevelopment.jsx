"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { serviceTypes, getPackagesFor } from "../component/data/services";

export default function WebDevelopment() {
  const [activeType, setActiveType] = useState("web");

  const activePackages = useMemo(() => getPackagesFor(activeType), [activeType]);
  const activeTypeMeta = useMemo(
    () => serviceTypes.find((t) => t.key === activeType),
    [activeType]
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Build With Confidence</h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Modern web, mobile, AI, and cloud services. Pick a service type and a
          package to get started.
        </p>
      </section>

      {/* Service Types */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Service Types</h2>
          <Link href="/pages/contact" className="text-blue-600 hover:underline">
            Contact us
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {serviceTypes.map((type) => {
            const isActive = type.key === activeType;
            return (
              <button
                key={type.key}
                onClick={() => setActiveType(type.key)}
                className={`group text-left rounded-xl p-4 border transition-all hover:-translate-y-1 hover:shadow ${
                  isActive
                    ? "bg-white border-blue-500 shadow"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <div className="font-semibold text-gray-900">{type.title}</div>
                <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {type.description}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeTypeMeta?.title} Packages
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Transparent pricing with flexible tiers. Upgrade anytime.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {activePackages.map((pkg) => (
              <div
                key={pkg.tier}
                className={`relative rounded-2xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  pkg.highlighted
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 right-6 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <div className="mb-4">
                  <div className="text-sm uppercase tracking-wide text-gray-600">
                    {pkg.tier}
                  </div>
                  <div className="flex items-end gap-1 mt-1">
                    <div className="text-3xl font-bold text-gray-900">${pkg.priceMonthly}</div>
                    <div className="text-gray-500 mb-1">/mo</div>
                  </div>
                  <div className="text-sm text-gray-600">{pkg.subtitle}</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full py-2.5 rounded-md font-medium transition ${
                    pkg.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-900 text-white hover:bg-black"
                  }`}>
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 text-sm text-gray-500">
            Prices shown are for demonstration only.
          </div>
        </div>
      </section>
    </div>
  );
}
