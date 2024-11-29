"use client";
import React from "react";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { motion } from "motion/react";

import loginImg from "@/assets/LoginForm/login-Img6.jpg";
import { User, LockKeyhole } from "lucide-react";

// import bird1 from "@/assets/LoginForm/bird1.png";
import bird2 from "@/assets/LoginForm/bird2.png";
import bird3 from "@/assets/LoginForm/bird3.png";
import bird4 from "@/assets/LoginForm/bird4.png";

import cogImage from "@/assets/cog.png";
import starImage from "@/assets/star.png";

export default function Login() {
  return (
    // <div className="bg-gradient-to-r from-[#4c6ef5] via-[#956eee] to-[#d290f1] h-[100vh]]">
    <div className="bg-gradient-to-r from-[#98adff] via-[#1103af74] to-[#1352ff47] ">
      {/* <div className="h-[100vh]]"> */}
      <Header />
      <div className="flex items-center justify-center flex-col h-[84vh]">
        <div className="flex-col flex items-center justify-between shadow-2xl mx-4 relative rounded-xl lg:flex-row ">
          <div className="">
            <Image
              src={loginImg}
              alt="loginImg"
              className="w-[40rem] h-auto rounded-t-xl
              blur-[1px] md:w-[35rem] md:h-[20rem] lg:rounded-t-none lg:rounded-l-xl lg:w-[40rem] lg:md:h-[30rem]"
            />
          </div>
          <div className="">
            <motion.img
              src={bird2.src}
              alt=""
              className="bird top-12 right-15 lg:right-[38rem]"
              animate={{
                translateY: [-5, 5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
              }}
            />
            <motion.img
              src={bird3.src}
              alt=""
              className="bird top-2 right-20 lg:right-[22rem]"
              animate={{
                translateX: [-5, 5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 15,
              }}
            />
            <motion.img
              src={bird4.src}
              alt=""
              className="bird top-5 left-8 "
              animate={{
                scale: 1.5,
                translateY: [-5, 5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
              }}
            />
            <div className="font-sans text-white absolute w-[100%] left-0 text-center top-20 md:top-32 lg:w-[67%] lg:top-44">
              <h1 className="text-[2rem] lg:text-[4rem] uppercase">
                Welcome Back!
              </h1>
              <p className="px-4">
                Please Login to your account to access your detailed reports.
              </p>
            </div>
          </div>
          <div className="bg-white h-[18rem] rounded-b-xl w-full flex flex-col items-center justify-center gap-4 lg:w-[20rem] lg:h-full lg:rounded-b-none lg:rounded-r-xl overflow-hidden">
            <h3 className="font-sans font-bold text-black text-xl">
              USER LOGIN
            </h3>
            <form
              action=""
              className="flex flex-col items-center justify-center gap-3 "
            >
              <div className="input-box">
                <User className="w-[1.3rem]" />
                <input
                  type="text"
                  placeholder="user id"
                  className="login-input"
                />
              </div>
              <div className="input-box">
                <LockKeyhole className="w-[1.3rem]" />
                <input
                  type="password"
                  placeholder="password"
                  className="login-input"
                />
              </div>
              <p className="text-sm">
                Forgot password? <span>Contact HR!</span>
              </p>
              <div className="">
                <button className="bg-black text-white font-medium border border-[rgba(0,0,0,0.3)] py-2 px-14 rounded-[500rem] hover:bg-slate-800 transition ease-in-out duration-500">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <motion.img
        className="absolute hidden lg:block lg:w-[12rem] lg:bottom-[2rem] lg:right-[3rem] xl:w-[20rem] xl:bottom-[6rem] xl:right-[5rem]"
        src={cogImage.src}
        alt=""
        animate={{
          rotate: "360deg",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 40,
        }}
      />
      <motion.img
        className="absolute hidden lg:block lg:w-[12rem] lg:top-[8rem] lg:left-[1rem] xl:w-[20rem] xl:top-[6rem] xl:left-[5rem]"
        src={starImage.src}
        alt=""
        animate={{
          rotate: "-360deg",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 40,
        }}
      />
    </div>
  );
}
