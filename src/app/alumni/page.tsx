import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Linkedin,
  ExternalLink,
  Building,
  MapPin,
  Users,
  Award,
  Mail,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Network",
  description:
    "Connect with IEEE Student Branch IIITNR alumni making impacts across the technology industry. Explore our alumni network, achievements, and career opportunities.",
  openGraph: {
    title: "IEEE Student Branch IIITNR Alumni Network",
    description:
      "Our graduates are making significant impacts across the technology industry, from leading research at top companies to founding innovative startups.",
  },
};

const featuredAlumni = [
  {
    name: "Dr. Jennifer Martinez",
    graduation: "Class of 2018",
    position: "Senior AI Research Scientist",
    company: "Google DeepMind",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c27cd5e9?w=300&h=300&fit=crop&crop=face",
    bio: "Leading research in neural architecture search and efficient deep learning models. Published 25+ papers in top-tier AI conferences.",
    achievements: ["Nature AI Paper", "IEEE Fellow", "40 Under 40"],
    linkedin: "#",
    featured: true,
  },
  {
    name: "Mark Thompson",
    graduation: "Class of 2017",
    position: "Co-Founder & CTO",
    company: "TechFlow Robotics",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Building autonomous robots for warehouse automation. Company valued at $50M with 100+ employees.",
    achievements: [
      "Forbes 30 Under 30",
      "$20M Series A",
      "IEEE Entrepreneur Award",
    ],
    linkedin: "#",
    featured: true,
  },
  {
    name: "Dr. Priya Sharma",
    graduation: "Class of 2019",
    position: "Principal Engineer",
    company: "Tesla",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Leading battery management system development for Tesla's next-generation vehicles. Expert in power electronics.",
    achievements: [
      "15+ Patents",
      "Tesla Excellence Award",
      "IEEE Power Electronics Award",
    ],
    linkedin: "#",
    featured: true,
  },
];

const alumniByYear = [
  {
    year: "Class of 2023",
    count: 45,
    highlights: [
      "12 joined FAANG companies",
      "5 started their own companies",
      "8 pursuing PhD",
    ],
  },
  {
    year: "Class of 2022",
    count: 52,
    highlights: [
      "15 in tech leadership roles",
      "3 IEEE award recipients",
      "10 published researchers",
    ],
  },
  {
    year: "Class of 2021",
    count: 38,
    highlights: [
      "20 in senior positions",
      "6 successful entrepreneurs",
      "12 PhD graduates",
    ],
  },
  {
    year: "Class of 2020",
    count: 41,
    highlights: [
      "25 industry leaders",
      "4 startup founders",
      "15 research publications",
    ],
  },
];

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    count: 15,
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    count: 12,
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    count: 8,
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    count: 6,
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    count: 10,
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    count: 7,
  },
];

interface Alumni {
  name: string;
  graduation: string;
  position: string;
  company: string;
  location: string;
  image: string;
  bio: string;
  achievements: string[];
  linkedin: string;
  featured?: boolean;
}

const AlumniCard = ({ alumni }: { alumni: Alumni }) => (
  <Card
    className={`group overflow-hidden transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-700 border dark:border-gray-600 ${
      alumni.featured ? "ring-2 ring-[#00629B] ring-opacity-50" : ""
    }`}
  >
    <CardContent className="p-0">
      <div className="relative">
        <div className="relative h-[280px] overflow-hidden">
          <Image
            src={alumni.image}
            alt={alumni.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          {alumni.featured && (
            <Badge className="absolute left-4 top-4 bg-[#00629B] dark:bg-blue-600 text-white">
              FEATURED
            </Badge>
          )}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg font-bold mb-1">{alumni.name}</h3>
            <p className="text-sm opacity-90">{alumni.graduation}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-[#00629B] dark:text-blue-400 mb-1">
            {alumni.position}
          </h4>
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
            <Building className="mr-2 h-4 w-4" />
            {alumni.company}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
            <MapPin className="mr-2 h-4 w-4" />
            {alumni.location}
          </div>
        </div>

        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {alumni.bio}
        </p>

        <div className="mb-4">
          <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
            Key Achievements:
          </h5>
          <div className="flex flex-wrap gap-2">
            {alumni.achievements.map((achievement: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
              >
                {achievement}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={alumni.linkedin}
            className="flex items-center text-[#00629B] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            <span className="text-sm">Connect</span>
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            <span className="text-sm">Profile</span>
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Alumni() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-[180px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#00629B] to-blue-700 dark:from-gray-800 dark:to-gray-900 py-8 sm:py-12 lg:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              IEEE Alumni Network
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg opacity-90 px-4 sm:px-0">
              Our graduates are making significant impacts across the technology
              industry, from leading research at top companies to founding
              innovative startups.
            </p>
          </div>
        </section>

        {/* Featured Alumni */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B] dark:text-blue-400">
                Featured Alumni
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
                Meet some of our distinguished graduates who are leading
                innovation and making significant contributions to their fields.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredAlumni.map((alumni, index) => (
                <AlumniCard key={index} alumni={alumni} />
              ))}
            </div>
          </div>
        </section>

        {/* Alumni by Graduation Year */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B] dark:text-blue-400">
                Alumni by Class
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
                Track record of our graduates across different years and their
                achievements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {alumniByYear.map((yearData, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all bg-white dark:bg-gray-700 border dark:border-gray-600"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#00629B] dark:text-blue-400 mb-2">
                        {yearData.year}
                      </h3>
                      <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                        <Users className="mr-2 h-5 w-5" />
                        <span className="text-lg font-semibold">
                          {yearData.count} Graduates
                        </span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                        Highlights:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {yearData.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#00629B] dark:text-blue-400 mr-1">
                              •
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Where They Work */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B] dark:text-blue-400">
                Where Our Alumni Work
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
                Our graduates are employed at leading technology companies
                worldwide.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {companies.map((company, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-all bg-white dark:bg-gray-700 border dark:border-gray-600"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="relative h-12 w-20 flex-shrink-0">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {company.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {company.count} alumni
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Network Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B] dark:text-blue-400">
                Alumni Network Benefits
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center group hover:shadow-lg transition-all bg-white dark:bg-gray-700 border dark:border-gray-600">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-blue-100 dark:bg-blue-800 p-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors">
                      <Users className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                    Mentorship
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Connect with experienced alumni for career guidance and
                    advice
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-lg transition-all bg-white dark:bg-gray-700 border dark:border-gray-600">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-green-100 dark:bg-green-800 p-3 group-hover:bg-green-200 dark:group-hover:bg-green-700 transition-colors">
                      <Building className="h-8 w-8 text-green-600 dark:text-green-300" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                    Job Opportunities
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Access exclusive job postings and referrals from our network
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-lg transition-all bg-white dark:bg-gray-700 border dark:border-gray-600">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-purple-100 dark:bg-purple-800 p-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-700 transition-colors">
                      <Award className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                    Recognition
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Showcase your achievements and get recognized in our
                    community
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-16 bg-[#00629B] dark:bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">Stay Connected</h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Keep in touch with your alma mater and fellow alumni. Update your
              information and join our active alumni community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00629B] dark:bg-gray-700 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4" />
                Update Contact Info
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00629B] dark:hover:bg-gray-700 dark:hover:text-white transition-colors">
                Join Alumni Network
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
