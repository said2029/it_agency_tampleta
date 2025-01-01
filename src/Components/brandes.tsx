import { Brands } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function Brandes({ className }: { className?: String }) {
  return (
    <div
      className={
        "h-[130px] overflow-hidden rounded-md bg-black_50 p-3 " + className
      }
    >
      <div className="flex h-full items-center gap-6 brand-slider">
        { Brands.map((item, i) => (
          <div
            key={"brand_" + i}
            className="grid h-full min-w-[159px] place-content-center rounded-lg bg-white p-2"
          >
            <span>
              <Image width={300} height={200} src={item} alt="brand1" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
