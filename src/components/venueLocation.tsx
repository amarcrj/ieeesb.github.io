import Image from "next/image";
import { MapPin, Plane, Car, Train, Hotel, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VenueLocation = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B] dark:text-blue-400">
            Venue & Location
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Join us at a world-class conference venue in the heart of a vibrant tech hub, 
            perfectly situated for networking and collaboration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Venue Details */}
          <div className="space-y-6">
            <Card className="overflow-hidden bg-white dark:bg-gray-700 border dark:border-gray-600">
              <CardContent className="p-0">
                <div className="relative h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                    alt="Conference Venue"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Grand Conference Center</h3>
                      <p className="text-lg">Premium Venue for Innovation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#00629B] dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Innovation Drive<br />
                    Tech District, Silicon Valley<br />
                    CA 94000, United States
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <h4 className="text-lg font-semibold text-[#00629B] mb-3">Venue Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• State-of-the-art auditorium with 500+ capacity</li>
                  <li>• Multiple breakout rooms for workshops and panels</li>
                  <li>• High-speed WiFi and full AV equipment</li>
                  <li>• Exhibition space for demos and networking</li>
                  <li>• Accessible facilities and parking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Travel & Accommodation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#00629B]">Travel & Stay</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <Plane className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Airport</h4>
                  <p className="text-sm text-gray-600">San Francisco International<br />25 minutes drive</p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <Train className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Public Transit</h4>
                  <p className="text-sm text-gray-600">Metro Station<br />5 minutes walk</p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <Car className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Parking</h4>
                  <p className="text-sm text-gray-600">On-site garage<br />500 spaces available</p>
                </CardContent>
              </Card>

              <Card className="group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <Hotel className="h-8 w-8 text-[#00629B] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Hotels</h4>
                  <p className="text-sm text-gray-600">Partner hotels<br />Special rates available</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Utensils className="h-6 w-6 text-[#00629B]" />
                  <h4 className="text-lg font-semibold text-[#00629B]">Dining Options</h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
                  <div>
                    <p className="font-medium mb-1">On-site Dining</p>
                    <p>Café and restaurant facilities</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Nearby Restaurants</p>
                    <p>15+ dining options within walking distance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Button className="bg-[#00629B] hover:bg-blue-700">
                View Interactive Map
              </Button>
              <p className="text-sm text-gray-600">
                Detailed directions and local information will be provided to registered attendees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;