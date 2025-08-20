import { FileText, Users, Award, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tracks = [
  {
    title: "Real-Time Computing Systems",
    topics: [
      "Real-time scheduling algorithms",
      "Embedded system design and optimization",
      "Time-critical application development",
      "Performance analysis and verification"
    ]
  },
  {
    title: "Robotics and Autonomous Systems", 
    topics: [
      "Mobile robotics and navigation",
      "Human-robot interaction",
      "Swarm robotics and multi-agent systems",
      "Robot perception and sensor fusion"
    ]
  },
  {
    title: "AI and Machine Learning",
    topics: [
      "Real-time machine learning algorithms",
      "Edge AI and distributed computing",
      "Neural networks for embedded systems",
      "AI-driven automation systems"
    ]
  },
  {
    title: "Industrial Applications",
    topics: [
      "Industry 4.0 and smart manufacturing",
      "IoT and cyber-physical systems",
      "Automotive and transportation systems",
      "Healthcare and medical devices"
    ]
  }
];

const submissionTypes = [
  {
    type: "Full Papers",
    pages: "6-8 pages",
    description: "Original research contributions with comprehensive evaluation",
    icon: FileText,
    color: "bg-blue-100 text-blue-700"
  },
  {
    type: "Short Papers",
    pages: "4-6 pages", 
    description: "Work-in-progress, preliminary results, or position papers",
    icon: Users,
    color: "bg-green-100 text-green-700"
  },
  {
    type: "Demo Papers",
    pages: "2-4 pages",
    description: "System demonstrations and prototype presentations",
    icon: Award,
    color: "bg-purple-100 text-purple-700"
  }
];

const CallForPapers = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B]">
            Call for Papers
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            We invite researchers, engineers, and practitioners to submit their latest work 
            in real-time computing, robotics, and intelligent systems. Join the global 
            community advancing the future of technology.
          </p>
        </div>

        {/* Submission Types */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {submissionTypes.map((submission, index) => {
            const Icon = submission.icon;
            return (
              <Card key={index} className="group transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${submission.color} mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#00629B] mb-2">
                    {submission.type}
                  </h3>
                  <Badge variant="outline" className="mb-3">
                    {submission.pages}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {submission.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Research Tracks */}
        <div className="mb-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#00629B]">
            Research Tracks
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((track, index) => (
              <Card key={index} className="group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-[#00629B] mb-4 group-hover:text-blue-700 transition-colors">
                    {track.title}
                  </h4>
                  <ul className="space-y-2">
                    {track.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-700 text-sm flex items-start">
                        <span className="text-[#00629B] mr-2 mt-1">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="mb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#00629B]">
                Submission Guidelines
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">Format Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IEEE conference paper format (double column)</li>
                    <li>• PDF format only, maximum 10MB file size</li>
                    <li>• English language, properly formatted references</li>
                    <li>• Anonymous submission (no author information)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-gray-800">Review Process</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Double-blind peer review</li>
                    <li>• Minimum 3 reviewers per paper</li>
                    <li>• Technical quality and originality evaluation</li>
                    <li>• Feedback provided to all authors</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#00629B] hover:bg-blue-700 px-8 py-3">
              <ExternalLink className="mr-2 h-4 w-4" />
              Submit Paper
            </Button>
            <Button variant="outline" className="border-[#00629B] text-[#00629B] hover:bg-blue-50 px-8 py-3">
              <Download className="mr-2 h-4 w-4" />
              Download Template
            </Button>
          </div>
          
          <div className="inline-flex items-center space-x-6 rounded-lg bg-blue-50 px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <span className="text-sm font-medium text-gray-800">Submission Deadline:</span>
              <span className="text-sm font-bold text-[#00629B]">March 15, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;