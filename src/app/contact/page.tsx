"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "ieee.studentbranch@university.edu",
    subtitle: "General inquiries and membership"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subtitle: "Office hours: Mon-Fri 9AM-5PM"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Engineering Building, Room 201\nUniversity Campus, Tech City",
    subtitle: "Student organization office"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 10:00 AM - 2:00 PM",
    subtitle: "Student support and meetings"
  }
];

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Instagram, href: "#", color: "hover:text-pink-600" },
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#00629B] to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Get in touch with our IEEE Student Branch. We're here to help with 
              membership, events, technical questions, and collaboration opportunities.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B]">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-2xl text-gray-700">
                Multiple ways to reach our team for different types of inquiries.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="group text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-[#00629B] p-3 group-hover:bg-blue-700 transition-colors">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-800">
                        {info.title}
                      </h3>
                      <p className="mb-2 text-[#00629B] font-medium whitespace-pre-line">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#00629B]">
                  Send Us a Message
                </h2>
                <p className="mb-8 text-gray-700">
                  Have a question or want to get involved? Fill out the form below 
                  and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B] focus:border-transparent outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B] focus:border-transparent outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B] focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Event Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B] focus:border-transparent outline-none transition-colors resize-vertical"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#00629B] hover:bg-blue-700 text-white py-3 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#00629B]">
                  Find Us
                </h2>
                
                {/* Placeholder Map */}
                <div className="mb-8 h-64 rounded-lg bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">University Campus Location</p>
                  </div>
                </div>
                
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">
                      Visit Our Office
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Address:</strong><br />
                      Engineering Building, Room 201<br />
                      University Campus<br />
                      Tech City, State 12345</p>
                      
                      <p><strong>Parking:</strong><br />
                      Visitor parking available in Lot C</p>
                      
                      <p><strong>Public Transit:</strong><br />
                      Bus routes 12, 34, and 56 stop at University Station</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Social Media */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">
                      Follow Us
                    </h3>
                    <p className="mb-4 text-gray-700 text-sm">
                      Stay connected with our latest updates and events
                    </p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 transition-colors ${social.color}`}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#00629B]">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="mx-auto max-w-3xl space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    How can I become a member?
                  </h3>
                  <p className="text-gray-700">
                    Visit our membership page or contact us directly. We welcome all students 
                    interested in electrical engineering, computer science, and related fields.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    What events do you organize?
                  </h3>
                  <p className="text-gray-700">
                    We organize technical workshops, guest lectures, competitions, networking events, 
                    and community outreach programs throughout the academic year.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    How can I get involved in projects?
                  </h3>
                  <p className="text-gray-700">
                    We have ongoing research and development projects in areas like robotics, 
                    AI, and embedded systems. Contact our technical team to learn about current opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}