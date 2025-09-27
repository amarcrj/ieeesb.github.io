import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IEEE Student Branch IIITNR",
    template: "%s | IEEE Student Branch IIITNR"
  },
  description: "IEEE Student Branch at International Institute of Information Technology, Naya Raipur - Fostering technological innovation and professional development among students in electrical engineering, computer science, and related fields.",
  keywords: [
    "IEEE",
    "Student Branch",
    "IIIT Naya Raipur",
    "IIITNR",
    "Electrical Engineering",
    "Computer Science",
    "Technology",
    "Innovation",
    "Research",
    "Engineering",
    "Student Organization",
    "Technical Events",
    "Workshops",
    "Conferences"
  ],
  authors: [{ name: "IEEE Student Branch IIITNR" }],
  creator: "IEEE Student Branch IIITNR",
  publisher: "IEEE Student Branch IIITNR",
  category: "education",
  classification: "Educational Organization",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/1000119890.png", sizes: "32x32", type: "image/png" },
      { url: "/1000119890.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/1000119890.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/1000119890.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ieee-iiitnr.edu.in",
    siteName: "IEEE Student Branch IIITNR",
    title: "IEEE Student Branch IIITNR - Advancing Technology for Humanity",
    description: "IEEE Student Branch at International Institute of Information Technology, Naya Raipur - Fostering technological innovation and professional development among students.",
    images: [
      {
        url: "/1000119890.png",
        width: 1200,
        height: 630,
        alt: "IEEE Student Branch IIITNR Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE Student Branch IIITNR",
    description: "IEEE Student Branch at International Institute of Information Technology, Naya Raipur - Fostering technological innovation and professional development.",
    images: ["/1000119890.png"],
    creator: "@ieee_iiitnr",
    site: "@ieee_iiitnr",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ieee-iiitnr.edu.in",
  },
  metadataBase: new URL("https://ieee-iiitnr.edu.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
