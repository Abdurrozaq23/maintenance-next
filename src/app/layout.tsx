import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata untuk seluruh situs (karena hanya ada 1 halaman)
export const metadata: Metadata = {
  title: "Website Sedang Dalam Perbaikan",
  description: "Website sedang dalam pengembangan oleh developer Abdur Rozaq.",
  keywords: "maintenance, website under construction, abdur rozaq, developer",
  authors: [{ name: "Abdur Rozaq" }],
  openGraph: {
    title: "Website Sedang Dalam Perbaikan",
    description: "Mohon maaf, situs sedang dalam pemeliharaan.",
    url: "/",
    locale: "id_ID",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
