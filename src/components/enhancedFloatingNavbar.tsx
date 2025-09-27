"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Calendar,
  Phone,
  Info,
  Trophy,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  {
    name: "HOME",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "ABOUT",
    link: "/about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "EVENTS",
    link: "/events",
    icon: <Calendar className="h-4 w-4" />,
    dropdown: [
      { label: "RTSI Conference", href: "/events/rtsi" },
      { label: "Workshops", href: "/events/workshops" },
      { label: "Competitions", href: "/events/competitions" },
      { label: "Webinars", href: "/events/webinars" },
    ],
  },
  {
    name: "TEAM",
    link: "/team",
    icon: <Users className="h-4 w-4" />,
  },
  {
    name: "ALUMNI",
    link: "/alumni",
    icon: <Trophy className="h-4 w-4" />,
  },
  {
    name: "CONTACT",
    link: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
];

export const EnhancedFloatingNavbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Always visible at top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  useEffect(() => {
    if (visible && isMenuOpen) {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  }, [visible]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-[5000] flex justify-center px-4"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 rounded-2xl shadow-lg w-full max-w-5xl">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/1000119891.png"
                alt="IEEE Student Branch IIITNR"
                width={420}
                height={160}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-6 py-4 space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.name ? null : item.name
                              )
                            }
                            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              {item.icon}
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                activeDropdown === item.name && "rotate-180"
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 pl-6 space-y-2"
                              >
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.link}
                          className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#00629B] dark:hover:text-blue-400 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
