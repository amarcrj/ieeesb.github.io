import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const teamMembers = {
  executive: [
    {
      name: "Sarah Chen",
      position: "Chairperson",
      year: "Senior",
      major: "Computer Engineering",
      image: "https://images.unsplash.com/photo-1494790108755-2616c27cd5e9?w=300&h=300&fit=crop&crop=face",
      bio: "Leading IEEE Student Branch initiatives in AI and robotics research",
      email: "sarah.chen@ieee.org",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Michael Rodriguez",
      position: "Vice Chairperson",
      year: "Junior",
      major: "Electrical Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about sustainable energy systems and power electronics",
      email: "michael.r@ieee.org",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Emily Zhang",
      position: "Secretary",
      year: "Sophomore",
      major: "Software Engineering",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing technical workshops and maintaining branch communications",
      email: "emily.zhang@ieee.org",
      linkedin: "#",
      github: "#"
    },
    {
      name: "David Kumar",
      position: "Treasurer",
      year: "Junior", 
      major: "Computer Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Managing branch finances and coordinating industry partnerships",
      email: "david.kumar@ieee.org",
      linkedin: "#",
      github: "#"
    }
  ],
  technical: [
    {
      name: "Alex Thompson",
      position: "Technical Lead",
      year: "Senior",
      major: "Robotics Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Leading robotics projects and autonomous systems development",
      email: "alex.t@ieee.org",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Jessica Wu",
      position: "AI/ML Coordinator",
      year: "Junior",
      major: "Data Science",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Organizing machine learning workshops and research collaborations",
      email: "jessica.wu@ieee.org",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ryan Park",
      position: "Hardware Specialist",
      year: "Senior",
      major: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in IoT devices and embedded system design",
      email: "ryan.park@ieee.org",
      linkedin: "#",
      github: "#"
    }
  ],
  outreach: [
    {
      name: "Maria Gonzalez",
      position: "Outreach Coordinator",
      year: "Sophomore",
      major: "Biomedical Engineering",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Connecting with local schools and promoting STEM education",
      email: "maria.g@ieee.org",
      linkedin: "#",
      github: "#"
    },
    {
      name: "James Wilson",
      position: "Industry Relations",
      year: "Junior",
      major: "Industrial Engineering",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      bio: "Building partnerships with technology companies and startups",
      email: "james.wilson@ieee.org",
      linkedin: "#",
      github: "#"
    }
  ]
};

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
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    <CardContent className="p-0">
      <div className="relative">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm opacity-90">{member.position}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{member.year} • {member.major}</p>
          </div>
        </div>
        
        <p className="mb-4 text-sm text-gray-700 leading-relaxed">
          {member.bio}
        </p>
        
        <div className="flex items-center space-x-3">
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-[#00629B] hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a 
            href={member.linkedin}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-[#0077be] hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href={member.github}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#00629B] to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
              Meet Our Team
            </h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Our diverse team of passionate engineers and technology enthusiasts 
              working together to advance IEEE&apos;s mission on campus.
            </p>
          </div>
        </section>

        {/* Executive Board */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B]">
                Executive Board
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700">
                Leading our student branch with vision, dedication, and technical expertise.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.executive.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B]">
                Technical Team
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700">
                Our technical specialists driving innovation in AI, robotics, and embedded systems.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.technical.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Outreach Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B]">
                Outreach & Relations
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700">
                Building bridges with the community and fostering industry partnerships.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
              {teamMembers.outreach.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#00629B]">
              Want to Join Our Team?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-gray-700">
              We&apos;re always looking for passionate students to join our IEEE Student Branch. 
              Whether you&apos;re interested in technical roles, event organization, or community outreach, 
              there&apos;s a place for you in our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#00629B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-[#00629B] text-[#00629B] px-8 py-3 rounded-lg font-semibold hover:bg-[#00629B] hover:text-white transition-colors">
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