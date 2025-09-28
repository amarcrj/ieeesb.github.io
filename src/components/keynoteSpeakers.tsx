"use client";

import { motion } from "motion/react";
import { FocusCards } from "@/components/ui/focus-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import {
//   CardContainer,
//   CardBody,
//   CardItem,
// } from "@/components/ui/3d-card-effect";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Calendar } from "lucide-react";

const speakers = [
  {
    name: "Dr. Raj Reddy",
    title: "Turing Award Winner",
    affiliation: "Carnegie Mellon University",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    expertise: "AI & Human-Computer Interaction",
    talk: "The Future of Human-AI Collaboration in Real-time Systems",
    bio: "Pioneering researcher in speech recognition and human-computer interaction with over 40 years of experience.",
    achievements: ["Turing Award 1994", "Legion of Honour", "Padma Bhushan"],
  },
  {
    name: "Dr. Daniela Rus",
    title: "Professor & Director",
    affiliation: "MIT CSAIL",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c27cd5e9?w=600&h=800&fit=crop&crop=face",
    expertise: "Robotics & Autonomous Systems",
    talk: "Distributed Robotics: From Theory to Real-world Applications",
    bio: "Leading expert in robotics, distributed algorithms, and data science with 250+ publications.",
    achievements: ["MIT MacVicar Fellow", "AAAI Fellow", "ACM Fellow"],
  },
  {
    name: "Dr. Kris Pister",
    title: "Professor",
    affiliation: "UC Berkeley",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
    expertise: "Embedded Systems & IoT",
    talk: "Smart Dust and the Internet of Things: Real-time Computing at Scale",
    bio: "Inventor of Smart Dust technology and pioneer in wireless sensor networks and MEMS.",
    achievements: [
      "IEEE Fellow",
      "Smart Dust Inventor",
      "Berkeley Distinguished Teaching",
    ],
  },
];

// Prepare cards for FocusCards component
const focusCards = speakers.map((speaker) => ({
  title: speaker.name,
  src: speaker.image,
  speaker: speaker,
}));

const headerText =
  "Join us for inspiring talks from world-renowned experts in real-time computing, robotics, and intelligent systems.";

// const SpeakerDetailCard = ({
//   speaker,
//   index,
// }: {
//   speaker: typeof speakers[0];
//   index: number;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: index * 0.2 }}
//     className="mb-8"
//   >
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 dark:bg-black/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-gray-200 dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border backdrop-blur-sm">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Speaker Image */}
//           <CardItem translateZ="50" className="w-full md:w-1/3">
//             <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
//               <img
//                 src={speaker.image}
//                 alt={speaker.name}
//                 className="h-full w-full object-cover group-hover/card:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute top-4 left-4">
//                 <Badge className="bg-[#00629B] dark:bg-blue-600 text-white">
//                   {speaker.expertise}
//                 </Badge>
//               </div>
//             </div>
//           </CardItem>

//           {/* Speaker Info */}
//           <CardItem translateZ="60" className="w-full md:w-2/3">
//             <CardItem translateZ="50" className="mb-4">
//               <h3 className="text-2xl font-bold text-[#00629B] dark:text-blue-400">
//                 {speaker.name}
//               </h3>
//               <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-1">
//                 {speaker.title}
//               </p>
//               <p className="text-gray-500 dark:text-gray-400 mb-4">
//                 {speaker.affiliation}
//               </p>
//             </CardItem>

//             <CardItem translateZ="60" className="mb-4">
//               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                 {speaker.bio}
//               </p>
//             </CardItem>

//             {/* Achievements */}
//             <CardItem translateZ="50" className="mb-4">
//               <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
//                 Key Achievements:
//               </h4>
//               <div className="flex flex-wrap gap-2">
//                 {speaker.achievements.map(
//                   (achievement: string, idx: number) => (
//                     <Badge
//                       key={idx}
//                       variant="outline"
//                       className="border-[#00629B] text-[#00629B] dark:border-blue-400 dark:text-blue-400"
//                     >
//                       {achievement}
//                     </Badge>
//                   )
//                 )}
//               </div>
//             </CardItem>

//             {/* Keynote Talk */}
//             <CardItem translateZ="70" className="mb-6">
//               <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-4">
//                 <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
//                   <Calendar className="h-4 w-4 mr-2" />
//                   Keynote Talk:
//                 </h4>
//                 <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
//                   {speaker.talk}
//                 </p>
//               </div>
//             </CardItem>

//             <CardItem translateZ="80">
//               <Button
//                 size="sm"
//                 className="bg-[#00629B] hover:bg-blue-700 text-white"
//                 onClick={() => {}}
//               >
//                 <ExternalLink className="h-4 w-4 mr-2" />
//                 View Profile
//               </Button>
//             </CardItem>
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   </motion.div>
// );

const KeynoteSpeakers = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="speakers-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#00629B"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-[#00629B] dark:text-blue-400">
            Previous Keynote Speakers
          </h2>
          <div className="mx-auto max-w-3xl">
            <TextGenerateEffect
              words={headerText}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Focus Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <FocusCards cards={focusCards} />
        </motion.div>

        {/* Detailed Speaker Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#00629B] dark:text-blue-400 text-center mb-12">
            Meet Our Distinguished Speakers
          </h3>

          <div className="space-y-8">
            {speakers.map((speaker, index) => (
              <SpeakerDetailCard key={index} speaker={speaker} index={index} />
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center space-y-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border border-blue-200 dark:border-gray-600 px-8 py-6 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-[#00629B] dark:text-blue-400" />
              <p className="text-lg font-semibold text-[#00629B] dark:text-blue-400">
                More keynote speakers to be announced soon!
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-md text-center">
              Stay tuned for additional world-class speakers joining our lineup
            </p>
            <Button className="bg-[#00629B] hover:bg-blue-700 text-white">
              Get Notified
            </Button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
