"use client";

import React from "react";
import { motion } from "motion/react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";

const words = [
  {
    text: "IEEE",
    className: "text-blue-500 dark:text-blue-400",
  },
  {
    text: "Student",
    className: "text-blue-500 dark:text-blue-400",
  },
  {
    text: "Branch",
    className: "text-blue-500 dark:text-blue-400",
  },
  {
    text: "IIITNR",
    className: "text-blue-500 dark:text-blue-400",
  },
];

const products = [
  {
    title: "AI & Machine Learning",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
  },
  {
    title: "Robotics Research",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&h=400&fit=crop"
  },
  {
    title: "IoT Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=600&h=400&fit=crop"
  },
  {
    title: "Cybersecurity",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop"
  },
  {
    title: "Computer Vision",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop"
  },
  {
    title: "Embedded Systems",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
  },
  {
    title: "Data Science",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    title: "Quantum Computing",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop"
  },
  {
    title: "5G Networks",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop"
  },
  {
    title: "Renewable Energy",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
  }
];

export const EnhancedHero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center max-w-4xl"
          >
            Advancing Technology for Humanity
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="text-sm md:text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-2xl"
        >
          Join our community of technology enthusiasts, fostering innovation and
          professional development in electrical engineering, computer science, and related fields.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <Link href="/about">
            <Button className="bg-[#00629B] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-[#00629B] text-[#00629B] dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-[#00629B] hover:text-white dark:hover:bg-blue-600 transition-colors">
              Join Us
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
};

export const TechShowcase = () => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#00629B] dark:text-blue-400 mb-4">
            Our Research Areas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring cutting-edge technologies and pushing the boundaries of innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 overflow-hidden"
          >
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 shrink-0"
            >
              {[...firstRow, ...firstRow].map((product, index) => (
                <TechCard key={index} product={product} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-6 overflow-hidden"
          >
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 shrink-0"
            >
              {[...secondRow, ...secondRow].map((product, index) => (
                <TechCard key={index} product={product} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TechCard = ({ product }: { product: { title: string; link: string; thumbnail: string } }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative h-64 w-80 rounded-xl overflow-hidden shadow-lg shrink-0"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{product.title}</h3>
      </div>
      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};