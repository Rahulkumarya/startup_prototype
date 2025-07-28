"use client";

import { usePathname } from "next/navigation";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // List of paths where Header/Footer should be hidden
  const hideLayout = ["/pages/web"];

  const shouldHide = hideLayout.includes(pathname);

  return (
    <>
      {!shouldHide && <Header />}
      {children}
       <Footer />

    </>
  );
}
