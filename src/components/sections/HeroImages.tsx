"use client";
import React from "react";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {
  motion,
  // useScroll,
  // useTransform,
  // useMotionValueEvent,
} from "motion/react";

export default function HeroImages() {
  return (
    <>
      <motion.img
        src={cogImage.src}
        alt=""
        className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-8 lg:left-32"
        animate={{
          // translateX: [-30, 30],
          rotate: "360deg",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 40,
        }}
      />
      <motion.img
        src={cylinderImage.src}
        alt=""
        className="absolute -top-24 w-20 md:w-28 md:-top-6"
        animate={{
          translateY: [-30, 500],
          // rotate: "45deg",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
        }}
      />
      <motion.img
        src={noodleImage.src}
        alt=""
        width={220}
        height={220}
        className="absolute right-6 w-20 md:w-28 md:bottom-0 md:-left-16 xl:left-[50rem] xl:w-36"
        // style={{ translateY: translateY }}
        animate={{
          translateY: [30, -500],
          // rotate: "45deg",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
        }}
      />
    </>
  );
}
