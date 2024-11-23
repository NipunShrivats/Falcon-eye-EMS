import React from "react";
// import Link from "next/link";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

export default function SideNav(isActive: { isActive: boolean }) {
  console.log("from sidenav", isActive);
  return (
    <section
      className={`navBarStyle-box absolute z-50
    ${isActive ? "navVisible" : "NavHidden"}`}
    >
      <nav className="relative navBarStyle text-black">
        <Link to="header" smooth={true} offset={-5000} duration={500}>
          Home
        </Link>
        <Link to="product" smooth={true} offset={-100} duration={500}>
          How to use
        </Link>
        <Link to="pricing" smooth={true} offset={-100} duration={500}>
          Features
        </Link>
        <Link to="testimonials" smooth={true} offset={-400} duration={500}>
          Reviews
        </Link>
        <Link to="footer" smooth={true} offset={100} duration={500}>
          Help
        </Link>

        <button className="btn btn-primary">Login</button>
      </nav>
    </section>
  );
}
