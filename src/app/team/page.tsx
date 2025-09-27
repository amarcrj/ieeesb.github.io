"use client";

import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Filter } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "motion/react";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Our Team",
//   description: "Meet the dedicated team behind IEEE Student Branch IIITNR. Our executive board, technical team, and outreach coordinators working together to advance IEEE's mission.",
//   openGraph: {
//     title: "IEEE Student Branch IIITNR Team",
//     description: "Meet our diverse team of passionate engineers and technology enthusiasts working together to advance IEEE's mission on campus.",
//   },
// };

const teamMembers = {
  executive: [
    {
      name: "Sarah Chen",
      position: "Chairperson",
      year: "Senior",
      major: "Computer Engineering",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c27cd5e9?w=300&h=300&fit=crop&crop=face",
      bio: "Leading IEEE Student Branch initiatives in AI and robotics research",
      email: "sarah.chen@ieee.org",
      linkedin: "#",
      github: "#",
      team: "executive",
    },
    {
      name: "Michael Rodriguez",
      position: "Vice Chairperson",
      year: "Junior",
      major: "Electrical Engineering",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about sustainable energy systems and power electronics",
      email: "michael.r@ieee.org",
      linkedin: "#",
      github: "#",
      team: "executive",
    },
    {
      name: "Emily Zhang",
      position: "Secretary",
      year: "Sophomore",
      major: "Software Engineering",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing technical workshops and maintaining branch communications",
      email: "emily.zhang@ieee.org",
      linkedin: "#",
      github: "#",
      team: "executive",
    },
    {
      name: "David Kumar",
      position: "Treasurer",
      year: "Junior",
      major: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Managing branch finances and coordinating industry partnerships",
      email: "david.kumar@ieee.org",
      linkedin: "#",
      github: "#",
      team: "executive",
    },
  ],
  social_media: [
    {
      name: "Priya Sharma",
      position: "Social Media Manager",
      year: "Sophomore",
      major: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
      bio: "Managing our online presence and social media campaigns",
      email: "priya.s@ieee.org",
      linkedin: "#",
      github: "#",
      team: "social_media",
    },
    {
      name: "Kevin Lee",
      position: "Content Strategist",
      year: "Junior",
      major: "Communications",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Developing engaging content strategies for social platforms",
      email: "kevin.l@ieee.org",
      linkedin: "#",
      github: "#",
      team: "social_media",
    },
  ],
  content_writer: [
    {
      name: "Lisa Rodriguez",
      position: "Content Writer",
      year: "Junior",
      major: "English Literature",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Creating compelling written content for our publications and website",
      email: "lisa.r@ieee.org",
      linkedin: "#",
      github: "#",
      team: "content_writer",
    },
    {
      name: "Ahmed Hassan",
      position: "Technical Writer",
      year: "Senior",
      major: "Technical Communication",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Specializing in technical documentation and research papers",
      email: "ahmed.h@ieee.org",
      linkedin: "#",
      github: "#",
      team: "content_writer",
    },
  ],
  web_app: [
    {
      name: "Alex Thompson",
      position: "Full Stack Developer",
      year: "Senior",
      major: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Leading web and mobile app development projects",
      email: "alex.t@ieee.org",
      linkedin: "#",
      github: "#",
      team: "web_app",
    },
    {
      name: "Jessica Wu",
      position: "Frontend Developer",
      year: "Junior",
      major: "Web Development",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Creating beautiful and responsive user interfaces",
      email: "jessica.wu@ieee.org",
      linkedin: "#",
      github: "#",
      team: "web_app",
    },
  ],
  graphic_designer: [
    {
      name: "Sofia Martinez",
      position: "Graphic Designer",
      year: "Sophomore",
      major: "Visual Arts",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creating visual identity and promotional materials",
      email: "sofia.m@ieee.org",
      linkedin: "#",
      github: "#",
      team: "graphic_designer",
    },
    {
      name: "Ryan Chen",
      position: "UI/UX Designer",
      year: "Junior",
      major: "Design",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      bio: "Designing user-centered digital experiences",
      email: "ryan.c@ieee.org",
      linkedin: "#",
      github: "#",
      team: "graphic_designer",
    },
  ],
  video_editor: [
    {
      name: "Marcus Johnson",
      position: "Video Editor",
      year: "Junior",
      major: "Media Production",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      bio: "Producing engaging video content for events and promotions",
      email: "marcus.j@ieee.org",
      linkedin: "#",
      github: "#",
      team: "video_editor",
    },
  ],
  sponsorship_marketing: [
    {
      name: "Maria Gonzalez",
      position: "Sponsorship Coordinator",
      year: "Sophomore",
      major: "Business Administration",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Securing partnerships and sponsorships for IEEE events",
      email: "maria.g@ieee.org",
      linkedin: "#",
      github: "#",
      team: "sponsorship_marketing",
    },
    {
      name: "James Wilson",
      position: "Marketing Lead",
      year: "Junior",
      major: "Marketing",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      bio: "Developing marketing strategies and brand awareness campaigns",
      email: "james.wilson@ieee.org",
      linkedin: "#",
      github: "#",
      team: "sponsorship_marketing",
    },
  ],
  hospitality_management: [
    {
      name: "Emma Thompson",
      position: "Event Coordinator",
      year: "Sophomore",
      major: "Event Management",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c27cd5e9?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing and managing IEEE events and conferences",
      email: "emma.t@ieee.org",
      linkedin: "#",
      github: "#",
      team: "hospitality_management",
    },
    {
      name: "Daniel Kim",
      position: "Hospitality Manager",
      year: "Junior",
      major: "Hospitality Management",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Ensuring excellent guest experience at all IEEE events",
      email: "daniel.k@ieee.org",
      linkedin: "#",
      github: "#",
      team: "hospitality_management",
    },
  ],
};

