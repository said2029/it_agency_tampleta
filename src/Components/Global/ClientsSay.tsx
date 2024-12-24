import Image from "next/image";
import React from "react";

export default function ClientsSay() {
  return (
    <section className="bg-[#F3F3F3] px-mobile py-4 text-center md:mt-top lg:px-spacing_2">
      <p>
        <span className="rounded-full bg-secandry_primary px-1 font-bold text-white">
          Client
        </span>{" "}
        Testimonial
      </p>
      <h3 className="text-h5 md:text-h4">What clients say</h3>
      <div className="mt-5 flex flex-wrap justify-center gap-10 md:mt-16">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index + "What clients say"}
            className="space- w-[400px] rounded-2xl bg-white px-2 pt-10"
          >
            <h6 className="text-h6">“Amazing services”</h6>
            <p className="mt-6 text-paragraph">
              As a startup, we needed a technology partner who could help us
              bring our vision to life. Itsafe exceeded our expectations with
              their innovative solutions and proactive approach. They guided us
              through every step of the process, our journey together.
            </p>
            <div className="bg-[url(/assets/images/elemants/Star 3.png)] relative mt-7 flex h-52 w-full items-end justify-center">
              <Image
                className="opacity-75"
                width={300}
                height={300}
                alt=""
                src={"/assets/images/elemants/elemants (15).png"}
              />
              <Image
                className="absolute"
                width={300}
                height={300}
                alt=""
                src={"/assets/images/img/Rectangle 10.png"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
