import { ArrowRight, AlignJustify } from "lucide-react";
// import Logo from "@/assets/logosaas.png";
import Logo1 from "@/assets/falcon1-logo.png";
import Logo2 from "@/assets/falcon2-logo.png";
import Link from "next/link";

import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container px-4 md:px-0">
          <div className="flex justify-between items-center">
            <Image src={Logo1} alt="" className="w-16 md:w-[80]" />
            <AlignJustify className="md:hidden border-2" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Customers</Link>
              <Link href="#">Updates</Link>
              <Link href="#">Help</Link>

              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
