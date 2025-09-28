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
    title: "Strategic Implementation Support",
    description:
      "We provide end-to-end implementation support for complex initiatives. From program design to execution monitoring, we ensure strategic objectives are met through systematic coordination and adaptive management approaches.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <section className="py-20 px-6 md:px-10 xl:px-[3.75rem] max-md:px-6 text-center" id="services">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-4xl font-medium mb-16">Our Services</h2>

      <div className="max-w-7xl mx-auto relative">
        <div className="absolute h-[1px] w-full bottom-0 left-0 bg-gray-200 max-lg:hidden"></div>
        
        <div className="hidden lg:grid grid-cols-4 gap-8">
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

        <div className="lg:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 relative" style={{ width: 'max-content' }}>
              <div className="absolute h-[1px] w-full bottom-0 left-0 bg-gray-200"></div>
              
              {services.map((service) => (
                <div
                  key={service.id}
                  className="text-left cursor-pointer group relative flex-shrink-0"
                  style={{ 
                    width: 'calc(50vw - 2rem)',
                    minWidth: '280px',
                    maxWidth: '400px'
                  }}
                  onClick={() => setActiveService(service.id)}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0">
                    {activeService === service.id && (
                      <div className="hidden lg:block w-full h-[4px] bg-blue-600 rounded-full"></div>
                    )}

                    {activeService !== service.id && (
                      <div className="w-full h-[2px] bg-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>  
        </div>
      </div>
      
      <div className="w-full h-[40rem] max-md:h-[11rem] max-lg:h-[20rem] overflow-hidden mt-20 rounded-2xl">
        <Image 
          src="/assets/images/bridge.png" 
          width={800} 
          height={500} 
          alt="bridge in Kenya" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}