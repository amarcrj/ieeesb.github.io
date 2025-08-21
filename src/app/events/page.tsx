import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

const upcomingEvents = [
  {
    title: "AI & Machine Learning Workshop",
    date: "2025-02-15",
    time: "2:00 PM - 5:00 PM",
    location: "Engineering Building, Lab 301",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    category: "Workshop",
    attendees: "45",
    description: "Hands-on workshop covering neural networks, deep learning frameworks, and practical AI applications.",
    featured: true
  },
  {
    title: "Robotics Competition 2025",
    date: "2025-03-08",
    time: "9:00 AM - 6:00 PM",
    location: "University Sports Complex",
    image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f4?w=600&h=400&fit=crop",
    category: "Competition",
    attendees: "120",
    description: "Annual robotics competition featuring autonomous navigation, object manipulation, and team challenges.",
    featured: true
  },
  {
    title: "Industry Talk: Future of 5G",
    date: "2025-02-28",
    time: "6:00 PM - 8:00 PM",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975cd73?w=600&h=400&fit=crop",
    category: "Lecture",
    attendees: "200",
    description: "Guest lecture by industry experts on 5G technology, applications, and career opportunities."
  },
  {
    title: "PCB Design Bootcamp",
    date: "2025-03-15",
    time: "10:00 AM - 4:00 PM",
    location: "Electronics Lab",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    category: "Workshop",
    attendees: "30",
    description: "Learn PCB design fundamentals using industry-standard tools like Altium Designer and KiCad."
  }
];

const pastEvents = [
  {
    title: "IEEE Day Celebration 2024",
    date: "2024-10-06",
    location: "Main Campus",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    category: "Celebration",
    attendees: "300",
    description: "Annual IEEE Day celebration with technical exhibitions, student presentations, and networking."
  },
  {
    title: "Embedded Systems Workshop",
    date: "2024-11-12",
    location: "Electronics Lab",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    category: "Workshop",
    attendees: "60",
    description: "Comprehensive workshop on Arduino, Raspberry Pi, and IoT development."
  },
  {
    title: "Women in Engineering Symposium",
    date: "2024-09-20",
    location: "Conference Hall",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
    category: "Symposium",
    attendees: "150",
    description: "Inspiring talks and panel discussions promoting women's participation in engineering fields."
  }
];

interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  image: string;
  category: string;
  attendees: string;
  description: string;
  featured?: boolean;
}

const EventCard = ({ event, isPast = false }: { event: Event; isPast?: boolean }) => (
  <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${event.featured && !isPast ? 'ring-2 ring-[#00629B] ring-opacity-50' : ''}`}>
    <CardContent className="p-0">
      <div className="relative">
        <div className="relative h-[250px] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {event.featured && !isPast && (
            <Badge className="absolute left-4 top-4 bg-[#00629B] text-white">
              FEATURED
            </Badge>
          )}
          <div className="absolute bottom-4 left-4 right-4">
            <Badge 
              variant="secondary" 
              className={`mb-2 ${
                event.category === 'Workshop' ? 'bg-green-100 text-green-800' :
                event.category === 'Competition' ? 'bg-red-100 text-red-800' :
                event.category === 'Lecture' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'
              }`}
            >
              {event.category}
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-[#00629B] group-hover:text-blue-700 transition-colors">
          {event.title}
        </h3>
        
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="mr-2 h-4 w-4" />
            {new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          {event.time && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="mr-2 h-4 w-4" />
              {event.time}
            </div>
          )}
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="mr-2 h-4 w-4" />
            {event.attendees} {isPast ? 'attended' : 'registered'}
          </div>
        </div>
        
        <p className="mb-4 text-sm text-gray-700 leading-relaxed">
          {event.description}
        </p>
        
        {!isPast && (
          <div className="flex items-center justify-between">
            <button className="bg-[#00629B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Register Now
            </button>
            <a 
              href="#" 
              className="flex items-center text-sm text-[#00629B] hover:text-blue-700 transition-colors"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Details
            </a>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

export default function Events() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#00629B] to-blue-700 py-8 sm:py-12 lg:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              IEEE Events
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg opacity-90 px-4 sm:px-0">
              Join our exciting lineup of workshops, competitions, lectures, and networking 
              events designed to advance your technical skills and professional growth.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B]">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 px-4 sm:px-0">
                Don&apos;t miss out on these exciting opportunities to learn, compete, and network 
                with fellow technology enthusiasts.
              </p>
            </div>
            
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B]">
                Event Categories
              </h2>
            </div>
            
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-green-100 p-3 group-hover:bg-green-200 transition-colors">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">Workshops</h3>
                  <p className="text-sm text-gray-600">Hands-on technical training sessions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-red-100 p-3 group-hover:bg-red-200 transition-colors">
                      <ExternalLink className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">Competitions</h3>
                  <p className="text-sm text-gray-600">Technical challenges and contests</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-blue-100 p-3 group-hover:bg-blue-200 transition-colors">
                      <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">Lectures</h3>
                  <p className="text-sm text-gray-600">Industry talks and academic presentations</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-purple-100 p-3 group-hover:bg-purple-200 transition-colors">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">Networking</h3>
                  <p className="text-sm text-gray-600">Professional and social gatherings</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-[#00629B]">
                Past Events
              </h2>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700 px-4 sm:px-0">
                Look back at our recent successful events and see what you might have missed.
              </p>
            </div>
            
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} isPast={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 sm:py-12 lg:py-16 bg-[#00629B] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold">Stay Updated</h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Don&apos;t miss any of our exciting events! Subscribe to our newsletter 
              or follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00629B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00629B] transition-colors">
                Follow Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}