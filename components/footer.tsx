import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact us" },
];

export default function Footer() {
  return (
    <footer className="mt-10 py-10 relative bg-gray-100">
      <Image
        src="/assets/images/textlogo.png"
        width={200}
        height={200}
        alt="bridge in Kenya"
        className="mx-auto"
      />
      <h2 className="text-7xl w-1/3 mx-auto text-center font-medium my-8">
        Interstate Services Kenya
      </h2>
      <div className="flex gap-36 items-center w-fit mx-auto">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.label} className="">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="h-[1px] w-4/5 mx-auto bg-gray-300 mt-20"></div>
      <p className="text-center mt-10">Copyright © {new Date().getFullYear()} Interstate Services Kenya. All rights reserved. </p>
    </footer>
  );
}
