import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "A high-end scrollytelling personal portfolio website.",
};

import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      {/* Background color of #121212 for seamless blending with sequences */}
        <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white font-sans">
        <CustomCursor />
        <Navbar />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
