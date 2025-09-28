"use client";

import FeaturedBoard from "@/components/featuredBoard";
import Footer from "@/components/footer";
import { EnhancedHero, TechShowcase } from "@/components/enhancedHero";
import AboutSection from "@/components/aboutSection";
import KeynoteSpeakers from "@/components/keynoteSpeakers";
import VenueLocation from "@/components/venueLocation";
import { isUsedElsewhere } from "@/lib/componentUsageTracker";

// Component mapping for dynamic filtering
const availableComponents = {
  AboutSection,
  // ImportantDates,
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
      <main>
        <EnhancedHero />
        <TechShowcase />
        {componentsToShow.map(([name, Component]) => (
          <Component key={name} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
