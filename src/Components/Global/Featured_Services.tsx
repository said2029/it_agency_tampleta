import Image from "next/image";
import React from "react";
import ButtonMain from "../MianButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoArrowUpOutline } from "react-icons/io5";

export default function Featured_Services({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col items-center gap-16 md:mt-top ",className)}>
      <h5 className="text-center text-h5">Featured Services</h5>
      <div className="w-full space-y-11">
        <div className="grid h-[800px] w-full gap-16 md:h-[394px] md:grid-cols-2">
          <Featured_Service_Card
            title="IT Management Services"
            tags={["Consultation", "Strategy"]}
            color={["from-[#184A44]", "to-[#99A697]"]}
            image="/assets/images/elemants/elemants (9).png"
          />
          <Featured_Service_Card
            ImageSize={400}
            title="Data Tracking and Security"
            tags={["Consultation", "Strategy"]}
            color={["from-[#5F1FBE]", "to-[#617DB4]"]}
            image="/assets/images/elemants/elemants (18).png"
          />
        </div>
        <div className="grid h-[1500px] gap-6 md:h-[394px] md:grid-cols-3">
          <Featured_Service_Card
            title="Website Development"
            tags={["Consultation", "Strategy"]}
            color={["from-[#CAAA8A]", "to-[#8F6A52]"]}
            image="/assets/images/elemants/elemants (10).png"
          />
          <Featured_Service_Card
            title="Website Development"
            tags={["Consultation", "Strategy"]}
            color={["from-[#4258B1]", "to-[#6A8E52]"]}
            image="/assets/images/elemants/elemants (1).png"
          />
          <Featured_Service_Card
            title="Website Development"
            tags={["Consultation", "Strategy"]}
            color={["from-[#BA8EB1]", "to-[#815D7E]"]}
            image="/assets/images/elemants/elemants (11).png"
          />
        </div>
      </div>
      <ButtonMain
        href="#"
        className="border bg-transparent font-bold"
        name="More Servises"
      />
    </section>
  );
}

// Featured Services Card Component
type Props = {
  image: string;
  title: string;
  tags: string[];
  color: string[];
  ImageSize?: number;
};
const Featured_Service_Card = ({
  image,
  title,
  tags,
  color,
  ImageSize = 500,
}: Props) => {
  return (
    <div
      className={`relative flex h-full items-end rounded-2xl bg-gradient-to-tr [&_img]:hover:scale-110 transition-all ${color[0]} ${color[1]}`}
    >
      <div className="z-50 w-full space-y-3 p-6 text-white">
        <h1 className="text-h5">{title}</h1>
        <div className="flex w-full items-center justify-between">
          <Link href={"/services/it_management_services"} className="size-10 rounded-full bg-white text-black rotate-45 hover:scale-125 transition-all  flex items-center justify-center "><IoArrowUpOutline /></Link>
          <div className="space-x-2">
            {tags.map((tag, index) => (
              <span
                key={tag + index}
                className="rounded-lg border border-white bg-white/20 p-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Image
        className="absolute right-0 top-0 md:-top-10 transition-all"
        width={ImageSize}
        height={ImageSize}
        alt=""
        src={image}
      />
    </div>
  );
};
