"use client";
import React from "react";
import Image from "next/image";
import { Header } from "@/components/sections/Header";

import loginImg from "@/assets/LoginForm/login-Img6.jpg";
import { User, LockKeyhole } from "lucide-react";

// import bird1 from "@/assets/LoginForm/bird1.png";
// import bird2 from "@/assets/LoginForm/bird2.png";
// import bird3 from "@/assets/LoginForm/bird3.png";
// import bird4 from "@/assets/LoginForm/bird4.png";

export default function Login() {
  return (
    // <div className="bg-gradient-to-r from-[#4c6ef5] via-[#956eee] to-[#d290f1] h-[100vh]]">
    <div className="bg-gradient-to-r from-[#98adff] via-[#6523ff94] to-[#1352ff47] h-[100vh]]">
      {/* <div className="h-[100vh]]"> */}
      <Header />
      <div className="flex items-center justify-center flex-col h-[82vh]">
        <div className="flex-col flex items-center justify-between shadow-2xl px-4">
          <div className="">
            <Image
              src={loginImg}
              alt="loginImg"
              className="w-[40rem] h-auto rounded-t-xl"
            />
            {/* <div className="">hi</div> */}
          </div>
          <div className="bg-white h-[18rem] rounded-b-xl w-full flex flex-col items-center justify-center gap-4 ">
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

      {/* <div className="">
        <Image src={bird1} alt="" className="bird" />
        <Image src={bird2} alt="" className="bird" />
        <Image src={bird3} alt="" className="bird" />
        <Image src={bird4} alt="" className="bird" />
      </div> */}
    </div>
  );
}
