<<<<<<< HEAD
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Longcovid",
  description: "Career Horizons Project for Individuals with Long COVID",
=======
"use client"; // This makes the component a Client Component

import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "Long Covid Patients",
  description: "Long Covid Patients",
>>>>>>> f0ca30c (Checkpoint after AI response (Message ID: e2e6e405-d84d-4ff3-b98c-6082fa5d64f7))
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body>
        {/* Skip Links */}
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#main-menu" className="skip-link">Skip to menu</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
        <div id="__next">
          <main id="main-content" className="pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
=======
      <html lang="en">
        <body>
          <main className="relative overflow-hidden">
            {children}
          </main>
        </body>
      </html>
>>>>>>> f0ca30c (Checkpoint after AI response (Message ID: e2e6e405-d84d-4ff3-b98c-6082fa5d64f7))
  );
}