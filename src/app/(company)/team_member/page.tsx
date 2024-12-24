import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import TeamCard from "./_components/TeamCard";

export default function page() {
  return (
    <main className="overflow-hidden max-w-screen">
      <Top_Banner Title="Team Member" highlightNane="Members" subTitle="Team" />
      <section className="mt-6 px-mobile md:mt-top md:px-spacing_2">
        <div className="flex flex-col relative items-center justify-center md:flex-row max-w-screen-lg">
          <div className="max-w-3xl space-y-4 relative">
            <p>
              Our Dedicated <span className="text-secandry_primary">Team </span>
            </p>
            <h2 className="text-h4">Get to Know Our Expert Techco Team</h2>
            <p>
              Get acquainted with the powerhouse behind Techco – our expert team
              of professionals dedicated to revolutionizing the IT landscape.
              Comprising.
            </p>
            <Button>
              Talk to an Expart <IoIosArrowRoundForward />
            </Button>
          </div>
          <div>
            <Image
              width={600}
              height={600}
              alt=""
              src={"/assets/images/elemants/elemants (23).png"}
            />
          </div>
          <div className="absolute -top-40 -right-[50rem] -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (13).png"
            />
          </div>
        </div>
        <div className="mt-top text-center">
          <p className="text-paragraph">Our Expert Team <strong className="bg-secandry_primary text-white rounded-full px-2">Members</strong></p>
          <h2 className="text-h5">Top Skilled Experts</h2>
        </div>
        <div className="relative flex-col md:flex-row mt-60 flex flex-wrap gap-2 justify-between">
          {Array.from({ length: 10 }).map(() => (
            <TeamCard className="flex-grow h-96 md:w-[260px] md:flex-grow-0" />
          ))}
          <div className="absolute -bottom-44 -right-80 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (14).png"
            />
          </div>
          <div className="absolute -top-44 -left-96 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (13).png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
