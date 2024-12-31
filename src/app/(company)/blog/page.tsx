import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/UI/carousel";

export default function page() {
  return (
    <main className="bg-primary/10 pb-top">
      <section className="relative grid h-72 w-full place-content-center">
        <Image
          className="pointer-events-none absolute inset-0 left-0 top-0 -z-40 h-full w-full"
          width={1000}
          height={600}
          src={"/assets/images/backgrounds/Rectangle 14.png"}
          alt="top_image_benner"
        />
        <div className="px-spacing text-center text-white">
          <h1 className="text-4xl lg:text-h3">Blogs</h1>
          <div className="mt-5">
            <Link href={"/"}>Techco</Link> / Blog
          </div>
        </div>
      </section>
      <section className="relative mt-top grid grid-cols-3 gap-20 px-spacing">
        <div className="col-span-2 space-y-6 rounded-xl">
          {/* blog Card Image*/}
          <div className="w-full rounded-xl bg-white p-8">
            <div className="h-96 w-full overflow-hidden rounded-xl transition-all hover:scale-105">
              <Image
                className="h-full w-full object-cover"
                width={400}
                height={250}
                alt="blog image"
                src={"/assets/images/img/Rectangle_36.png"}
              />
            </div>
            <div className="mt-4 flex items-center gap-7">
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegUser size={16} />
                </span>{" "}
                <span className="opacity-85">admin</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegComments size={16} />
                </span>{" "}
                <span className="opacity-85">Comments (0)</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <MdOutlineDateRange size={16} />
                </span>{" "}
                <span className="opacity-85">June 8, 2024</span>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-h5 font-medium">
                Leading the Digital Age with Groundbreaking IT Technologies
              </h2>
              <p className="line-clamp-4 text-[17px] opacity-90">
                Gain exclusive insights into the world of IT solutions with
                Techco’s distinguished thought leaders. With years of experience
                and a deep understanding of industry trends, our thought leaders
                offer invaluable perspectives that illuminate the path to
                technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform
              </p>
            </div>
            <div className="mt-10">
              <Link
                className="flex w-fit items-center gap-3 rounded-full bg-primary_gradinet px-8 py-3 text-xl font-bold uppercase text-white shadow-xl [&_svg]:hover:-translate-y-1 [&_svg]:hover:translate-x-1"
                href={"/"}
              >
                <span>read more</span>
                <FaLocationArrow className="transition-all" />
              </Link>
            </div>
          </div>
          {/* end blog Card */}
          {/* blog Card slide Image*/}
          <div className="w-full rounded-xl bg-white p-8">
            <div className="h-96 w-full overflow-hidden rounded-xl transition-all [&_.button-carousel]:hover:flex">
              <Carousel
                opts={{
                  skipSnaps: true,
                }}
              >
                <CarouselContent className="relative h-96">
                  <CarouselItem className="h-full transition-all hover:scale-105">
                    <Image
                      className="h-full w-full object-cover"
                      width={400}
                      height={250}
                      alt="blog image"
                      src={"/assets/images/img/Rectangle_36.png"}
                    />
                  </CarouselItem>
                  <CarouselItem className="h-full transition-all hover:scale-105">
                    <Image
                      className="h-full w-full object-cover"
                      width={400}
                      height={250}
                      alt="blog image"
                      src={"/assets/images/img/Rectangle_36.png"}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext className="button-carousel absolute right-6 hidden size-14 border-none bg-primary_gradinet text-white !opacity-95" />
                <CarouselPrevious className="button-carousel absolute left-6 hidden size-14 border-none bg-primary_gradinet text-white !opacity-95" />
              </Carousel>
            </div>
            <div className="mt-4 flex items-center gap-7">
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegUser size={16} />
                </span>{" "}
                <span className="opacity-85">admin</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegComments size={16} />
                </span>{" "}
                <span className="opacity-85">Comments (0)</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <MdOutlineDateRange size={16} />
                </span>{" "}
                <span className="opacity-85">June 8, 2024</span>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-h5 font-medium">
                Leading the Digital Age with Groundbreaking IT Technologies
              </h2>
              <p className="line-clamp-4 text-[17px] opacity-90">
                Gain exclusive insights into the world of IT solutions with
                Techco’s distinguished thought leaders. With years of experience
                and a deep understanding of industry trends, our thought leaders
                offer invaluable perspectives that illuminate the path to
                technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform
              </p>
            </div>
            <div className="mt-10">
              <Link
                className="flex w-fit items-center gap-3 rounded-full bg-primary_gradinet px-8 py-3 text-xl font-bold uppercase text-white shadow-xl [&_svg]:hover:-translate-y-1 [&_svg]:hover:translate-x-1"
                href={"/"}
              >
                <span>read more</span>
                <FaLocationArrow className="transition-all" />
              </Link>
            </div>
          </div>
          {/* end blog Card */}
          {/* blog Card video*/}
          <div className="w-full rounded-xl bg-white p-8">
            <div className="h-96 w-full overflow-hidden rounded-xl relative">
              <Image
                className="h-full w-full object-cover transition-all hover:scale-105 -z-50"
                width={400}
                height={250}
                alt="blog_image"
                src={"/assets/images/img/Rectangle_36.png"}
              />
              <button className="size-28 rounded-full absolute bg-primary z-[200]">

              </button>
            </div>
            <div className="mt-4 flex items-center gap-7">
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegUser size={16} />
                </span>{" "}
                <span className="opacity-85">admin</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <FaRegComments size={16} />
                </span>{" "}
                <span className="opacity-85">Comments (0)</span>
              </p>
              <p className="flex items-center gap-3 text-[16px]">
                <span className="text-primary">
                  <MdOutlineDateRange size={16} />
                </span>{" "}
                <span className="opacity-85">June 8, 2024</span>
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-h5 font-medium">
                Leading the Digital Age with Groundbreaking IT Technologies
              </h2>
              <p className="line-clamp-4 text-[17px] opacity-90">
                Gain exclusive insights into the world of IT solutions with
                Techco’s distinguished thought leaders. With years of experience
                and a deep understanding of industry trends, our thought leaders
                offer invaluable perspectives that illuminate the path to
                technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform
              </p>
            </div>
            <div className="mt-10">
              <Link
                className="flex w-fit items-center gap-3 rounded-full bg-primary_gradinet px-8 py-3 text-xl font-bold uppercase text-white shadow-xl [&_svg]:hover:-translate-y-1 [&_svg]:hover:translate-x-1"
                href={"/"}
              >
                <span>read more</span>
                <FaLocationArrow className="transition-all" />
              </Link>
            </div>
          </div>
          {/* end blog Card */}
        </div>
        {/* sidbar */}
        <aside className="sticky top-0 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Search</h2>
            <div className="relative">
              <input
                type="search"
                className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                placeholder="Search ..."
              />
              <button className="absolute bottom-1/2 right-2 top-1/2 grid size-10 -translate-y-1/2 place-content-center rounded-lg bg-primary_gradinet text-white">
                <CiSearch size={30} />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Recent Post</h2>
            <div className="mt-4 flex flex-col gap-3">
              {Array.from({ length: 4 }).map(() => (
                <div className="flex gap-3 rounded-lg bg-white p-2">
                  <div className="size-24 min-w-24 rounded-lg bg-red-500"></div>
                  <div>
                    <p className="opacity-75">June 8, 2024</p>
                    <h2 className="line-clamp-2 text-xl font-semibold opacity-90">
                      Unlocking New Possibilities with Advanced Cloud ...
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Recent Post</h2>
            <ul className="divide-black/20 space-y-5 divide-y">
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Business
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Cloud Solution
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Cybersecurity
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  It Solution
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Mobile App
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Tech Trends
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  TechSolutions
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  UX Design
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-primary/5 p-5">
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                App Dev
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Consultants
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Cybersecurity
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Data
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                It
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Optimization
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Solution
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Startup
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                TechSolutions
              </span>
            </div>
          </div>
        </aside>
      </section>
      {/* pagination */}
      <section className="mt-top grid place-content-center">
        <div className="flex items-center gap-4">
          <button className="size-12 rounded-xl bg-white text-xl">1</button>
          <button className="size-12 rounded-xl bg-primary text-xl text-white">
            2
          </button>
          <button className="size-12 rounded-xl bg-white text-xl">3</button>
          <button className="grid size-12 place-content-center rounded-xl bg-white text-xl">
            <MdKeyboardDoubleArrowRight size={30} />
          </button>
        </div>
      </section>
    </main>
  );
}
