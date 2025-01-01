import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { home } from "@/data/data";
import TeamCard_2 from "@/Components/Cards/TeamCard_2";
import TeamCard_1 from "@/Components/Cards/TeamCard_1";

export default function page() {
  return (
    <main className="max-w-screen overflow-hidden pb-28">
      <Top_Banner title="Team Member" highlightName="Members" subTitle="Team" />
      <section className="mt-6 px-mobile md:mt-top md:px-spacing_2">
        <div className="relative flex max-w-screen-lg flex-col items-center justify-center md:flex-row">
          <div className="relative max-w-3xl space-y-4">
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
          <div className="absolute -right-[50rem] -top-40 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (13).png"
            />
          </div>
        </div>
        <div className="mt-top text-center">
          <p className="text-paragraph">
            Our Expert Team{" "}
            <strong className="rounded-full bg-secandry_primary px-2 text-white">
              Members
            </strong>
          </p>
          <h2 className="text-h5">Top Skilled Experts</h2>
        </div>
        <div className="relative mt-60 flex flex-col flex-wrap justify-between gap-2 md:flex-row">
          {home.section_6.cards.map((item, index) => (
            <TeamCard_2
              key={item.name + index}
              data={item}
              className="flex-grow md:w-[260px] md:flex-grow-0"
            />
          ))}
          <div className="absolute -bottom-44 -right-80 -z-50 hidden animate-spin2 md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/elemants (14).png"
            />
          </div>
          <div className="absolute -left-96 -top-44 -z-50 hidden animate-spin2 md:block">
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
