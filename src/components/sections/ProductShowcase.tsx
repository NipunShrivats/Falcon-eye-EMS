import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center ">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="text-center text-3xl md:[text-54px] md:leading-60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5 ">
            A more effective way to track your progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight test-[#010D3E] mt-5">
            Effortlessly turn your ideas into fully functional, responsive, SaaS
            Website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center">
            <Image src={productImage} alt="" className="mt-10" width={900} />
          </div>
          <Image
            src={pyramidImage}
            alt=""
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt=""
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
