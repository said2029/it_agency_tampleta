import Brand_Work_With from "@/Components/Global/Brand_Work_With";
import Top_Banner from "@/Components/Top_Banner";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="relative bg-[#74a5ff2d] overflow-hidden">
      <Top_Banner Title="About Us" highlightNane="Techco" subTitle="About More" className="flex h-[400px] justify-center pt-14" />
      <section className="lg:-translate-y-40 px-mobile md:px-spacing_2">
        <div className="grid-cols-1 gap-10 md:grid-cols-3 hidden lg:grid">
          <div className="col-span-2 h-[506px] overflow-hidden rounded-xl shadow-xl">
            <Image
              className="h-full w-full object-cover"
              width={600}
              height={600}
              alt=""
              src={"/assets/images/img/Rectangle 15.png"}
            />
          </div>
          <div className="h-[506px] overflow-hidden rounded-xl shadow-xl">
            <Image
              className="h-full w-full object-cover"
              width={300}
              height={300}
              alt=""
              src={"/assets/images/img/Rectangle 16.png"}
            />
          </div>
        </div>

        <div className="mt-60 gap-4 flex text-center md:text-start flex-col md:flex-row items-center justify-between">
          <div>
            <p>
              About{" "}
              <span className="rounded-full bg-secandry_primary px-1 text-white">
                Techco
              </span>
            </p>
            <h2 className="text-h4">We Provide You Flexible Services</h2>
          </div>
          <p className="max-w-xl text-paragraph_b">
             At Techco, we pride ourselves on offering dynamic and IT to suit
            your specific requirements. Our flexible approach means we can
            adjust our offerings to accommodate your evolving needs, whether you
            require comprehensive IT infrastructure support, strategic
            consultancy, software development
          </p>
        </div>

        <div className="relative mt-60 flex-wrap gap-3 flex items-center justify-between lg:h-[400px] lg:[&_div]:w-[300px]">
          <div className="h-full rounded-xl bg-white p-2">
            <Image
              width={300}
              height={300}
              alt=""
              src={"/assets/images/elemants/elemants (12).png"}
            />
            <h5 className="text-h5">Our History</h5>
            <p className="text-paragraph text-black_75">
              Since 1997 we have been a visionary and a reliable software
              engineering partner for world-class brands. abbreviated as co.
            </p>
          </div>
          <div className="h-full rounded-xl bg-white p-2">
            <Image
              width={300}
              height={300}
              alt=""
              src={"/assets/images/elemants/elemants (16).png"}
            />
            <h5 className="text-h5">Our Mission</h5>
            <p className="text-paragraph text-black_75">
              A mission statement clarifies what the company wants to achieve,
              who they want to support, and why they want to support them. On
              the other hand
            </p>
          </div>
          <div className="h-full rounded-xl bg-white p-2">
            <Image
              width={300}
              height={300}
              alt=""
              src={"/assets/images/elemants/elemants (17).png"}
            />
            <h5 className="text-h5">Our Vision</h5>
            <p className="text-paragraph text-black_75">
              A vision statement for a company or organization focuses on the
              potential inherent in the company's future; it's about what they
              intend to be how you
            </p>
          </div>

          <span className="absolute -left-[34em] top-0 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (13).png"
            />
          </span>
        </div>
        <Brand_Work_With ShowStars={false} className="bg-none" />
      </section>
      <div className="absolute -bottom-44 -right-48 -z-50 hidden animate-spin2 md:block">
        <Image
          width={600}
          height={600}
          alt=""
          src="/assets/images/elemants/elemants (14).png"
        />
      </div>
    </div>
  );
}
