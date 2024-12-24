import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardPortfolio() {
  return (
    <Link href={"/portfolio/dsfihe"} className="w-[26rem] bg-white p-3">
      <Image
        width={400}
        height={400}
        alt="portfolioImage"
        src={"/assets/images/img/portfolioImage.png"}
      />
      <div className="space-y-2 mt-2">
        <p className="flex items-center gap-2">
          <Image
            width={15}
            height={15}
            alt="portfolioIcon"
            src={"/assets/Icons/portfolioIcon.svg"}
          />{" "}
          Technology
        </p>
        <h3 className="text-h6">Driving Digital Transformation Explore the Depth of Our IT Projects</h3>
      </div>
    </Link>
  );
}
