"use client";
import React from "react";
import Image from "next/image";

import loginImg from "@/assets/LoginForm/login-Img1.jpg";

export default function Login() {
  return (
    <div className="login-background">
      <div className="login-box">
        {/* left data */}
        <div className="left-side">
          <Image src={loginImg} alt="loginImg" />
        </div>
        {/* right data */}
        <div className="right-side">
          {/* <form action=""></form> */}
          right
        </div>
      </div>
    </div>
  );
}
