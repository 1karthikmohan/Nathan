import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteTitle } from "@/content/copy";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteTitle
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
