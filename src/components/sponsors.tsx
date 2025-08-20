import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sponsors = {
  platinum: [
    {
      name: "IEEE",
      logo: "/logo-ieee.svg",
      description: "Institute of Electrical and Electronics Engineers"
    }
  ],
  gold: [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Cloud computing and AI solutions"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", 
      description: "Search, AI, and cloud technologies"
    }
  ],
  silver: [
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      description: "Semiconductor and computing solutions"
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
      description: "Graphics and AI computing platforms"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "Cloud services and robotics"
    }
  ],
  partners: [
    {
      name: "ACM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg",
      description: "Association for Computing Machinery"
    },
    {
      name: "MIT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
      description: "Massachusetts Institute of Technology"
    },
    {
      name: "Stanford",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
      description: "Stanford University"
    },
    {
      name: "Carnegie Mellon",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/bb/Carnegie_Mellon_University_seal.svg",
      description: "Carnegie Mellon University"
    }
  ]
};

const sponsorTiers = [
  {
    level: "Platinum Sponsor",
    sponsors: sponsors.platinum,
    color: "from-slate-100 to-slate-200",
    badge: "bg-slate-600"
  },
  {
    level: "Gold Sponsors", 
    sponsors: sponsors.gold,
    color: "from-yellow-100 to-yellow-200",
    badge: "bg-yellow-600"
  },
  {
    level: "Silver Sponsors",
    sponsors: sponsors.silver, 
    color: "from-gray-100 to-gray-200",
    badge: "bg-gray-600"
  },
  {
    level: "Academic Partners",
    sponsors: sponsors.partners,
    color: "from-blue-50 to-indigo-100",
    badge: "bg-[#00629B]"
  }
];

const Sponsors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#00629B]">
            Sponsors & Partners
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            We thank our generous sponsors and partners for their support in making 
            IEEE RTSI 2025 a world-class conference experience.
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <div className="mb-8 flex items-center justify-center">
                <Badge className={`${tier.badge} text-white px-4 py-2 text-lg font-semibold`}>
                  {tier.level}
                </Badge>
              </div>
              
              <div className={`rounded-2xl bg-gradient-to-r ${tier.color} p-8`}>
                <div className={`grid gap-8 ${
                  tier.sponsors.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                  tier.sponsors.length <= 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                }`}>
                  {tier.sponsors.map((sponsor, index) => (
                    <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        <div className="relative mb-4 flex items-center justify-center h-16 w-full">
                          <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            width={120}
                            height={60}
                            className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-[#00629B] mb-2">
                          {sponsor.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {sponsor.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
            <h3 className="text-xl font-bold text-[#00629B]">
              Become a Sponsor
            </h3>
            <p className="max-w-md text-gray-700">
              Join leading organizations in supporting the advancement of real-time 
              computing and robotics research.
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <div className="text-center">
                <p className="font-semibold">500+</p>
                <p>Attendees</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">50+</p>
                <p>Countries</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">100+</p>
                <p>Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;