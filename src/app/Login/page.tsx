"use client";
import React from "react";
import Image from "next/image";
import { Header } from "@/components/sections/Header";

import loginImg from "@/assets/LoginForm/login-Img1.jpg";
import { User, LockKeyhole } from "lucide-react";
export default function Login() {
  return (
    <div className="bg-gradient-to-r from-[#4c6ef5] to-[#d290f1] h-[100vh]">
      <Header />
      <div className="flex items-center justify-center flex-col h-[82vh]">
        <div className="flex items-center justify-between rounded-xl">
          <div className="">
            <Image
              src={loginImg}
              alt="loginImg"
              className="w-[30rem] h-auto rounded-l-xl"
            />
          </div>
          <div className="border-2 h-full rounded-r-xl w-[20rem] flex flex-col items-center justify-center gap-8">
            <h3>USER LOGIN</h3>
            <form
              action=""
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="input-box">
                <User />
                <input
                  type="text"
                  placeholder="user id"
                  className="login-input"
                />
              </div>
              <div className="input-box">
                <LockKeyhole />
                <input
                  type="password"
                  placeholder="password"
                  className="login-input"
                />
              </div>
              <p>Forgot password?</p>
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
