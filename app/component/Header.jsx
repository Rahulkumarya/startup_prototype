"use client";
import Link from "next/link";
import { useState } from "react";
import { Bell } from "lucide-react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [expandedCategory, setExpandedCategory] =
 useState(null)

const [showDomainMenu, setShowDomainMenu] = useState(false);


  // Dummy login toggle
  const handleLogin = () => setIsLoggedIn(!isLoggedIn);

  // Toggle category in mobile accordion
 const toggleCategory = (category) => {
   setExpandedCategory(expandedCategory === category ? null : category);
 };


  return (
    <header className="bg-[#0077B5] text-white p-4 flex items-center justify-between relative">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">StartupHub</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 items-center">
        {/* Domain Selector */}
        <div className="relative group">
          <button className="px-3 py-2 hover:bg-blue-700 rounded flex items-center space-x-2">
            <span>Select Domain</span>
            <FaChevronDown size={14} />
          </button>
          {/* Dropdown for Desktop */}
          <div className="absolute top-12 left-0 bg-white text-black shadow-lg rounded-lg w-[400px] p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <h3 className="font-bold text-lg mb-3">Select Your Domain</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Tech */}
              <div>
                <h4 className="font-semibold">Tech</h4>
                <ul className="space-y-1 text-sm">
           
                  <li className="hover:text-blue-600 cursor-pointer">
                    <Link href="/pages/web">Web Development</Link>
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Mobile Apps
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    AI / ML
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Blockchain
                  </li>
                </ul>
              </div>
              {/* Finance */}
              <div>
                <h4 className="font-semibold">Finance</h4>
                <ul className="space-y-1 text-sm">
                  <li className="hover:text-blue-600 cursor-pointer">
                    Accounting
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Investment
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Tax Consulting
                  </li>
                </ul>
              </div>
              {/* Education */}
              <div>
                <h4 className="font-semibold">Education</h4>
                <ul className="space-y-1 text-sm">
                  <li className="hover:text-blue-600 cursor-pointer">
                    Tutoring
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Online Courses
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Content Writing
                  </li>
                </ul>
              </div>
              {/* Marketing */}
              <div>
                <h4 className="font-semibold">Marketing</h4>
                <ul className="space-y-1 text-sm">
                  <li className="hover:text-blue-600 cursor-pointer">SEO</li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Social Media
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Link href="/community" className="hover:underline">
          Community
        </Link>
        <Link href="/resources" className="hover:underline">
          Resources
        </Link>
        <Link href="/library" className="hover:underline">
          Library
        </Link>
      </nav>

      {/* Right (Desktop Auth) */}
      <div className="hidden lg:flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <button className="bg-white text-blue-700 px-4 py-1 rounded">
              Login
            </button>
            <button
              className="bg-[#DB3028] px-4 py-1 rounded"
              onClick={handleLogin}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <Bell className="w-6 h-6 cursor-pointer" />
            <div className="bg-white text-blue-700 px-3 py-1 rounded">
              Profile
            </div>
            <button
              onClick={handleLogin}
              className="bg-gray-800 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#fdfdff] text-black p-4 flex flex-col space-y-4 z-50">
          {/* Toggle for Domains */}
          <button
            className="flex justify-between w-full text-lg font-semibold  pb-2"
            onClick={() => setShowDomainMenu(!showDomainMenu)}
          >
            Select Domain
            {showDomainMenu ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Show domains only if user clicks Select Domain */}
          {showDomainMenu && (
            <div className="mt-3">
              {/* Tech */}
              <div>
                <button
                  className="flex justify-between w-full py-2 text-lg font-semibold"
                  onClick={() => toggleCategory("Tech")}
                >
                  Tech
                  {expandedCategory === "Tech" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategory === "Tech" ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 text-sm space-y-2">
                    <li>Web Development</li>
                    <li>Mobile Apps</li>
                    <li>AI / ML</li>
                    <li>Blockchain</li>
                  </ul>
                </div>
              </div>

              {/* Finance */}
              <div>
                <button
                  className="flex justify-between w-full py-2 text-lg font-semibold"
                  onClick={() => toggleCategory("Finance")}
                >
                  Finance
                  {expandedCategory === "Finance" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategory === "Finance" ? "max-h-32" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 text-sm space-y-2">
                    <li>Accounting</li>
                    <li>Investment</li>
                    <li>Tax Consulting</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <button
                  className="flex justify-between w-full py-2 text-lg font-semibold"
                  onClick={() => toggleCategory("Education")}
                >
                  Education
                  {expandedCategory === "Education" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategory === "Education" ? "max-h-32" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 text-sm space-y-2">
                    <li>Tutoring</li>
                    <li>Online Courses</li>
                    <li>Content Writing</li>
                  </ul>
                </div>
              </div>

              {/* Marketing */}
              <div>
                <button
                  className="flex justify-between w-full py-2 text-lg font-semibold"
                  onClick={() => toggleCategory("Marketing")}
                >
                  Marketing
                  {expandedCategory === "Marketing" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategory === "Marketing" ? "max-h-32" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 text-sm space-y-2">
                    <li>SEO</li>
                    <li>Social Media</li>
                    <li>Branding</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Other Links */}
          <Link href="/community" className="font-[600] text-lg">
            Community
          </Link>
          <Link href="/resources" className="text-lg font-[600]">
            Resources
          </Link>

          {/* Login / Signup Buttons */}
          {!isLoggedIn ? (
            <div className="flex flex-col space-y-3 mt-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold">
                Login
              </button>
              <button className="w-full bg-[#DB3028] text-white py-2 rounded-md text-lg font-semibold">
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-3 mt-4">
              <button className="w-full bg-gray-800 text-white py-2 rounded-md text-lg font-semibold">
                Profile
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full bg-red-500 text-white py-2 rounded-md text-lg font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}

