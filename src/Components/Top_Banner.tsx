import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Top_Banner({ className,Title,subTitle,highlightNane }: { className?: string,Title:string,subTitle:string,highlightNane:string }) {
  return (
    <section
      className={cn(
        "relative grid h-72 w-full place-content-center",
        className,
      )}
    >
      <Image
        className="pointer-events-none absolute inset-0 left-0 top-0 -z-40 h-full w-full"
        width={1000}
        height={600}
        src={"/assets/images/backgrounds/Rectangle 14.png"}
        alt="top_image_benner"
      />
      <div className="text-white text-center px-spacing">
        <p>{subTitle} <span className="text-secandry_primary">{highlightNane}</span></p>
        <h1 className="text-4xl lg:text-h3">{Title}</h1>
      </div>
    </section>
  );
}
