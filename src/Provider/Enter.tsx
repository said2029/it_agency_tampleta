"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Enter({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const brandSlider = gsap.utils.toArray(".brand-slider");
    if (brandSlider) {
      brandSlider.forEach((brand:any) => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(brand, {
          x: "-100%",
          duration: 30,
          ease: "linear",
        });
        tl.to(brand, {
          x: "0",
          duration: 0,
        });
      });
    }
    // inter
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
  return <>{children}</>;
}
