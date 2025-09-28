"use client";

import { motion } from "motion/react";
import { HeroParallax } from "@/components/ui/hero-parallax";
// import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import {
//   CardContainer,
//   CardBody,
//   CardItem,
// } from "@/components/ui/3d-card-effect";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Plane,
  Car,
  Train,
  Hotel,
  Utensils,
  // Navigation,
  // Clock,
  // Wifi,
  // Calendar,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// Venue images for Hero Parallax
const venueImages = [
  {
    title: "Grand Conference Center - Main Auditorium",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    title: "Modern Exhibition Hall",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
  },
  {
    title: "Tech Innovation Plaza",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    title: "Silicon Valley Skyline",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  },
  {
    title: "Conference Networking Area",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  },
  {
    title: "High-tech Meeting Rooms",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
  },
  {
    title: "Research Demonstration Area",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
  },
  {
    title: "Innovation Workshop Space",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
  },
  {
    title: "Tech Campus Courtyard",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    title: "Conference Reception Area",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
  },
  {
    title: "Breakout Session Rooms",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
  },
  {
    title: "Tech Venue Exterior",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
  },
  {
    title: "Conference Center Lobby",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop",
  },
  {
    title: "Modern Tech Facilities",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
  },
  {
    title: "Silicon Valley Innovation Hub",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
];

// const travelOptions = [
//   {
//     icon: Plane,
//     title: "Airport Access",
//     subtitle: "San Francisco International",
//     details: "25 minutes drive",
//     description: "Direct shuttle service available",
//     color: "from-blue-400 to-blue-600",
//   },
//   {
//     icon: Train,
//     title: "Public Transit",
//     subtitle: "Metro Station",
//     details: "5 minutes walk",
//     description: "Multiple transit lines converge nearby",
//     color: "from-green-400 to-green-600",
//   },
//   {
//     icon: Car,
//     title: "Parking",
//     subtitle: "On-site garage",
//     details: "500 spaces available",
//     description: "Valet and self-parking options",
//     color: "from-purple-400 to-purple-600",
//   },
//   {
//     icon: Hotel,
//     title: "Accommodation",
//     subtitle: "Partner hotels",
//     details: "Special conference rates",
//     description: "10+ partner hotels within 2 miles",
//     color: "from-orange-400 to-orange-600",
//   },
// ];

// const venueFeatures = [
//   { icon: Calendar, feature: "500+ capacity main auditorium" },
//   { icon: Wifi, feature: "High-speed WiFi throughout" },
//   { icon: Navigation, feature: "Full AV equipment & live streaming" },
//   { icon: MapPin, feature: "Accessible facilities & parking" },
//   { icon: Utensils, feature: "On-site dining & catering" },
//   { icon: Clock, feature: "Extended hours for networking" },
// ];

const headerText =
  "Join us at a world-class conference venue in the heart of Silicon Valley's vibrant tech ecosystem, perfectly designed for innovation, networking, and collaboration.";

// const TravelCard = ({ option, index }: { option: any; index: number }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.1 }}
//     className="group"
//   >
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 dark:bg-black/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] border-gray-200 dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border backdrop-blur-sm">
//         <CardItem translateZ="50" className="text-center">
//           <div
//             className={`inline-flex p-4 rounded-full bg-gradient-to-r ${option.color} shadow-lg mb-4`}
//           >
//             <option.icon className="h-8 w-8 text-white" />
//           </div>
//         </CardItem>

//         <CardItem translateZ="60" className="text-center mb-4">
//           <h3 className="text-xl font-bold text-[#00629B] dark:text-blue-400 mb-2">
//             {option.title}
//           </h3>
//           <p className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
//             {option.subtitle}
//           </p>
//           <p className="text-sm text-gray-600 dark:text-gray-300">
//             {option.details}
//           </p>
//         </CardItem>

//         <CardItem translateZ="70" className="text-center">
//           <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
//             {option.description}
//           </p>
//         </CardItem>
//       </CardBody>
//     </CardContainer>
//   </motion.div>
// );

// Custom Header for Hero Parallax
const VenueHeader = () => (
  <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-7xl font-bold text-[#00629B] dark:text-blue-400 mb-6">
        Venue & Location
      </h1>
      <div className="max-w-4xl mx-auto">
        <TextGenerateEffect
          words={headerText}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
        />
      </div>
    </motion.div>
  </div>
);

const VenueLocation = () => {
  return (
    <section className="relative">
      {/* Hero Parallax Section */}
      <div className="relative">
        <HeroParallax products={venueImages} />
        {/* Custom Header Overlay */}
        <div className="absolute top-0 left-0 w-full z-10">
          <VenueHeader />
        </div>
      </div>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#00629B] dark:text-blue-400">
              Venue & Location
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              Join us at a world-class conference venue in the heart of a
              vibrant tech hub, perfectly situated for networking and
              collaboration.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Venue Details */}
            <div className="space-y-6">
              <Card className="overflow-hidden bg-white dark:bg-gray-700 border dark:border-gray-600">
                <CardContent className="p-0">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                      alt="Conference Venue"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">
                          Grand Conference Center
                        </h3>
                        <p className="text-lg">Premium Venue for Innovation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#00629B] dark:text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Innovation Drive
                      <br />
                      Tech District, Silicon Valley
                      <br />
                      CA 94000, United States
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-6">
                  <h4 className="text-lg font-semibold text-[#00629B] mb-3">
                    Venue Features
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• State-of-the-art auditorium with 500+ capacity</li>
                    <li>• Multiple breakout rooms for workshops and panels</li>
                    <li>• High-speed WiFi and full AV equipment</li>
                    <li>• Exhibition space for demos and networking</li>
                    <li>• Accessible facilities and parking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Travel & Accommodation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#00629B]">
                Travel & Stay
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="group transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <Plane className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Airport
                    </h4>
                    <p className="text-sm text-gray-600">
                      San Francisco International
                      <br />
                      25 minutes drive
                    </p>
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <Train className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Public Transit
                    </h4>
                    <p className="text-sm text-gray-600">
                      Metro Station
                      <br />5 minutes walk
                    </p>
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <Car className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Parking
                    </h4>
                    <p className="text-sm text-gray-600">
                      On-site garage
                      <br />
                      500 spaces available
                    </p>
                  </CardContent>
                </Card>

                <Card className="group transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <Hotel className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Hotels</h4>
                    <p className="text-sm text-gray-600">
                      Partner hotels
                      <br />
                      Special rates available
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Utensils className="h-6 w-6 text-[#00629B]" />
                    <h4 className="text-lg font-semibold text-[#00629B]">
                      Dining Options
                    </h4>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                    <div>
                      <p className="font-medium mb-1">On-site Dining</p>
                      <p>Café and restaurant facilities</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Nearby Restaurants</p>
                      <p>15+ dining options within walking distance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-4">
                <Button className="bg-[#00629B] hover:bg-blue-700">
                  View Interactive Map
                </Button>
                <p className="text-sm text-gray-600">
                  Detailed directions and local information will be provided to
                  registered attendees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VenueLocation;