const teamCategories = [
  { key: "all", label: "All Teams" },
  { key: "executive", label: "Executive Committee" },
  { key: "social_media", label: "Social Media Coordinator" },
  { key: "content_writer", label: "Content Writer" },
  { key: "web_app", label: "Website & App" },
  { key: "graphic_designer", label: "Graphic Designer" },
  { key: "video_editor", label: "Video Editor" },
  { key: "sponsorship_marketing", label: "Sponsorship and Marketing" },
  { key: "hospitality_management", label: "Hospitality and Management" },
];

interface TeamMember {
  name: string;
  position: string;
  year: string;
  major: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  team: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <CardContainer containerClassName="py-2">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-4 border">
      {/* Sparkles background */}
      <div className="absolute inset-0 h-full w-full rounded-xl">
        <SparklesCore
          id={`sparkles-${member.name}`}
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={15}
          className="w-full h-full rounded-xl"
          particleColor="#00629B"
        />
      </div>

      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white relative z-10"
      >
        {member.name}
      </CardItem>

      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 relative z-10"
      >
        {member.position}
      </CardItem>

      <CardItem translateZ="100" className="w-full mt-3 relative z-10">
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover/card:shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </CardItem>

      <div className="flex flex-col mt-6 relative z-10">
        <CardItem
          translateZ={20}
          className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2"
        >
          {member.year} • {member.major}
        </CardItem>

        <CardItem
          translateZ={20}
          as="p"
          className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
        >
          {member.bio}
        </CardItem>

        <CardItem translateZ={20} className="flex items-center space-x-3">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-[#00629B] hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={member.linkedin}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-[#0077be] hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={member.github}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

export default function Team() {
  const [selectedFilter, setSelectedFilter] = useState("none");

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#00629B] to-blue-700 dark:from-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-16 text-white overflow-hidden">
          {/* Sparkles Background */}
          <div className="absolute inset-0 h-full w-full">
            <SparklesCore
              id="team-hero-sparkles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#ffffff"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Meet Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg opacity-90 px-4 sm:px-0"
            >
              Our diverse team of passionate engineers and technology
              enthusiasts working together to advance IEEE&apos;s mission on
              campus.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {teamCategories.slice(1).map((category) => (
                <Button
                  key={category.key}
                  onClick={() =>
                    setSelectedFilter(
                      selectedFilter === category.key ? "none" : category.key
                    )
                  }
                  variant={
                    selectedFilter === category.key ? "default" : "outline"
                  }
                  className={`${
                    selectedFilter === category.key
                      ? "bg-[#00629B] hover:bg-blue-700 text-white"
                      : "border-[#00629B] text-[#00629B] hover:bg-[#00629B] hover:text-white"
                  } transition-all duration-200`}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Committee */}
        {(selectedFilter === "none" || selectedFilter === "executive") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Executive Committee
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Leading our student branch with vision, dedication, and
                  technical expertise.
                </p>
              </div>

              <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teamMembers.executive.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Social Media Coordinator */}
        {(selectedFilter === "none" || selectedFilter === "social_media") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Social Media Coordinator
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Managing our online presence and engaging with our community
                  through social platforms.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
                {teamMembers.social_media.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Writer */}
        {(selectedFilter === "none" || selectedFilter === "content_writer") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Content Writer
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Creating compelling written content for our publications,
                  website, and technical documentation.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
                {teamMembers.content_writer.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Website & App */}
        {(selectedFilter === "none" || selectedFilter === "web_app") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Website & App Development
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Building and maintaining our digital platforms and mobile
                  applications.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
                {teamMembers.web_app.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Graphic Designer */}
        {(selectedFilter === "none" ||
          selectedFilter === "graphic_designer") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Graphic Designer
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Creating visual identity, promotional materials, and user
                  interface designs.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
                {teamMembers.graphic_designer.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video Editor */}
        {(selectedFilter === "none" || selectedFilter === "video_editor") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Video Editor
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Producing engaging video content for events, promotions, and
                  educational materials.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 max-w-2xl mx-auto">
                {teamMembers.video_editor.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sponsorship and Marketing */}
        {(selectedFilter === "none" ||
          selectedFilter === "sponsorship_marketing") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Sponsorship and Marketing
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Securing partnerships, sponsorships, and developing marketing
                  strategies for IEEE events.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
                {teamMembers.sponsorship_marketing.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hospitality and Management */}
        {(selectedFilter === "none" ||
          selectedFilter === "hospitality_management") && (
          <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-12 text-center">
                <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">
                  Hospitality and Management
                </h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                  Organizing events, managing guest experiences, and ensuring
                  smooth operations.
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
                {teamMembers.hospitality_management.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Join Us Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#00629B] dark:text-blue-400">
              Want to Join Our Team?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
              We&apos;re always looking for passionate students to join our IEEE
              Student Branch. Whether you&apos;re interested in technical roles,
              event organization, or community outreach, there&apos;s a place
              for you in our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00629B] dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-[#00629B] dark:border-blue-400 text-[#00629B] dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-[#00629B] dark:hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
