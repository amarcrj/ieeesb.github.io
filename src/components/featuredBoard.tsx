import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredItems = [
  {
    image: "/placeholder.svg",
    title: "Sign Up to Attend Dr. Emily Jones' Lecture on Smart Grid Technologies",
    featured: true,
    badges: ["CONFERENCES", "MEMBERS"]
  },
  {
    image: "/placeholder.svg",
    title: "Apply for Travel Grants for the IEEE PES ISGT Asia Conference",
    badges: ["CONFERENCES", "MEMBERS"]
  },
  {
    image: "/placeholder.svg",
    title: "6 Chapter Members Honored as IEEE Life Fellows",
    badges: ["AWARDS", "MEMBERS"]
  }
]
const FeaturedBoard = () => {
  return (
    <section className="container mx-auto px-4 py-12">
    <div className="grid gap-8 md:grid-cols-3">
      {featuredItems.map((item, index) => (
        <Card key={index} className="group overflow-hidden bg-white dark:bg-gray-700 border dark:border-gray-600">
          <CardContent className="p-0">
            <div className="relative">
              {item.featured && (
                <Badge className="absolute left-4 top-4 z-10 bg-[#00629B] dark:bg-blue-600 font-bold text-white">
                  FEATURED
                </Badge>
              )}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3 flex gap-2">
                {item.badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="outline"
                    className="border-[#00629B] dark:border-blue-400 text-[#00629B] dark:text-blue-400"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#00629B] dark:text-blue-400 transition-colors group-hover:text-[#0077be] dark:group-hover:text-blue-300">
                {item.title}
              </h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
  )
}

export default FeaturedBoard
