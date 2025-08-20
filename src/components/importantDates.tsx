import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dates = [
  {
    event: "Paper Submission Deadline",
    date: "March 15, 2025",
    time: "23:59 PST",
    status: "upcoming",
    description: "Full paper submissions (6-8 pages)",
    icon: Calendar
  },
  {
    event: "Notification of Acceptance",
    date: "May 20, 2025",
    time: "17:00 PST",
    status: "upcoming", 
    description: "Authors will be notified via email",
    icon: CheckCircle
  },
  {
    event: "Camera-Ready Submission",
    date: "June 30, 2025",
    time: "23:59 PST",
    status: "upcoming",
    description: "Final version with reviewer feedback addressed",
    icon: Clock
  },
  {
    event: "Early Bird Registration",
    date: "July 15, 2025",
    time: "23:59 PST",
    status: "upcoming",
    description: "Discounted registration rates available",
    icon: AlertCircle
  },
  {
    event: "Conference Dates",
    date: "September 15-17, 2025",
    time: "Full Days",
    status: "confirmed",
    description: "3-day international conference",
    icon: Calendar
  }
];

const ImportantDates = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B]">
            Important Dates
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Mark your calendar with these critical deadlines and conference dates. 
            All times are in Pacific Standard Time (PST).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dates.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`rounded-full p-2 ${
                        item.status === 'confirmed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge 
                        variant={item.status === 'confirmed' ? 'default' : 'secondary'}
                        className={item.status === 'confirmed' ? 'bg-green-100 text-green-700' : ''}
                      >
                        {item.status === 'confirmed' ? 'Confirmed' : 'Deadline'}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-lg font-bold text-[#00629B] group-hover:text-blue-700 transition-colors">
                    {item.event}
                  </h3>
                  
                  <div className="mb-3 space-y-1">
                    <p className="text-xl font-semibold text-gray-800">
                      {item.date}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.time}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Progress indicator for visual appeal */}
                  <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
                    <div 
                      className={`h-1 rounded-full transition-all duration-500 group-hover:w-full ${
                        item.status === 'confirmed' ? 'bg-green-500 w-full' : 'bg-blue-500 w-2/3'
                      }`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-[#00629B]" />
              <p className="text-sm font-medium text-[#00629B]">
                Time Zone: Pacific Standard Time (PST)
              </p>
            </div>
            <p className="text-xs text-gray-600 max-w-md">
              All submission deadlines are at 23:59 PST on the specified date. 
              Late submissions will not be accepted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;