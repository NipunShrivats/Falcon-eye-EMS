"use client";
import { ArrowRight, AlignJustify } from "lucide-react";
import Logo1 from "@/assets/falcon1-logo.png";
import SideNav from "../SideNav";
import Link from "next/link";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
    console.log("toggle navbar", isClick);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20" id="header">
      {/* sidebar component */}
      {isClick && <SideNav isActive={isClick} />}
      {/* sidebar component */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 relative">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5 bg-white/20">
        <div className="container px-4 md:px-0">
          <div className="flex justify-between items-center">
            <Image src={Logo1} alt="" className="w-16 md:w-[80]" />

            {/* hamburger icon */}
            <AlignJustify
              className={`md:hidden w-8 h-7 rounded-sm z-50 hamburger ${
                isClick ? "isActive" : "isinActive"
              }`}
              onClick={toggleNavbar}
            />
            {/* hamburger icon */}

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <ScrollLink
                to="header"
                smooth={true}
                offset={-5000}
                duration={500}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="product"
                smooth={true}
                offset={-100}
                duration={500}
              >
                How to use
              </ScrollLink>
              <ScrollLink
                to="pricing"
                smooth={true}
                offset={-100}
                duration={500}
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="testimonials"
                smooth={true}
                offset={-40}
                duration={500}
              >
                Reviews
              </ScrollLink>
              <ScrollLink to="footer" smooth={true} offset={100} duration={500}>
                Help
              </ScrollLink>

              <Link href="/Login" className="btn btn-primary">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
