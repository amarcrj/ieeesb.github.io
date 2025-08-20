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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" >
      <Header />
      <main>
        <ImageCarousel />
        <AboutSection />
        <ImportantDates />
        <CallForPapers />
        <KeynoteSpeakers />
        <ProgramSchedule />
        <VenueLocation />
        <Sponsors />
        <FeaturedBoard />
      </main>
      <Footer />
    </div>
  );
}
