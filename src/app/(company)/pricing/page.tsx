"use client";
import Top_Banner from "@/Components/Top_Banner";
import Image from "next/image";
import React, { useState } from "react";
import { IoDocument } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import clsx from "clsx";

export default function page() {
  const [selectPlanTime, setSelectPlanTime] = useState<"month" | "year">(
    "month",
  );
  return (
    <main>
      <Top_Banner Title="Pricing Plan" highlightNane="Pricing" subTitle="Our" />

      <section className="mt-top px-mobile md:px-spacing_2">
        <div className="grid grid-cols-1 text-center md:grid-cols-2 md:text-start">
          <h2 className="text-h4 leading-tight">
            Celebrating Features Discover What Sets Us
          </h2>
          <p className="text-2xl">
            We take pride in celebrating the features that set us apart and make
            us a leader in the IT solutions. What truly distinguishes us is our
            unwavering commitment to innovation, excellence, and client
            satisfaction.
          </p>
        </div>
        <div className="mt-60 flex w-full flex-col items-center justify-between md:flex-row">
          {/* card */}
          <div className="space-y-2">
            <div className="grid size-14 place-content-center rounded-full bg-primary/10 text-primary shadow-xl">
              <IoDocument size={30} />
            </div>
            <h3 className="text-2xl font-semibold">Rich Documentation</h3>
            <p className="text-xl opacity-70">
              Rich Documentation" refers to comprehensive and detailed
            </p>
          </div>
          {/* card */}
          <div className="space-y-2">
            <div className="grid size-14 place-content-center rounded-full bg-primary/10 text-primary shadow-xl">
              <FaShippingFast size={30} />
            </div>
            <h3 className="text-2xl font-semibold">Fastest Delivery</h3>
            <p className="text-xl opacity-70">
              Fastest Delivery" typically refers to service or process that
              emphasizes
            </p>
          </div>
          {/* card */}
          <div className="space-y-2">
            <div className="grid size-14 place-content-center rounded-full bg-primary/10 text-primary shadow-xl">
              <MdOutlineAccessTimeFilled size={30} />
            </div>
            <h3 className="text-2xl font-semibold">Lifetime Support</h3>
            <p className="text-xl opacity-70">
              Lifetime Support" refers to a by a product or service provider
            </p>
          </div>
        </div>
      </section>

      <section className="mt-top flex flex-col items-center gap-10 bg-[#e3f0ff] py-15">
        <div className="space-y-3 text-center">
          <p>
            Our <span>Pricing 😍</span>
          </p>
          <h2 className="text-h4">Best Plane for Business</h2>
        </div>

        <div className="flex h-32 w-screen flex-col items-center gap-2 bg-[#cce3ff] p-1 px-7 md:h-16 md:w-fit md:flex-row md:gap-7 md:rounded-full md:px-1">
          <div
            onClick={() => setSelectPlanTime("month")}
            className={clsx(
              "flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full shadow-xl md:w-60",
              {
                "bg-white": selectPlanTime == "month",
              },
            )}
          >
            <h4 className="text-xl font-medium">Billed Monthly</h4>
            <span className="rounded-2xl bg-[#cce3ff] px-1 text-sm">-10%</span>
          </div>

          <div
            onClick={() => setSelectPlanTime("year")}
            className={clsx(
              "flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full shadow-xl md:w-60",
              {
                "bg-white": selectPlanTime == "year",
              },
            )}
          >
            <h4 className="text-xl font-medium">Billed Yearly</h4>
            <span className="rounded-2xl bg-[#ff5050] px-1 text-sm text-white">
              -30%
            </span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:px-spacing_2">
          {/* card */}
          <div className="space-y-10 rounded-2xl bg-white p-7">
            <div>
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="w-full rounded-2xl bg-primary/5 p-3 py-7 md:w-fit lg:min-w-72">
                  <div className="flex items-end gap-3">
                    <p className="text-xl line-through opacity-80">
                      {selectPlanTime == "month" ? "$54" : "$648"}
                    </p>
                    <h1 className="text-h4 text-primary">
                      {selectPlanTime == "month" ? "$48.6" : "$453.6"}{" "}
                    </h1>
                  </div>
                  <p>
                    You'll Save {selectPlanTime == "month" ? "$5.4" : "$194.4"}{" "}
                    Monthly
                  </p>
                </div>
                <div className="space-y-5">
                  <h2 className="text-h6">Pro Package</h2>
                  <p>
                    Make your work easier with an integrated properly together.
                  </p>
                </div>
              </div>

              <div></div>
            </div>
            <div>
              <ul className="flex flex-wrap items-center justify-between gap-6">
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Software Development.
                </li>
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Digital Product Design
                </li>
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  IT Consulting.
                </li>
                {/* opacity-60 display effect */}
                <li className="flex items-center gap-2 text-lg opacity-60">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Website Development.
                </li>

                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Cybersecurity Services.
                </li>
                {/* opacity-60 display effect */}
                <li className="flex items-center gap-2 text-lg opacity-60">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Cloud Services.
                </li>
              </ul>
            </div>
            <button className="flex w-fit items-center gap-2 rounded-full bg-primary/10 px-8 py-4 font-bold uppercase hover:scale-110 transition-all">
              <p>pruchase up</p>
              <IoIosArrowRoundUp className="rotate-45" size={30} />
            </button>
          </div>
          {/* end card */}
          {/* card */}
          <div className="space-y-10 rounded-2xl bg-white p-7">
            <div>
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="w-full rounded-2xl bg-primary/5 p-3 py-7 md:w-fit lg:min-w-72">
                  <div className="flex items-end gap-3">
                    <p className="text-xl line-through opacity-80">
                      {selectPlanTime == "month" ? "$60" : "$504"}
                    </p>
                    <h1 className="text-h4 text-primary">
                      {selectPlanTime == "month" ? "$54" : "$720"}{" "}
                    </h1>
                  </div>
                  <p>
                    You'll Save {selectPlanTime == "month" ? "$5.4" : "$216"}{" "}
                    Monthly
                  </p>
                </div>
                <div className="space-y-5">
                  <h2 className="text-h6">Team Package</h2>
                  <p>
                    Make your work easier with an integrated properly together
                  </p>
                </div>
              </div>

              <div></div>
            </div>
            <div>
              <ul className="flex flex-wrap items-center justify-between gap-6">
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Software Development.
                </li>
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Digital Product Design
                </li>
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  IT Consulting.
                </li>
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Website Development.
                </li>

                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Cybersecurity Services.
                </li>
                <li className="flex items-center gap-2 text-lg opacity-85">
                  <span className="grid size-2 place-content-center rounded-full bg-primary p-3 text-white">
                    <MdDone />
                  </span>
                  Cloud Services.
                </li>
              </ul>
            </div>
            <button className="flex w-fit items-center gap-2 rounded-full bg-primary/10 px-8 py-4 font-bold uppercase hover:scale-110 transition-all">
              <p>pruchase up</p>
              <IoIosArrowRoundUp className="rotate-45" size={30} />
            </button>
          </div>
          {/* end card */}
        </div>
      </section>
    </main>
  );
}
