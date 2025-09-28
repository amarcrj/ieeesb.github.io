"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight,
//   Calendar,
//   Award,
//   Users,
//   ExternalLink,
//   Clock,
//   MapPin,
// } from "lucide-react";

const featuredAnnouncements = [
  {
    quote:
      "Join us for an exclusive lecture on Smart Grid Technologies by Dr. Emily Jones, featuring cutting-edge research on intelligent power distribution systems and their real-world applications in sustainable energy.",
    name: "Dr. Emily Jones",
    title: "Smart Grid Technologies Lecture",
  },
  {
    quote:
      "Apply now for travel grants to attend the IEEE PES ISGT Asia Conference. These competitive grants support student researchers presenting innovative work in smart grid and energy technologies.",
    name: "IEEE PES ISGT Asia",
    title: "Travel Grant Opportunity",
  },
  {
    quote:
      "Celebrating excellence in engineering: 6 of our distinguished chapter members have been honored as IEEE Life Fellows for their outstanding contributions to electrical engineering and computer science.",
    name: "IEEE Awards Committee",
    title: "Life Fellow Recognition",
  },
  {
    quote:
      "Register for our upcoming workshop on Machine Learning Applications in Real-time Systems. Learn from industry experts and get hands-on experience with cutting-edge ML techniques.",
    name: "IEEE Workshop Series",
    title: "ML in Real-time Systems",
  },
  {
    quote:
      "Nominate outstanding students for the IEEE Student Branch Achievement Award. Recognize those who have demonstrated exceptional leadership and technical excellence in our community.",
    name: "IEEE Student Branch",
    title: "Achievement Award Nominations",
  },
  {
    quote:
      "Join our virtual networking session connecting IEEE members worldwide. Share experiences, collaborate on projects, and build lasting professional relationships across disciplines.",
    name: "IEEE Global Network",
    title: "Virtual Networking Event",
  },
];

// const newsItems = [
//   {
//     category: "CONFERENCE",
//     priority: "HIGH",
//     title: "RTSI 2025 Call for Papers Extended",
//     description: "Extended deadline for paper submissions to IEEE RTSI 2025",
//     date: "March 30, 2025",
//     type: "deadline",
//   },
//   {
//     category: "AWARD",
//     priority: "MEDIUM",
//     title: "Student Research Grant Applications Open",
//     description:
//       "Apply for IEEE research grants supporting innovative student projects",
//     date: "Rolling Basis",
//     type: "opportunity",
//   },
//   {
//     category: "EVENT",
//     priority: "HIGH",
//     title: "Industry Partnership Program Launch",
//     description:
//       "New initiative connecting students with leading tech companies",
//     date: "April 15, 2025",
//     type: "announcement",
//   },
//   {
//     category: "WORKSHOP",
//     priority: "MEDIUM",
//     title: "Technical Skills Development Series",
//     description:
//       "Monthly workshops on emerging technologies and career development",
//     date: "Ongoing",
//     type: "education",
//   },
// ];

const headerText =
  "Stay informed with the latest announcements, opportunities, and achievements from our IEEE Student Branch community.";

// const NewsCard = ({ item, index }: { item: typeof newsItems[0]; index: number }) => {
//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case "HIGH":
//         return "from-red-400 to-red-600";
//       case "MEDIUM":
//         return "from-yellow-400 to-yellow-600";
//       case "LOW":
//         return "from-green-400 to-green-600";
//       default:
//         return "from-blue-400 to-blue-600";
//     }
//   };

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "deadline":
//         return Clock;
//       case "opportunity":
//         return Award;
//       case "announcement":
//         return Users;
//       case "education":
//         return Calendar;
//       default:
//         return ExternalLink;
//     }
//   };

//   const TypeIcon = getTypeIcon(item.type);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="group relative overflow-hidden"
//     >
//       <div className="relative bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-300 hover:scale-105">
//         {/* Background Gradient */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${getPriorityColor(
//             item.priority
//           )} opacity-5 rounded-xl`}
//         />

//         {/* Header */}
//         <div className="relative z-10 mb-4 flex items-start justify-between">
//           <div className="flex items-center space-x-3">
//             <div
//               className={`rounded-full p-2 bg-gradient-to-r ${getPriorityColor(
//                 item.priority
//               )} shadow-lg`}
//             >
//               <TypeIcon className="h-5 w-5 text-white" />
//             </div>
//             <Badge
//               variant="outline"
//               className="border-[#00629B] text-[#00629B] dark:border-blue-400 dark:text-blue-400"
//             >
//               {item.category}
//             </Badge>
//           </div>

//           <Badge
//             className={`${
//               item.priority === "HIGH"
//                 ? "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300"
//                 : item.priority === "MEDIUM"
//                 ? "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300"
//                 : "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300"
//             }`}
//           >
//             {item.priority}
//           </Badge>
//         </div>

//         {/* Content */}
//         <div className="relative z-10">
//           <h3 className="mb-3 text-lg font-bold text-[#00629B] dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
//             {item.title}
//           </h3>

//           <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
//             {item.description}
//           </p>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
//               <MapPin className="h-4 w-4" />
//               <span>{item.date}</span>
//             </div>

//             <Button
//               size="sm"
//               variant="ghost"
//               className="text-[#00629B] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"
//             >
//               <ArrowRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const FeaturedBoard = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900 overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="featured-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={30}
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
            Latest News & Announcements
          </h2>
          <div className="mx-auto max-w-3xl">
            <TextGenerateEffect
              words={headerText}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <InfiniteMovingCards
            items={featuredAnnouncements}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="my-8"
          />
        </motion.div>

        {/* Featured News Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#00629B] dark:text-blue-400 mb-4">
            Priority Updates
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Important deadlines, opportunities, and announcements requiring
            immediate attention
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} index={index} />
          ))}
        </div> */}

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center space-y-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm border border-blue-200/50 dark:border-gray-600/50 px-8 py-8 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-gradient-to-r from-[#00629B] to-blue-600 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#00629B] dark:text-blue-400">
                Stay Connected
              </h4>
            </div>

            <p className="text-gray-600 dark:text-gray-300 max-w-md text-center">
              Subscribe to our newsletter for the latest updates, opportunities,
              and exclusive member content
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#00629B] hover:bg-blue-700 text-white">
                Subscribe to Newsletter
              </Button>
              <Button
                variant="outline"
                className="border-[#00629B] text-[#00629B] dark:border-blue-400 dark:text-blue-400"
              >
                View All Announcements
              </Button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeaturedBoard;
