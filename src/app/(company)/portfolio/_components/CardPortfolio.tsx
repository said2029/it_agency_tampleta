import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardPortfolio() {
  return (
    <Link href={"/portfolio/dsfihe"} className="bg-white p-3 opacity-100">
      <div className="w-full h-[200px] md:h-[400px]">
        <Image
          className="w-full h-full object-cover"
          width={400}
          height={400}
          alt="portfolioImage"
          src={"/assets/images/img/portfolioImage.png"}
        />
      </div>
      <div className="mt-2 space-y-2">
        <p className="flex items-center gap-2 opacity-75">
          <Image
            width={15}
            height={15}
            alt="portfolioIcon"
            src={"/assets/Icons/portfolioIcon.svg"}
          />{" "}
          Technology
        </p>
        <h3 className="text-2xl font-semibold opacity-90">
          Driving Digital Transformation Explore the Depth of Our IT Projects
        </h3>
      </div>
    </Link>
  );
}
