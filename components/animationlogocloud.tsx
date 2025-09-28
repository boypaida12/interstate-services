import Image from "next/image";
import React from "react";

const logos = [
  {
    name: "Kivuli",
    url: "/assets/images/kivuli.png",
  },
  {
    name: "Amcham",
    url: "/assets/images/acham.png",
  },
  {
    name: "Chess",
    url: "/assets/images/chess.png",
  },
  {
    name: "Council",
    url: "/assets/images/council.png",
  },
  {
    name: "CDA",
    url: "/assets/images/cda.png",
  },
];

const AnimatedLogoCloud: React.FC = () => {
  return (
    <div className="w-full mt-32">
      <p>Trusted by these partners</p>
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="logo-cloud-container group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 "
              >
                {logos.map((logo, logoIndex) => (
                  <div className="w-[15.125rem] h-15 overflow-hidden" key={logoIndex}>
                    <Image
                      width={80}
                      height={80}
                      key={logoIndex}
                      src={logo.url}
                      className="w-full h-full object-contain brightness-110"
                      alt={logo.name}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
