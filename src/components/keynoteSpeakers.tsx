import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const speakers = [
  {
    name: "Dr. Raj Reddy",
    title: "Turing Award Winner",
    affiliation: "Carnegie Mellon University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    expertise: "AI & Human-Computer Interaction",
    talk: "The Future of Human-AI Collaboration in Real-time Systems"
  },
  {
    name: "Dr. Daniela Rus",
    title: "Professor & Director",
    affiliation: "MIT CSAIL",
    image: "https://images.unsplash.com/photo-1494790108755-2616c27cd5e9?w=300&h=300&fit=crop&crop=face",
    expertise: "Robotics & Autonomous Systems",
    talk: "Distributed Robotics: From Theory to Real-world Applications"
  },
  {
    name: "Dr. Kris Pister",
    title: "Professor",
    affiliation: "UC Berkeley",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    expertise: "Embedded Systems & IoT",
    talk: "Smart Dust and the Internet of Things: Real-time Computing at Scale"
  }
];

const KeynoteSpeakers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B]">
            Keynote Speakers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Join us for inspiring talks from world-renowned experts in real-time computing, 
            robotics, and intelligent systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="mb-2 bg-[#00629B]">
                        {speaker.expertise}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#00629B]">
                    {speaker.name}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-gray-600">
                    {speaker.title}
                  </p>
                  <p className="mb-4 text-sm text-gray-500">
                    {speaker.affiliation}
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-800">
                      Keynote Talk:
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {speaker.talk}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-lg bg-blue-50 px-6 py-4">
            <div className="mr-4 h-3 w-3 rounded-full bg-[#00629B]"></div>
            <p className="text-sm text-[#00629B] font-medium">
              More keynote speakers to be announced soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;