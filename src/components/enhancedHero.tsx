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
    <div className="relative py-32 lg:py-40 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative">
        {/* Full width header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#00629B] dark:text-blue-400 mb-6">
            Our Research Areas
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Exploring cutting-edge technologies and pushing the boundaries of innovation across multiple disciplines
          </p>
        </motion.div>

        {/* Full viewport width scrolling sections */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 overflow-hidden"
          >
            <motion.div
              animate={{ x: [-1200, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 shrink-0"
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
            className="flex gap-8 overflow-hidden"
          >
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 shrink-0"
            >
              {[...secondRow, ...secondRow].map((product, index) => (
                <TechCard key={index} product={product} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20 px-4"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to join our research community?
          </p>
          <Button className="bg-[#00629B] hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
            Explore Research Opportunities
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const TechCard = ({ product }: { product: { title: string; link: string; thumbnail: string } }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -15 }}
      className="group relative h-80 w-96 rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-gray-200/20 dark:border-gray-700/20"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00629B]/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <motion.h3
          initial={{ y: 10, opacity: 0.8 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300"
        >
          {product.title}
        </motion.h3>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
        />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};