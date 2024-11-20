import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";

import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden masking-effect">
          <div className="flex gap-14 flex-none w-full justify-around">
            <Image src={acmeLogo} alt="" className="logo-ticker-image"></Image>
            <Image
              src={quantumLogo}
              alt=""
              className="logo-ticker-image"
            ></Image>
            <Image src={echoLogo} alt="" className="logo-ticker-image"></Image>
            <Image
              src={celestialLogo}
              alt=""
              className="logo-ticker-image"
            ></Image>
            <Image src={apexLogo} alt="" className="logo-ticker-image"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
