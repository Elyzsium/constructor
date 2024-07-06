import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/nav";

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
      <body className={`min-h-screen bg-slate-200 grid ${inter.className}`}>
        {/* <Nav /> */}
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
