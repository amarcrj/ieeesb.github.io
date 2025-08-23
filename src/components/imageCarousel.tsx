"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button } from "@/components/ui/button";
import "@splidejs/react-splide/css";

interface Slide {
  bgColor: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgImage?: string;
}


const slides: Slide[] = [
  {
    title: "IEEE Student Branch IIITNR",
    subtitle: "Welcome to our Technology Innovation Hub",
    bgColor: "from-blue-900 to-indigo-600",
    buttonText: "JOIN US",
    buttonLink: "#",
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=1080&fit=crop"
  },
  {
    title: "Call for Papers Open",
    subtitle: "Submit by March 15, 2025 - Shape the Future",
    bgColor: "from-purple-900 to-blue-600", 
    buttonText: "SUBMIT PAPER",
    buttonLink: "#",
    bgImage: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f4?w=1920&h=1080&fit=crop"
  },
  {
    title: "World-Class Speakers",
    subtitle: "Keynotes from Turing Award Winners & Industry Leaders",
    bgColor: "from-indigo-800 to-purple-600",
    buttonText: "VIEW SPEAKERS", 
    buttonLink: "#",
    bgImage: "https://images.unsplash.com/photo-1551818255-e6e10975cd73?w=1920&h=1080&fit=crop"
  },
  {
    title: "Join 500+ Researchers",
    subtitle: "From 50+ Countries - September 15-17, 2025",
    bgColor: "from-blue-800 to-cyan-600",
    buttonText: "VIEW PROGRAM",
    buttonLink: "#",
    bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
  }
];

const ImageCarousel = () => {
  return (
    <div>
      <Splide
        options={{
          type: "fade",
          rewind: true,
          arrows: true,
          pagination: true,
          autoplay: true,
          interval: 5000,
          speed: 1000,
        }}
        className="relative [&_.splide__pagination]:bottom-6 [&_.splide__pagination__page]:bg-white [&_.splide__pagination__page.is-active]:bg-blue-400"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div
              className={`relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full bg-gradient-to-r ${slide.bgColor}`}
            >
              {slide.bgImage && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("${slide.bgImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
              <div className="absolute inset-0 bg-black/50" />
              <div className="container relative flex h-full flex-col items-center justify-center text-center text-white px-4">
                {/* Title */}
                <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                {/* Subtitle */}
                <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wide leading-relaxed drop-shadow-md max-w-4xl">
                  {slide.subtitle}
                </p>
                {/* Button */}
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full bg-white dark:bg-gray-700 px-6 sm:px-8 text-sm sm:text-base text-[#00629B] dark:text-white hover:bg-blue-50 dark:hover:bg-gray-600 shadow-lg"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageCarousel;
