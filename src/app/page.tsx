import FeaturedBoard from "@/components/featuredBoard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ImageCarousel from "@/components/imageCarousel";
import AboutSection from "@/components/aboutSection";
import KeynoteSpeakers from "@/components/keynoteSpeakers";
import ImportantDates from "@/components/importantDates";
import VenueLocation from "@/components/venueLocation";
import CallForPapers from "@/components/callForPapers";
import Sponsors from "@/components/sponsors";
import ProgramSchedule from "@/components/programSchedule";
import { isUsedElsewhere } from "@/lib/componentUsageTracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "IEEE Student Branch IIITNR - Welcome to our Technology Innovation Hub. Join our community of technology enthusiasts fostering innovation and professional development.",
  openGraph: {
    title: "IEEE Student Branch IIITNR - Home",
    description:
      "Welcome to IEEE Student Branch at IIIT Naya Raipur - Your gateway to technological innovation and professional development.",
  },
};

// Component mapping for dynamic filtering
const availableComponents = {
  ImageCarousel,
  AboutSection,
  ImportantDates,
  // CallForPapers,
  KeynoteSpeakers,
  // ProgramSchedule,
  VenueLocation,
  // Sponsors,
  FeaturedBoard,
};

export default function Home() {
  // Filter components - only show if they're not used elsewhere
  const componentsToShow = Object.entries(availableComponents).filter(
    ([name]) => !isUsedElsewhere(name)
  );

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-[104px]">
        {" "}
        {/* Height of header: 40px (top bar) + 80px (main header) - 16px overlap */}
        {componentsToShow.map(([name, Component]) => (
          <Component key={name} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
