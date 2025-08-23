"use client";

import { useState } from "react";
import { Clock, MapPin, Users, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const scheduleData = {
  "Day 1 - Sept 15": [
    {
      time: "08:00 - 09:00",
      title: "Registration & Welcome Coffee",
      type: "registration",
      location: "Main Lobby",
      description: "Check-in and networking",
    },
    {
      time: "09:00 - 10:00",
      title: "Opening Ceremony & Keynote",
      speaker: "Dr. Raj Reddy",
      type: "keynote",
      location: "Main Auditorium",
      description: "The Future of Human-AI Collaboration in Real-time Systems",
    },
    {
      time: "10:00 - 10:30",
      title: "Coffee Break",
      type: "break",
      location: "Exhibition Area",
    },
    {
      time: "10:30 - 12:00",
      title: "Session 1A: Real-Time Computing",
      type: "session",
      location: "Room A",
      description: "4 papers on scheduling and optimization",
    },
    {
      time: "10:30 - 12:00",
      title: "Session 1B: Robotics Applications",
      type: "session",
      location: "Room B",
      description: "4 papers on mobile and service robotics",
    },
    {
      time: "12:00 - 13:30",
      title: "Lunch Break",
      type: "break",
      location: "Restaurant Area",
    },
    {
      time: "13:30 - 15:00",
      title: "Workshop: AI in Edge Computing",
      type: "workshop",
      location: "Workshop Room 1",
      description: "Hands-on session with industry experts",
    },
    {
      time: "15:00 - 15:30",
      title: "Poster Session & Coffee",
      type: "poster",
      location: "Exhibition Area",
      description: "25 poster presentations",
    },
    {
      time: "15:30 - 17:00",
      title: "Panel: Future of Real-Time Systems",
      type: "panel",
      location: "Main Auditorium",
      description: "Industry and academic leaders discuss trends",
    },
  ],
  "Day 2 - Sept 16": [
    {
      time: "09:00 - 10:00",
      title: "Keynote: Distributed Robotics",
      speaker: "Dr. Daniela Rus",
      type: "keynote",
      location: "Main Auditorium",
      description: "From Theory to Real-world Applications",
    },
    {
      time: "10:00 - 10:30",
      title: "Coffee Break",
      type: "break",
      location: "Exhibition Area",
    },
    {
      time: "10:30 - 12:00",
      title: "Session 2A: Machine Learning",
      type: "session",
      location: "Room A",
      description: "AI algorithms for real-time processing",
    },
    {
      time: "10:30 - 12:00",
      title: "Session 2B: Industrial IoT",
      type: "session",
      location: "Room B",
      description: "Smart manufacturing and automation",
    },
    {
      time: "12:00 - 13:30",
      title: "Lunch & Networking",
      type: "break",
      location: "Restaurant Area",
    },
    {
      time: "13:30 - 15:00",
      title: "Demo Session",
      type: "demo",
      location: "Demo Area",
      description: "Live system demonstrations",
    },
    {
      time: "15:00 - 15:30",
      title: "Coffee Break",
      type: "break",
      location: "Exhibition Area",
    },
    {
      time: "15:30 - 17:00",
      title: "Competition Finals",
      type: "competition",
      location: "Main Auditorium",
      description: "Best paper and demo awards",
    },
    {
      time: "18:00 - 21:00",
      title: "Conference Banquet",
      type: "social",
      location: "Grand Ballroom",
      description: "Dinner and networking event",
    },
  ],
};

const typeStyles = {
  keynote: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700",
  session: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700",
  workshop: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700",
  tutorial: "bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700",
  panel: "bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
  demo: "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
  poster: "bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-700",
  competition: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700",
  break: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-600",
  registration: "bg-cyan-100 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700",
  social: "bg-violet-100 dark:bg-violet-800 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-700",
  closing: "bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
};

const ProgramSchedule = () => {
  const [activeDay, setActiveDay] = useState("Day 1 - Sept 15");

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B] dark:text-blue-400">
            Conference Program
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Three days of cutting-edge research presentations, hands-on
            workshops, and networking opportunities with global experts.
          </p>
        </div>

        {/* Day Selector */}
        <div className="mb-8 flex justify-center">
          <div className="flex rounded-lg bg-white dark:bg-gray-700 border dark:border-gray-600 p-1 shadow-sm">
            {Object.keys(scheduleData).map((day) => (
              <Button
                key={day}
                variant={activeDay === day ? "default" : "ghost"}
                onClick={() => setActiveDay(day)}
                className={`${
                  activeDay === day
                    ? "bg-[#00629B] dark:bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {day}
              </Button>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-4">
          {scheduleData[activeDay as keyof typeof scheduleData].map(
            (item, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 hover:shadow-md bg-white dark:bg-gray-700 border dark:border-gray-600"
              >
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-4 md:items-center">
                    <div className="flex items-center space-x-3 md:col-span-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-[#00629B] dark:text-blue-400" />
                        <span className="font-semibold text-[#00629B] dark:text-blue-400">
                          {item.time}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex items-start space-x-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[#00629B] dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className={
                                typeStyles[item.type as keyof typeof typeStyles]
                              }
                            >
                              {item.type}
                            </Badge>
                          </div>

                          {item.speaker && (
                            <div className="flex items-center space-x-2 mb-2">
                              <Mic className="h-4 w-4 text-gray-500" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {item.speaker}
                              </span>
                            </div>
                          )}

                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-1 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 rounded-lg bg-white dark:bg-gray-700 border dark:border-gray-600 p-6 shadow-md">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-[#00629B] dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-800 dark:text-white">
                Full program with abstracts will be available to registered
                attendees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSchedule;
