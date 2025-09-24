"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Government Partnerships & Stakeholder Alignment",
    description:
      "We help ministries, agencies, donors, and private partners align around a clear mandate and delivery plan. Services include stakeholder mapping, MoUs, governance models, and decision routines that keep complex coalitions moving.",
  },
  {
    id: 2,
    title: "PPP Structuring & Transaction Advisory",
    description:
      "From concept to close, we structure bankable public-private partnerships. We prepare feasibility studies, risk allocation matrices, term sheets, and tender documents - then support negotiations through financial close.",
  },
  {
    id: 3,
    title: "Donor & Grant Mobilization",
    description:
      "We turn priorities into funded programs. We craft proposals, logical frameworks, budgets, and MEL plans for multilaterals and foundations - and coordinate compliance and reporting once awarded.",
  },
  {
    id: 4,
    title: "Donor & Grant Mobilization",
    description:
      "We turn priorities into funded programs. We craft proposals, logical frameworks, budgets, and MEL plans for multilaterals and foundations - and coordinate compliance and reporting once awarded.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <section className="py-20 px-[3.75rem] text-center" id="services">
      <h2 className="text-7xl font-medium mb-16">Our Services</h2>

      <div className="max-w-7xl mx-auto relative">
        <div className="absolute h-[1px] w-full bottom-0 left-0 bg-gray-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="text-left cursor-pointer group relative"
              onClick={() => setActiveService(service.id)}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4 leading-tight w-[85%]">
                {service.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0">
                {activeService === service.id && (
                  <div className="w-full h-[4px] bg-blue-600 rounded-full"></div>
                )}

                {activeService !== service.id && (
                  <div className="w-full h-[2px] bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[40rem] overflow-hidden mt-20 rounded-2xl">
          <Image src="/assets/images/bridge.png" width={800} height={500} alt="bridge in Kenya" className="w-full h-full object-cover"/>
      </div>
    </section>
  );
}
