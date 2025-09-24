import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="px-[3.75rem] pb-20">
      <h2 className="text-7xl font-medium w-1/2 mb-20">
        We&apos;re Here for You Let&apos;s Connect
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex gap-4 flex-col">
          <p className="font-semibold">Contact us at</p>
          <p className="text-[#778088]">(254) 700719943</p>
          <p className="text-[#778088]">InterstateKenya@gmail.com</p>
          <p className="text-[#778088]">
            KIRICHWA GARDENS RD, SUITE C4(P.O. BOX 20634) NAIROBI, KENYA
          </p>
          <p className="text-[#778088]">Reg.No: BN/2014/282720</p>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="John Doe" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="john@email.com" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="nessage">Message</Label>
            <Textarea id="nessage" placeholder="Type message here" />
          </div>
          <Button className="w-1/2">Submit</Button>
        </div>
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/images/phone.png"
            width={800}
            height={500}
            alt="red phone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
