import React from "react";
import Link from "next/link";

export default function SideNav(isActive: { isActive: boolean }) {
  return (
    <section className={`navBarStyle-box absolute z-50 `}>
      <nav className="relative navBarStyle text-black">
        <Link href="#">About</Link>
        <Link href="#">Features</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Updates</Link>
        <Link href="#">Help</Link>
        <button className="btn btn-primary">Get for free</button>
      </nav>
    </section>
  );
}
