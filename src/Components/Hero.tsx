"use client";
import React from "react";
import Button from "./UI/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

export default function Hero() {
  useGSAP(() => {
    const interTL = gsap.timeline();
    interTL
      .from(".hero-section h1", {
        y: "40px",
        opacity: 0,
      })
      .from(".hero-section p", {
        y: "40px",
        opacity: 0,
      })
      .from(".hero-section button", {
        y: "40px",
        opacity: 0,
      });
  });
  return (
    <div className="hero-section relative grid overflow-hidden h-[923px] place-content-center bg-primary bg-[url(/assets/images/img/hero_Image.jpg)] text-center text-white">
      <div className="z-30 flex w-full flex-col items-center justify-center gap-[27px]">
        <h1 className="md:px-spacing_2 text-center text-h5 md:text-h4 xl:text-h1">
          Empowering <span className="text-secandry">Businesses</span> with
          Cutting-Edge IT Solutions.
        </h1>
        <p className="text-paragraph_b text-white/100">
          Transform your digital presence and elevate your business with our
          innovative IT services.
        </p>
        <Button className="w-fit bg-secandry_gradinet md:mt-7" name="Get Started" />
      </div>
    </div>
  );
}
