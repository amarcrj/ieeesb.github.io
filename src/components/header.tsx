"use client";

import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { 
      label: "EVENTS", 
      href: "/events",
      dropdown: [
        { label: "RTSI Conference", href: "/events/rtsi" },
        { label: "Workshops", href: "/events/workshops" },
        { label: "Competitions", href: "/events/competitions" },
        { label: "Webinars", href: "/events/webinars" }
      ]
    },
    { label: "TEAM", href: "/team" },
    { label: "ALUMNI", href: "/alumni" },
    { label: "CONTACT", href: "/contact" }
  ];

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="w-full border-b bg-white shadow-sm">
      {/* Top bar */}
      <div className="h-10 bg-[#00629B]">
        <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-6">
          <nav className="hidden items-center gap-6 md:flex">
            {[
              { label: "IEEE.org", href: "https://www.ieee.org" },
              { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org" },
              { label: "IEEE Standards", href: "https://standards.ieee.org" },
              { label: "IEEE Spectrum", href: "https://spectrum.ieee.org" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-white transition-colors hover:text-blue-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-[13px] text-white font-medium">
              Advancing Technology for Humanity
            </div>
            <select className="bg-transparent text-[13px] text-white focus:outline-none">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            width="60"
            height="60"
            src="/1000119890.png"
            alt="IEEE Student Branch IIITNR Logo"
            className="h-14 w-auto"
          />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-[#00629B] md:text-2xl">
              IEEE Student Branch IIITNR
            </h1>
            <p className="text-sm text-gray-600">
              International Institute of Information Technology, Naya Raipur
            </p>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="block lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#00629B]" />
            ) : (
              <Menu className="h-6 w-6 text-[#00629B]" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className={`bg-[#00629B] lg:block ${isMenuOpen ? "block" : "hidden"} transition-all shadow-lg`}>
        <div className="container mx-auto px-4 lg:px-6">
          <nav className="flex flex-col lg:flex-row lg:h-14">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center w-full px-4 py-3 lg:py-0 lg:h-14 text-[13px] font-bold text-white transition-colors hover:bg-[#0077be] focus:outline-none"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div className="hidden lg:block lg:absolute lg:top-full lg:left-0 lg:w-56 lg:bg-white lg:shadow-lg lg:rounded-b-md lg:opacity-0 lg:invisible lg:transform lg:translate-y-2 lg:transition-all lg:duration-200 group-hover:lg:opacity-100 group-hover:lg:visible group-hover:lg:translate-y-0 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#00629B] transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.label && (
                      <div className="lg:hidden bg-[#0077be] pl-8">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-[13px] text-white hover:bg-[#005a8f] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-3 lg:py-0 lg:h-14 text-[13px] font-bold text-white transition-colors hover:bg-[#0077be]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
