import React from "react";
import ContactButton from "./ui/contact-button";
import AnimatedLogoCloud from "./animationlogocloud";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-[#fff8f8] via-[#fff7f7cf] to-[#ffffff] items-center justify-center text-center">
      <h1 className="text-7xl font-semibold">
        Professional <span className="text-[#3A95F4]">Consultants</span> <br />
        for public impact
      </h1>
      <p className="lg:w-9/12 xl:w-5/12 my-12">
        Our clients are from private and public corporations. INTERSTATE have
        worked with international organizations and we maintain a wide database
        of local and international agencies.
      </p>
      <ContactButton className="shadow-2xl" />
      <AnimatedLogoCloud />
    </div>
  );
}
