"use client";
import { Brands } from "@/data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

export default function Brandes_2({ className }: { className?: String }) {
  useGSAP(() => {
    const brandSlider = gsap.utils.toArray(".brand-slider");
    if (brandSlider) {
      brandSlider.forEach((brand: any) => {
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
  });
  return (
    <div className="z-30 h-fit w-full overflow-hidden bg-primary py-[15px]">
    <div className="brand-slider flex h-[68px] w-fit items-center gap-3">
      {Brands.map((item, index) => (
        <div
          key={index}
          className="grid h-full w-40 place-content-center rounded-lg bg-white p-2"
        >
          <Image
            className="w-full"
            src={item}
            width={200}
            height={200}
            alt="brand"
          />
        </div>
      ))}
    </div>
  </div>
  );
}
