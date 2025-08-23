import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen, Target, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about IEEE Student Branch IIITNR - Our mission, vision, history, and core values. Discover how we foster technological innovation and professional excellence among students.",
  openGraph: {
    title: "About IEEE Student Branch IIITNR",
    description: "Discover our mission to foster technological innovation and professional excellence among students at IIIT Naya Raipur.",
  },
};

const stats = [
  {
    number: "400K+",
    label: "Members Worldwide",
    icon: Users
  },
  {
    number: "160+",
    label: "Countries",
    icon: Globe
  },
  {
    number: "3K+",
    label: "Student Branches",
    icon: BookOpen
  },
  {
    number: "1884",
    label: "Founded",
    icon: Award
  }
];

const values = [
  {
    title: "Innovation",
    description: "Fostering technological advancement and breakthrough discoveries",
    icon: Lightbulb,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Excellence",
    description: "Maintaining the highest standards in technical and professional achievements",
    icon: Award,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Integrity",
    description: "Upholding ethical principles and professional responsibility",
    icon: Target,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Community",
    description: "Building global networks of technology professionals and researchers",
    icon: Users,
    color: "bg-orange-100 text-orange-600"
  }
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#00629B] to-blue-700 dark:from-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
              <div className="text-center lg:text-left">
                <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  About IEEE Student Branch IIITNR
                </h1>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed opacity-90">
                  IEEE Student Branch at International Institute of Information Technology, Naya Raipur 
                  is a dynamic community of technology enthusiasts, fostering innovation and 
                  professional development among students in electrical engineering, computer 
                  science, and related fields.
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="h-1 w-12 sm:w-16 bg-white"></div>
                  <p className="text-base sm:text-lg lg:text-xl font-semibold">Advancing Technology for Humanity</p>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                  alt="IEEE Technology"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center group hover:shadow-lg transition-all bg-white dark:bg-gray-700 border dark:border-gray-600">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-[#00629B] dark:bg-blue-600 p-3">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-2 text-3xl font-bold text-[#00629B] dark:text-blue-400">
                        {stat.number}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#00629B] dark:text-blue-400">Our Mission</h2>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To foster technological innovation and professional excellence among 
                  students at IIIT Naya Raipur. We create a collaborative environment where 
                  future engineers and technologists can develop their skills, explore 
                  cutting-edge research, and contribute to society&apos;s advancement.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Through workshops, competitions, research projects, and industry 
                  connections, we prepare our members to become leaders in the 
                  rapidly evolving technology landscape.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#00629B] dark:text-blue-400">Our Vision</h2>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To be the premier student organization at IIIT Naya Raipur, recognized 
                  for producing exceptional engineers and innovators who contribute 
                  significantly to technological advancement and societal development.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We envision our members as future leaders who will drive 
                  innovation in artificial intelligence, cybersecurity, embedded 
                  systems, and emerging technologies, making IIIT Naya Raipur a hub 
                  of technological excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B] dark:text-blue-400">Our Core Values</h2>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 px-4 sm:px-0">
                These fundamental principles guide our organization and shape our approach 
                to technological advancement and professional development.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-700 border dark:border-gray-600">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="mb-4 flex justify-center">
                        <div className={`rounded-full p-3 ${value.color} dark:bg-gray-600 dark:text-white`}>
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                  alt="IEEE History"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-3xl font-bold text-[#00629B] dark:text-blue-400">Our Rich History</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">1884 - Foundation</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Founded as the American Institute of Electrical Engineers (AIEE)
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">1963 - IEEE Formation</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      AIEE merged with the Institute of Radio Engineers (IRE) to form IEEE
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Today - Global Impact</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Leading technological innovation across 160+ countries with 400,000+ members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 sm:py-12 lg:py-16 bg-[#00629B] dark:bg-gray-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold">Join the IEEE Community</h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Become part of the world&apos;s largest technical professional organization 
              and contribute to advancing technology for humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00629B] dark:bg-gray-700 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                Become a Member
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00629B] dark:hover:bg-gray-700 dark:hover:text-white transition-colors">
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