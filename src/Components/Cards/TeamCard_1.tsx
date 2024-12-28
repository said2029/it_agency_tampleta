import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard_1({className}:{className?:string}) {
  return (
    <div className={cn("relative h-[468px] overflow-hidden rounded-xl",className)}>
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        width={300}
        height={300}
        alt=""
        src={"/assets/images/img/Rectangle 11.png"}
      />
      <div className="absolute bottom-0 left-0 bg-primary_gradinet p-3 text-start text-white">
        <h5 className="text-h6">August Everest</h5>
        <p className="text-paragraph opacity-70">SYSTEMS ENGINEER</p>
      </div>
      <div className="absolute right-2 top-2 flex flex-col gap-2">
        <Link href={"/"}>
          <Image
            width={34}
            height={34}
            alt=""
            src="/assets/images/elemants/elemants (5).png"
          />
        </Link>
        <Link href={"/"}>
          <Image
            width={34}
            height={34}
            alt=""
            src="/assets/images/elemants/elemants (6).png"
          />
        </Link>
        <Link href={"/"}>
          <Image
            width={34}
            height={34}
            alt=""
            src="/assets/images/elemants/elemants (7).png"
          />
        </Link>
        <Link href={"/"}>
          <Image
            width={34}
            height={34}
            alt=""
            src="/assets/images/elemants/elemants (8).png"
          />
        </Link>
      </div>
    </div>
  );
}
