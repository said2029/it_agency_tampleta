import React from "react";
import ButtonMain from "../MianButton";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import Featured_Services from "../Global/Featured_Services";

export default function Home_2() {
  return (
    <main>
      {/* Hero */}
      <section className="mt-60 grid grid-cols-1 px-mobile md:mt-top md:grid-cols-3 md:px-spacing">
        <div className="col-span-2 space-y-3">
          <h1 className="text-h3 leading-tight md:text-h1">
            Empowering <span className="text-secandry_primary">Businesses</span>{" "}
            with Cutting-Edge IT Solutions.
          </h1>
          <p className="text-paragraph_b opacity-70">
            Transform your digital presence and elevate your business with our
            innovative IT services.
          </p>
          <div className="relative space-y-2">
            <svg
              width="216"
              height="55"
              viewBox="0 0 216 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="11" r="8" stroke="#185BFF" />
              <circle cx="8.50002" cy="11" r="4.57692" fill="#185BFF" />
              <text className="text-paragraph_b" x="25" y="15" fill="black">
                Focus on quality first
              </text>
              <circle cx="8.5" cy="44" r="8" stroke="#185BFF" />
              <circle cx="8.50002" cy="44" r="4.57692" fill="#185BFF" />
              <text className="text-paragraph_b" x="25" y="46" fill="black">
                Get to the market on time
              </text>
              <line
                x1="8"
                y1="11"
                x2="8"
                y2="44"
                stroke="#185BFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          <ButtonMain name="Get Started" />
        </div>
        <Image
          className="animate-up_down hidden md:block"
          width={799}
          height={799}
          alt="hero Image"
          src={"/assets/images/elemants/elemants (30).png"}
        />
      </section>
      <section className="relative mt-60 md:mt-top">
        <Image
          className="absolute top-10 -z-40"
          width={200}
          height={200}
          alt=""
          src={"/assets/images/elemants/elemants (32).png"}
        />
        <div className="z-30 h-fit w-full overflow-hidden bg-primary py-[15px]">
          <div className="flex h-[68px] w-fit items-center gap-3">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="grid h-full w-40 place-content-center rounded-lg bg-white p-2"
              >
                <Image
                  className="w-full"
                  src={"/assets/images/brandes/brand_1.webp"}
                  width={200}
                  height={200}
                  alt="brand"
                />
              </div>
            ))}
          </div>
        </div>
        <Image
          className="absolute top-0 z-50"
          width={200}
          height={200}
          alt=""
          src={"/assets/images/elemants/elemants (31).png"}
        />

        <div className="mt-60 grid gap-3 md:grid-cols-3 lg:px-spacing">
          <div className="grid grid-cols-1 gap-3 md:col-span-2 md:grid-cols-2">
            <div className="h-[200px] w-full rounded-2xl bg-white p-3 shadow-2xl">
              <h2 className="text-h1">23+</h2>
              <p className="text-paragraph">Years of experience</p>
            </div>
            <div className="h-[200px] w-full rounded-2xl bg-white p-3 shadow-2xl">
              <h2 className="text-h1">200+</h2>
              <p className="text-paragraph">Years of experience</p>
            </div>
            <div className="h-[200px] w-full rounded-2xl bg-white p-3 shadow-2xl">
              <h2 className="text-h1">50K</h2>
              <p className="text-paragraph">Years of experience</p>
            </div>
            <div className="h-[200px] w-full rounded-2xl bg-white p-3 shadow-2xl">
              <h2 className="text-h1">120+</h2>
              <p className="text-paragraph">Years of experience</p>
            </div>
          </div>
          <div className="hidden h-full md:block">
            <Image
              className="w-full object-fill shadow-xl"
              width={300}
              height={500}
              alt=""
              src={"/assets/images/elemants/elemants (33).png"}
            />
          </div>
        </div>
      </section>
      <section className="relative mt-60 flex flex-col items-center justify-between gap-3 px-mobile md:mt-top lg:flex-row lg:gap-0 lg:px-spacing">
        <div className="flex max-w-xl flex-col justify-between overflow-hidden px-0">
          <div>
            <p>
              We are{" "}
              <span className="font-bold text-secandry_primary">Techco</span>
            </p>
            <h4 className="w-fit text-h6 leading-tight text-black md:text-h4">
              Our <span className="text-secandry_primary">Commitment</span> to
              Client Satisfaction
            </h4>
          </div>
          <p>
            At Techco, our commitment to client satisfaction is at thecore of
            everything we do. We understand clients' success.
          </p>
          <ul className="w-fit space-y-2">
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
        <div className="h-[300px] w-full rounded-xl bg-[url(/assets/images/img/Images.png)] bg-cover md:w-[266px]" />
        <ul className="flex min-h-full flex-col justify-between gap-8">
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
        <ButtonMain
          className="absolute -bottom-20 left-1/2 right-1/2 mx-auto w-full -translate-x-1/2 justify-center text-nowrap md:w-72"
          href="#"
          name="Get Started"
        />
      </section>
      <section className="relative mt-top overflow-x-hidden">
        <div className="bg-primary md:px-spacing pb-2">
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}
            className="top-0 h-12 w-full bg-white"
          ></div>
          <Featured_Services className="text-white md:mt-10 lg:px-spacing 2xl:px-spacing_2" />
        </div>
        <div className="h-20 w-full -translate-y-1">
            <Image className="w-full" width={300} height={300} alt="" src={"/assets/images/elemants/elemants (34).svg"} />
        </div>
      </section>

      <section className="mt-top">

      </section>
    </main>
  );
}
