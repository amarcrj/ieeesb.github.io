import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00629B] dark:text-blue-400">
            About IEEE RTSI 2025
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed px-4 sm:px-0">
            The IEEE International Conference on Real-time computing and Robotics (RTSI) 
            is a premier international forum bringing together researchers, engineers, and 
            practitioners to share cutting-edge advances in real-time systems, robotics, 
            and intelligent automation technologies.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700 border dark:border-gray-600">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Calendar className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#00629B] dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-[#00629B] dark:text-blue-400">Conference Dates</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">September 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700 border dark:border-gray-600">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#00629B] dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-[#00629B] dark:text-blue-400">Location</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">International Venue</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700 border dark:border-gray-600">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#00629B] dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-[#00629B] dark:text-blue-400">Participants</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">500+ Researchers</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700 border dark:border-gray-600">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#00629B] dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-[#00629B] dark:text-blue-400">Tracks</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Multiple Research Areas</p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-white dark:bg-gray-700 p-4 sm:p-6 lg:p-8 shadow-lg">
          <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-[#00629B] dark:text-blue-400">Conference Scope</h3>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Real-time Computing</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li>• Real-time systems and scheduling</li>
                <li>• Embedded systems design</li>
                <li>• Time-critical applications</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Robotics & AI</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
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