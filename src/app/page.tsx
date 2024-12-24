"use client";
import Brandes from "@/Components/brandes";
import Brand_Work_With from "@/Components/Global/Brand_Work_With";
import ClientsSay from "@/Components/Global/ClientsSay";
import HeroHomePage from "@/Components/HeroHomePage";
import ButtonMain from "@/Components/MianButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/UI/carousel";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      {/* hero */}
      <HeroHomePage />
      {/* Brand Work With */}
      <Brand_Work_With className="bg-[#F3F3F3] lg:px-spacing"/>
      {/* We are Techco */}
      <section className="md:mt-16 lg:px-spacing">
        <div className="grid w-full grid-cols-1 gap-6 md:h-[405px] md:grid-cols-2">
          <div className="grid place-content-center">
            <Image
              width={400}
              height={400}
              alt=""
              className="w-full"
              src="/assets/images/img/Frame 33.png"
            />
          </div>

          <div className="space-y-5 px-mobile md:px-0">
            <div>
              <p>
                We are{" "}
                <span className="font-bold text-secandry_primary">Techco</span>
              </p>
              <h4 className="text-h6 leading-tight text-black md:text-h4">
                Our Commitment to Client Satisfaction
              </h4>
            </div>
            <p>
              At Techco, our commitment to client satisfaction is at thecore of
              everything we do. We understand clients' success.
            </p>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <span className="text-primary">
                    <IoMdArrowDropright size={24} />
                  </span>{" "}
                  <p className="text-paragraph_b">
                    Grow your business the right way.
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-primary">
                    <IoMdArrowDropright size={24} />
                  </span>{" "}
                  <p className="text-paragraph_b">
                    Let business growth help your business grow.
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <span className="text-primary">
                    <IoMdArrowDropright size={24} />
                  </span>{" "}
                  <p className="text-paragraph_b">Helping you to get better.</p>
                </li>
              </ul>
            </div>
            <ButtonMain className="w-fit" href="#" name="Get Started" />
          </div>
        </div>

        <div className="mt-16 w-full px-mobile lg:px-spacing">
          <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:justify-between">
            <li className="flex items-center gap-3">
              <span>
                <Image
                  width={75}
                  height={75}
                  alt="Expert Team Members"
                  src="/assets/images/elemants/elemants (2).png"
                />
              </span>
              <div>
                <h4 className="text-xl font-bold lg:text-h6">
                  Expert Team Members
                </h4>
                <p className="text-paragraph">
                  We take pride in assembling a diverse and highly skilled.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <Image
                  width={75}
                  height={75}
                  alt="Fastest Customer Service"
                  src="/assets/images/elemants/elemants (3).png"
                />
              </span>
              <div>
                <h4 className="text-xl font-bold lg:text-h6">
                  Fastest Customer Service
                </h4>
                <p className="text-paragraph">
                  We pride ourselves on providing the fastest customer service
                  industry.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <Image
                  width={75}
                  height={75}
                  alt="reasonable Pricing"
                  src="/assets/images/elemants/elemants (4).png"
                />
              </span>
              <div>
                <h4 className="text-xl font-bold lg:text-h6">
                  reasonable Pricing
                </h4>
                <p className="text-paragraph">
                  We believe in providing reasonable pricing that offers
                  exceptional.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Featured Services */}
      <section className="flex flex-col items-center gap-16 md:mt-top lg:px-spacing 2xl:px-spacing_2">
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
          className="border border-border bg-transparent font-bold text-black"
          name="More Servises"
        />
      </section>
      {/* Our Recent Best Works */}
      <section className="mt-top">
        <div className="text-center md:space-y-2 md:text-start lg:px-spacing">
          <p>
            <span className="font-bold text-secandry_primary">Crafting</span>{" "}
            Success With Project
          </p>
          <h3 className="text-h4 md:text-h3">Our Recent Best Works</h3>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="max-w-3xl text-paragraph_b opacity-70">
              Our recent projects highlight our expertise in delivering tailored
              solutions that meet the unique needs and objectives of our
              clients,custom software.
            </p>
            <ButtonMain href="#" name="All Works" />
          </div>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: "center",
            }}
            className="h-[300px] w-full md:h-[539px]"
          >
            <CarouselContent className="md:space-x-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="relative h-[300px] overflow-hidden rounded-2xl bg-[url(/assets/images/img/hero_Image.jpg)] pl-1 md:h-[539px] md:basis-1/2"
                >
                  <div className="absolute inset-0 top-0 flex items-end justify-start bg-gradient-to-t from-sky-950 to-transparent text-white">
                    <div className="flex w-full items-center justify-between p-5">
                      <div>
                        <h1 className="text-h4">Dashboard Design</h1>
                        <p className="text-paragraph opacity-50">
                          Dashboard Design
                        </p>
                      </div>
                      <ButtonMain
                        href="#"
                        className="hidden md:flex"
                        name="Explore More"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      {/* What clients say */}
      <ClientsSay />
      {/* Top Skilled Experts */}
      <section className="relative mt-top w-full overflow-hidden py-4 text-center">
        <p>
          <span className="rounded-full bg-secandry_primary px-1 font-bold text-white">
            Our Expert
          </span>{" "}
          Team Members
        </p>
        <h3 className="text-h5 md:mt-4 md:text-h4">Top Skilled Experts</h3>
        <div className="mt-5 w-full md:mt-10">
          <Carousel className="w-full">
            <CarouselContent className="gap-2">
              {Array.from({ length: 10 }).map((item, index) => (
                <CarouselItem
                  key={index + "Team Members"}
                  className="relative h-[468px] basis-96 overflow-hidden rounded-xl bg-red-600 md:basis-1/3 lg:basis-1/5"
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover"
                    width={300}
                    height={300}
                    alt=""
                    src={"/assets/images/img/Rectangle 11.png"}
                  />
                  <div className="absolute bottom-0 left-0 bg-primary_gradinet p-3 text-start text-white">
                    <h5 className="text-h6">August Everest</h5>
                    <p className="text-paragraph opacity-70">
                      SYSTEMS ENGINEER
                    </p>
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mt-10 grid w-full place-content-center">
          <ButtonMain
            href="#"
            className="w-fit border border-border bg-transparent font-bold text-black"
            name="OUR ALL EXPERTS"
          />
        </div>
        <Image
          className="absolute -left-32 -top-32 -z-40 hidden animate-spin2 md:block"
          width={600}
          height={600}
          alt=""
          src={"/assets/images/elemants/elemants (13).png"}
        />
        <Image
          className="absolute -bottom-32 -right-32 -z-40 hidden animate-spin2 md:block"
          width={600}
          height={600}
          alt=""
          src={"/assets/images/elemants/elemants (14).png"}
        />
      </section>
      {/* blogs latest artical */}
      <section className="w-full py-4 text-center md:mt-top">
        <p>
          <span className="rounded-full bg-secandry_primary px-1 font-bold text-white">
            Blog
          </span>{" "}
          Updates
        </p>
        <h3 className="text-h5 md:mt-4 md:text-h4">Latest Articles Postss</h3>
        <div className="mt-4 grid grid-cols-1 gap-5 px-mobile md:mt-16 md:grid-cols-3 md:px-spacing">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i + "blogs latest"}
              className="over w-full rounded-xl bg-white pb-3 shadow-xl md:w-[420px]"
            >
              <div className="w-full">
                <Image
                  className="w-full"
                  width={400}
                  height={400}
                  alt=""
                  src="/assets/images/img/hero_Image.jpg"
                />
              </div>
              <div className="p-2">
                <div className="mt-3 flex items-center gap-3">
                  <span className="rounded-xl border border-black px-2 py-[1px] opacity-85">
                    it solution
                  </span>
                  <p className="flex">
                    <span>
                      <Image
                        width={23}
                        height={23}
                        alt=""
                        src={"/assets/Icons/stash_data-date-duotone.svg"}
                      />
                    </span>
                    06/08/2024
                  </p>
                  <p className="flex">
                    <span>
                      <Image
                        width={23}
                        height={23}
                        alt=""
                        src={"/assets/Icons/lets-icons_comment-duotone.svg"}
                      />
                    </span>
                    345
                  </p>
                </div>
                <h3 className="mt-3 text-start text-h6">
                  Leading the Digital Age with Groundbreaking
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
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
      className={`relative flex h-full items-end rounded-2xl bg-gradient-to-tr ${color[0]} ${color[1]}`}
    >
      <div className="z-50 w-full space-y-3 p-6 text-white">
        <h1 className="text-h5">{title}</h1>
        <div className="flex w-full items-center justify-between">
          <span className="size-10 rounded-full bg-white"></span>
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
        className="absolute right-0 top-0 md:-top-10"
        width={ImageSize}
        height={ImageSize}
        alt=""
        src={image}
      />
    </div>
  );
};
