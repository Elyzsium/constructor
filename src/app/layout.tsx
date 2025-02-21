import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create constructor App",
  description: "Generated by constructor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-200 grid ${inter.className}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
