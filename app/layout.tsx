import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Longcovid",
  description: "Career Horizons Project for Individuals with Long COVID",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}