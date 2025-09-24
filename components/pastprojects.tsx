"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AccordionDemo } from "./customaccordion";

const images = [
  "/assets/images/project1.png",
  "/assets/images/project2.jpg",
  "/assets/images/project3.jpg",
  "/assets/images/project4.jpg",
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
      className="bg-gradient-to-r from-[#1e29ee] via-[#3026ebcf] to-[#5118a5] text-center py-20 px-[3.75rem] text-white"
      id="projects"
    >
      <h2 className="text-7xl font-medium ">Past Projects</h2>
      <p className="mx-auto mt-10 mb-20">
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
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                index === selectedImage ? "opacity-100" : "opacity-0"
              }`}
              width={540}
              height={540}
              priority={index === 0}
              loading="eager"
            />
          ))}
        </div>
        <AccordionDemo onSelect={handleAccordionSelect} />
      </div>
    </section>
  );
}
