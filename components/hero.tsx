import React from "react";
import ContactButton from "./ui/contact-button";
import AnimatedLogoCloud from "./animationlogocloud";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-[#fff8f8] via-[#fff7f7cf] to-[#ffffff] items-center justify-center text-center max-sm:py-28">
      <h1 className="text-7xl max-md:text-5xl max-sm:text-4xl px-1 font-medium">
        Professional <span className="text-[#3A95F4] relative z-50">Consultants <Image src="/vector.svg" alt="vector" className="absolute left-0 -bottom-1 -z-50" width={800} height={100}/></span> <br />
        for public impact
      </h1>
      <p className="w-8/12 lg:w-3/4 xl:w-5/12 my-12">
        Our clients are from private and public corporations. INTERSTATE have
        worked with international organizations and we maintain a wide database
        of local and international agencies.
      </p>
      <ContactButton className="shadow-2xl" />
      <AnimatedLogoCloud />
    </div>
  );
}
