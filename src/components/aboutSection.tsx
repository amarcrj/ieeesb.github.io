import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B]">
            About IEEE RTSI 2025
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
            The IEEE International Conference on Real-time computing and Robotics (RTSI) 
            is a premier international forum bringing together researchers, engineers, and 
            practitioners to share cutting-edge advances in real-time systems, robotics, 
            and intelligent automation technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <Calendar className="h-12 w-12 text-[#00629B]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#00629B]">Conference Dates</h3>
              <p className="text-gray-600">September 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <MapPin className="h-12 w-12 text-[#00629B]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#00629B]">Location</h3>
              <p className="text-gray-600">International Venue</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-[#00629B]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#00629B]">Participants</h3>
              <p className="text-gray-600">500+ Researchers</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <BookOpen className="h-12 w-12 text-[#00629B]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#00629B]">Tracks</h3>
              <p className="text-gray-600">Multiple Research Areas</p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-2xl font-bold text-[#00629B]">Conference Scope</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-semibold text-gray-800">Real-time Computing</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time systems and scheduling</li>
                <li>• Embedded systems design</li>
                <li>• Time-critical applications</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-semibold text-gray-800">Robotics & AI</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Autonomous systems</li>
                <li>• Machine learning in robotics</li>
                <li>• Human-robot interaction</li>
                <li>• Intelligent automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;