import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FactYou",
  description: "FactYou is a web app that fights misinformation by analyzing text for fake news using a Next.js frontend and FastAPI backend. Users input text or fetch X posts for real-time predictions, confidence scores, and explanations. With a sleek, responsive design, FactYou promotes truth and critical thinking effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={cn("antialiased relative min-h-screen bg-neutral-900", geistMono.className)}>
        <div className="border-b sticky top-0">
          <Navbar />
        </div>
        <main className="mx-auto max-w-screen-xl px-4">{children}</main>
        <div className="border-t p-4 w-full absolute bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
