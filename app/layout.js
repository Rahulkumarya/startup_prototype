import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LayoutWrapper from "./LayoutWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foundora",
  description:
    "Bridging new founders with expert guidance. Fueling startups through real-time mentorship.",
  icons: {
    icon: "/assets/logo.png", // ✅ Make sure this file exists in the /public/assets/ folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>

        {/* ✅ Toast Container here */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
