"use client";

import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Meteors } from "@/components/ui/meteors";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Cpu,
  Zap,
  Brain,
  Globe,
} from "lucide-react";

const aboutText =
  "The IEEE International Conference on Real-time computing and Robotics (RTSI) is a premier international forum bringing together researchers, engineers, and practitioners to share cutting-edge advances in real-time systems, robotics, and intelligent automation technologies.";

const stats = [
  {
    icon: Calendar,
    title: "Conference Dates",
    description: "September 15-17, 2025",
    detail: "3-day international conference",
  },
  {
    icon: MapPin,
    title: "International Venue",
    description: "Grand Conference Center",
    detail: "Silicon Valley Tech Hub",
  },
  {
    icon: Users,
    title: "Global Participants",
    description: "500+ Researchers",
    detail: "From 50+ countries",
  },
  {
    icon: BookOpen,
    title: "Research Tracks",
    description: "8+ Technical Areas",
    detail: "Cutting-edge topics",
  },
];

const researchAreas = [
  {
    icon: Cpu,
    title: "Real-time Computing",
    items: [
      "Real-time systems",
      "Embedded design",
      "Performance optimization",
      "Time-critical apps",
    ],
  },
  {
    icon: Brain,
    title: "Robotics & AI",
    items: [
      "Autonomous systems",
      "ML in robotics",
      "Human-robot interaction",
      "Smart automation",
    ],
  },
  {
    icon: Zap,
    title: "Edge Computing",
    items: [
      "IoT systems",
      "Edge intelligence",
      "Distributed computing",
      "5G networks",
    ],
  },
  {
    icon: Globe,
    title: "Cyber-Physical",
    items: [
      "Smart cities",
      "Industrial IoT",
      "Connected vehicles",
      "Digital twins",
    ],
  },
];

const HeaderIcon = ({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) => (
  <div className="mb-4 flex justify-center">
    <div className="rounded-full bg-gradient-to-r from-[#00629B] to-blue-600 p-4 shadow-lg">
      <Icon className="h-8 w-8 text-white" />
    </div>
  </div>
);

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
  >
    <HeaderIcon icon={stat.icon} />
    <h3 className="mb-2 text-xl font-bold text-[#00629B] dark:text-blue-300 text-center">
      {stat.title}
    </h3>
    <p className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2">
      {stat.description}
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
      {stat.detail}
    </p>
    <Meteors number={5} />
  </motion.div>
);

const ResearchAreaCard = ({
  area,
  className,
}: {
  area: typeof researchAreas[0];
  className?: string;
}) => (
  <BentoGridItem
    title={area.title}
    description={
      <div className="space-y-2">
        {area.items.map((item: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#00629B] dark:bg-blue-400" />
            <span className="text-sm">{item}</span>
          </motion.div>
        ))}
      </div>
    }
    header={<HeaderIcon icon={area.icon} />}
    className={`${className} border-[#00629B]/20 dark:border-blue-400/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70`}
  />
);

const AboutSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* <GridBackground /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00629B] dark:text-blue-400">
            About IEEE RTSI 2025
          </h2>
          <div className="mx-auto max-w-4xl">
            <TextGenerateEffect
              words={aboutText}
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Conference Scope with Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h3 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
            Conference Scope
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Explore diverse research areas at the intersection of technology and
            innovation
          </p>
        </motion.div>

        <BentoGrid className="mx-auto max-w-6xl">
          <ResearchAreaCard area={researchAreas[0]} className="md:col-span-2" />
          <ResearchAreaCard area={researchAreas[1]} className="md:col-span-1" />
          <ResearchAreaCard area={researchAreas[2]} className="md:col-span-1" />
          <ResearchAreaCard area={researchAreas[3]} className="md:col-span-2" />
        </BentoGrid>
      </div>
    </section>
  );
};

export default AboutSection;
