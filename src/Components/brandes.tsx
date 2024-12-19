"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function Brandes({ className }: { className?: String }) {
  useGSAP(() => {
    const brandSlider = document.querySelector(".brand-slider");
    if (brandSlider) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(brandSlider, {
        x: "-100%",
        duration: 30,
        ease: "linear",
      });
      tl.to(brandSlider, {
        x: "0",
        duration: 0,
      });
    }

  });
  return (
    <div
      className={
        "h-[130px] overflow-hidden rounded-md bg-black_50 p-3 " + className
      }
    >
      <div className="flex h-full items-center gap-6 brand-slider">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={"brand_" + i}
            className="grid h-full min-w-[159px] place-content-center rounded-lg bg-white p-2"
          >
            <span>
              <img src="/assets/images/brandes/brand_1.webp" alt="brand1" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
