import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactButton from "./ui/contact-button";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

export default function Navbar() {
  return (
    <nav className="py-5 px-[3.75rem] border flex items-center fixed top-0 left-0 right-0 bg-white z-[9999]">
      <div className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.avif"
          alt="Logo"
          width={40}
          height={40}
        />
        <p className="font-sans font-semibold">Interstate Services</p>
      </div>
      <div className="ms-auto flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.label} className="">
            {link.label}
          </Link>
        ))}
        <ContactButton/>
      </div>
    </nav>
  );
}
