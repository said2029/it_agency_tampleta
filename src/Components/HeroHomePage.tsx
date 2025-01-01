"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ButtonMain from "./MianButton";
import { home } from "@/data/data";
import { parseAndStyleText } from "@/utils/parseAndStyleText";
gsap.registerPlugin(useGSAP);

export default function HeroHomePage() {
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
    <div className="hero-section relative grid h-[923px] place-content-center overflow-hidden bg-primary bg-[url(/assets/images/img/hero_Image.jpg)] text-center text-white">
      <div className="z-30 flex w-full flex-col items-center justify-center gap-[27px]">
        <h1 className="text-center text-h5 md:px-spacing_2 md:text-h4 xl:text-h1">
          {parseAndStyleText(home.hero.title, "!text-secandry_primary")}
        </h1>
        <p className="text-paragraph_b text-white/100">
          {home.hero.description}
        </p>
        <ButtonMain
        href={home.hero.cta.link}
          className="w-fit bg-secandry_gradinet md:mt-7"
          name={home.hero.cta.name}
        />
      </div>
    </div>
  );
}
