"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContactButton from "./ui/contact-button";
import { useScroll } from "@/lib/useScroll";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();

  // Close menu when clicking on a link
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`py-5 px-[3.75rem] max-md:px-6 flex items-center ${
          isScrolled ? "text-gray-600" : "text-white"
        } fixed top-0 left-0 right-0 ${
          isScrolled ? "bg-white" : "bg-transparent"
        } z-[9999]`}
      >
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/images/logo.avif"
            alt="Logo"
            width={52}
            height={52}
          />
          <p className="font-sans font-semibold">Interstate Services</p>
        </div>

        {/* Desktop Navigation */}
        <div className="ms-auto hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`${
                isScrolled ? "text-gray-600" : "text-white"
              } hover:underline transition-colors duration-200`}
            >
              {link.label}
            </Link>
          ))}
          <ContactButton className={`${isScrolled ? "text-white" : "bg-white text-black"}`}/>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ms-auto lg:hidden p-2 rounded-md bg-transparent transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Hamburger Icon */}
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-2">
            <span
              className={`w-5 h-[1px] ${isScrolled ? "bg-gray-600" : "bg-white"} transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-5 h-[1px] ${isScrolled ? "bg-gray-600" : "bg-white"} transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-[24vh] w-full bg-white z-[9999] transform transition-transform duration-300 pt-5 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}

        {/* Mobile Menu Content */}
        <div className="space-y-6 w-fit mx-auto">
          {/* Navigation Links */}
          <div className="space-y-4 ">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                onClick={closeMenu}
                className="block text-lg text-gray-700 transition-colors duration-200 text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div onClick={closeMenu}>
            <ContactButton className="text-white"/>
          </div>
        </div>
      </div>
    </>
  );
}
