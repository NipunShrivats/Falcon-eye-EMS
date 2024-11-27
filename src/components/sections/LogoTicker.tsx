import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";

import { motion } from "motion/react";

import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden masking-effect">
          <motion.div
            className="flex gap-32 flex-none w-full justify-around "
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} alt="" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="" className="logo-ticker-image" />
            <Image src={echoLogo} alt="" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="" className="logo-ticker-image" />
            <Image src={apexLogo} alt="" className="logo-ticker-image" />

            {/* second set of logos for animation */}
            <Image src={acmeLogo} alt="" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="" className="logo-ticker-image" />
            <Image src={echoLogo} alt="" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="" className="logo-ticker-image" />
            <Image src={apexLogo} alt="" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
