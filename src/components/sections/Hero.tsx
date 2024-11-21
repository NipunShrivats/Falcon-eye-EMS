import { ArrowRight } from "lucide-react";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-t from-blue-500 to-white/20 overflow-x-clip">
      <div className="container px-4 md:px-0">
        <div className="md:flex items-center">
          <div className="md:w-[478px] ml-12">
            <div className="tag">version 1.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to Productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplashimnet with an app designed to track
              your progress, motivate your efforts, and celebrate your success.
            </p>
            <div className="flex gap-1 item-center mt-[30px]">
              <button className="btn btn-primary">Get For Free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt=""
              className="md:absolute md:h-full md:w-auto md:max-w-none lg:left-[160px] md:left-[50px]"
            ></Image>
            <Image
              src={cylinderImage}
              alt=""
              width={220}
              height={220}
              className="hidden md:block -top-12 lg:left-[60px] md:absolute "
            ></Image>
            <Image
              src={noodleImage}
              alt=""
              width={220}
              height={220}
              className="hidden lg:block md:block top-[524px] lg:left-[700px] md:absolute rotate-[30deg]"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
