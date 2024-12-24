import Featured_Services from "@/Components/Global/Featured_Services";
import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function page() {
  return (
    <main className="relative overflow-hidden bg-[#74a5ff2d] pb-28">
      <Top_Banner
        Title="Our Services"
        highlightNane="Details"
        subTitle="Team"
      />
      <div className="mt-top md:px-spacing_2">
        <div className="relative flex max-w-screen-lg flex-col items-center justify-center md:flex-row">
          <div className="relative max-w-3xl space-y-10">
            <p>
              We Are <span className="text-secandry_primary">IT Guidance😍</span>
            </p>
            <h2 className="text-h4">Tailored IT Solutions for Your Success</h2>
            <p>
              we understand that every business is unique, with its own set of
              challenges, goals, and aspirations. That's why we offer tailored
              IT solutions designed.
            </p>
            <Button size={"lg"}>
              Talk to an Expart <IoIosArrowRoundForward />
            </Button>
          </div>
          <div>
            <Image
              className="transition-all hover:scale-110"
              width={600}
              height={600}
              alt=""
              src={"/assets/images/elemants/elemants (23).png"}
            />
          </div>
          <div className="absolute -right-[50rem] -top-40 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (13).png"
            />
          </div>
        </div>
        <Featured_Services className="px-0" />
        <div className="mt-top flex flex-col items-center justify-center text-center">
          <p>
            <span className="text-secandry_primary">Why Us</span> better
          </p>
          <h5 className="max-w-xl text-center text-h5">
            Why Our Services are Better Than Others?
          </h5>
          <div className="flex w-full justify-center">
            <div className="mt-60 grid grid-cols-2 gap-x-20 gap-y-9">
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/assets/images/elemants/elemants (2).png"}
                />
                <h6 className="text-h6">Quality Comes First</h6>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/assets/images/elemants/elemants (24).png"}
                />
                <h6 className="text-h6">Flexible Cooperation</h6>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/assets/images/elemants/elemants (25).png"}
                />
                <h6 className="text-h6">On-time Delivery</h6>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/assets/images/elemants/elemants (26).png"}
                />
                <h6 className="text-h6">Transparent Costs</h6>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/assets/images/elemants/elemants (27).png"}
                />
                <h6 className="text-h6">Qualified Developers</h6>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  alt=""
                  src={"/assets/images/elemants/elemants (28).png"}
                />
                <h6 className="text-h6">Quick Scale-up</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 -left-52 -z-50 hidden animate-spin2 md:block">
        <Image
          width={600}
          height={600}
          alt=""
          src="/assets/images/elemants/elemants (14).png"
        />
      </div>
    </main>
  );
}
