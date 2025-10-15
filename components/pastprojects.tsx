"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AccordionDemo } from "./customaccordion";

const images = [
  "/assets/images/ecar.png",
  "/assets/images/project4.jpg",
  "/assets/images/project2.png",
  "/assets/images/project1.png",
];

export default function PastProjects() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
      setPreloadedImages(images);
    };
    preloadImages();
  }, []);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };
  return (
    <section
      className="bg-gradient-to-r from-[#1e29ee] via-[#3026ebcf] to-[#5118a5] text-center py-20 px-6 md:px-10 text-white"
      id="projects"
    >
      <div className="xl:max-w-[90rem] mx-auto">
        <h2 className="text-7xl font-medium max-md:text-5xl max-sm:text-4xl">Our Projects</h2>
        <p className="mx-auto mt-10 mb-20 lg:text-xl lg:w-8/12">
          Our clients are from private and public corporations. INTERSTATE have
          worked with international organizations and we maintain a wide database
          of local and international agencies.
        </p>
        <div className="flex gap-12 items-center">
          <div className="relative w-full h-[24rem] lg:h-[33.75rem] rounded-2xl overflow-hidden hidden lg:block">
            {preloadedImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Interstate step ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                  index === selectedImage ? "opacity-100" : "opacity-0"
                }`}
                width={900}
                height={540}
                priority={index === 0}
                loading="eager"
              />
            ))}
          </div>
          <AccordionDemo onSelect={handleAccordionSelect} />
        </div>
      </div>
    </section>
  );
}
