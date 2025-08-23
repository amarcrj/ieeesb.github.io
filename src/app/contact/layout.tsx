import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with IEEE Student Branch IIITNR. Contact us for membership inquiries, event information, technical support, and collaboration opportunities.",
  openGraph: {
    title: "Contact IEEE Student Branch IIITNR",
    description: "Get in touch with our IEEE Student Branch. We're here to help with membership, events, technical questions, and collaboration opportunities.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}