import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./[locale]/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PKU + THU Joint Postdoc Forum in Astronomy and Astrophysics 2025",
  description: "A two-day event designed to spark new collaborations and foster awareness of ongoing research in astronomy and astrophysics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}