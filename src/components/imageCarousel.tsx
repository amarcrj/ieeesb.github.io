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
        className="relative [&_.splide__pagination]:bottom-8 [&_.splide__pagination__page]:bg-white/70 [&_.splide__pagination__page]:w-3 [&_.splide__pagination__page]:h-3 [&_.splide__pagination__page]:mx-1 [&_.splide__pagination__page]:rounded-full [&_.splide__pagination__page]:backdrop-blur-sm [&_.splide__pagination__page.is-active]:bg-white [&_.splide__pagination__page.is-active]:scale-125 [&_.splide__pagination]:flex [&_.splide__pagination]:justify-center [&_.splide__pagination]:gap-2 [&_.splide__arrow]:bg-white/20 [&_.splide__arrow]:backdrop-blur-sm [&_.splide__arrow]:border-0 [&_.splide__arrow]:rounded-full [&_.splide__arrow]:w-12 [&_.splide__arrow]:h-12 [&_.splide__arrow:hover]:bg-white/30 [&_.splide__arrow]:transition-all [&_.splide__arrow]:duration-300"
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
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative flex h-full items-center justify-center">
                <div className="mx-auto max-w-6xl px-6 text-center">
                  {/* Title */}
                  <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none text-white">
                    <span className="block drop-shadow-2xl">{slide.title}</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/95 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* Button */}
                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-0"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageCarousel;
