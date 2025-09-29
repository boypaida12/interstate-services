"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  id: number;
  title: React.ReactNode;
  description: React.ReactNode;
}

const accordionData: AccordionData[] = [
  {
    id: 1,
    title: (
      <div className="flex gap-5 items-center">
        <p>01.</p>
        <p>International Water Conference - USA</p>
      </div>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        Contracted by the City of Seattle and county agencies, we delivered
        end-to-end delgate services for a Kenyan cohort registraiton, travel
        itineraries, accommodation blocks, and on-site coordination- so VIPs and
        technical teams could focus on the program
      </div>
    ),
  },
  {
    id: 2,
     title: (
      <div className="flex gap-5 items-center">
        <p>02.</p>
        <p>Diaspora Conference - Kenya/USA</p>
      </div>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        Designed and produced an international diaspora forum at KICC, coordinating multi-country invitations, sponsorship outreach, protocol, and security liaison, and a seamless registration and media experience.
      </div>
    ),
  },
  {
    id: 3,
     title: (
      <div className="flex gap-5 items-center">
        <p>03.</p>
        <p>CAF International Soccer Tournament - East Africa</p>
      </div>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        As a stakeholder working with the Department of Sports, we supported CAF fixtures with transportation and accommodation for teams and officials, accreditation and venue logistics - keeping schedules tight and compliant across agencies
      </div>
    ),
  },
  {
    id: 4,
     title: (
      <div className="flex gap-5 items-center">
        <p>04.</p>
        <p>Vote Abroad International - USA</p>
      </div>
    ),
    description: (
      <div className="space-y-2 w-11/12">
        Contracted to mobilize Americans living overseas to participate as absentee voters through non-partisan outreach, digitall signup flows and clear, jurisdiction-specific guidance.
      </div>
    ),
  },
];

export function AccordionDemo({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const [openItem, setOpenItem] = useState("item-1");

  const handleItemClick = (id: number) => {
    onSelect(id);
    setOpenItem(`item-${id}`);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={openItem}
      onValueChange={(value) => setOpenItem(value)}
    >
      {accordionData.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className="mt-10">
          <div className="w-full">
            <AccordionTrigger
              onClick={() => handleItemClick(item.id)}
              className={`text-xl hover:no-underline hover:cursor-pointer text-white`}
            >
              {item.title}
            </AccordionTrigger>
          </div>
          <AccordionContent className={`text-secondary text-sm lg:text-base text-start`}>
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
