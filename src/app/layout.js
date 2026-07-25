import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobilePopup from "@/components/MobilePopup";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Eagle Fiber Internet | Compare Fiber, Cable & TV Deals",
  description:
    "Eagle Fiber LLC helps you compare internet, TV, and phone plans from trusted providers. Independent comparison and enrollment assistance — not a carrier.",
  keywords:
    "Eagle Fiber Internet, compare internet plans, fiber internet deals, cable TV, Xfinity, AT&T, Spectrum, Houston",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#071018] text-[#d6dde8]">
        <Header />
        <MobilePopup />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
