"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">WebSolutions</h2>
          <p className="text-gray-400 mb-4">
            Empowering businesses with top-notch web, mobile, and DevOps
            solutions for a digital future.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/pages/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/pages/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                DevOps & Cloud
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest trends and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition"
            onClick={() => toast.success("Subscribed successfully!")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} WebSolutions. All rights reserved.
      </div>
    </footer>
  );
}
