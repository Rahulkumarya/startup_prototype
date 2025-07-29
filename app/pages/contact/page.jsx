"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

export default function ContactPage() {

 const handleSubmit = (e) => {
   e.preventDefault(); // Prevents page reload
  
   toast.success("✅ Message sent successfully!" );
   // You can also clear the form or integrate backend logic here
 };



  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-50 p-6 flex flex-col items-center text-black">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
      <p className="text-gray-600 max-w-xl text-center mb-10">
        We'd love to hear from you. Whether you have a question about features,
        pricing, need a demo, or anything else — our team is ready to answer all
        your questions.
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" />
            <span className="text-gray-700 font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600" />
            <span className="text-gray-700 font-medium">
              contact@yourcompany.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" />
            <span className="text-gray-700 font-medium">
              Munger, Bihar, India
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-xl p-6 space-y-4"  onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
