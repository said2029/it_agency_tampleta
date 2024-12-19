import Brandes from "@/Components/brandes";
import Hero from "@/Components/Hero";
import Button from "@/Components/UI/Button";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      {/* hero */}
      <Hero />
      {/* Brand Work With */}
      <section className="pt-top relative overflow-hidden bg-[#F3F3F3] py-16 lg:px-spacing">
        <div className="relative z-50">
          <h2 className="text-center">
            <span className="rounded-full bg-secandry_primary px-1 text-paragraph_b text-white">
              Brand
            </span >{" "}
            Work With
          </h2>
          <Brandes className="z-50 mt-10" />
          <section className="mt-10 flex flex-col items-center px-mobile md:mt-32 md:flex-row md:gap-20 md:px-0">
            <div className="grid w-full flex-grow grid-cols-2 gap-4 md:w-auto">
              <div className="flex h-[210px] flex-col justify-evenly rounded-3xl bg-white px-3 shadow-xl">
                <div className="w-[110px]">
                  <Image
                    width={300}
                    height={300}
                    alt=""
                    src="/assets/images/elemants/fluent-color_people-28.png"
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-h5 text-black">23+</h3>
                  <p className="to-black_50 text-paragraph">
                    Years of experience
                  </p>
                </div>
              </div>
              <div className="flex h-[210px] flex-col justify-evenly rounded-3xl bg-white px-3 shadow-xl">
                <div className="w-[110px]">
                  <Image
                    width={300}
                    height={300}
                    alt=""
                    src="/assets/images/elemants/fluent-color_shield-checkmark-24.png"
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-h5 text-black">230+</h3>
                  <p className="to-black_50 text-paragraph">Success Stories</p>
                </div>
              </div>
              <div className="flex h-[210px] flex-col justify-evenly rounded-3xl bg-white px-3 shadow-xl">
                <div className="w-[110px]">
                  <Image
                    width={300}
                    height={300}
                    alt=""
                    src="/assets/images/elemants/fluent-color_people-team-20.png"
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-h5 text-black">30k</h3>
                  <p className="to-black_50 text-paragraph">
                    Companies Trust Us
                  </p>
                </div>
              </div>
              <div className="flex h-[210px] flex-col justify-evenly rounded-3xl bg-white px-3 shadow-xl">
                <div className="w-[110px]">
                  <Image
                    width={300}
                    height={300}
                    alt=""
                    src="/assets/images/elemants/fluent-color_pin-48.png"
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <h3 className="text-h5 text-black">230+</h3>
                  <p className="to-black_50 text-paragraph">
                    Results Guaranteed
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full md:w-[400px]">
              <Image
                width={400}
                height={400}
                className="h-full w-full object-fill"
                alt=""
                src="/assets/images/img/Images.png"
              />
              <div className="absolute bottom-7 left-2 space-y-0 text-white">
                <h4 className="text-h4">12000+</h4>
                <p className="text-paragraph text-sm">
                  employees in 30 countries in Europe
                </p>
              </div>
            </div>
          </section>

          <div className="absolute -left-72 -top-72 -z-50 hidden md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/Star 1.png"
            />
          </div>
          <div className="absolute -bottom-72 -right-72 -z-50 hidden md:block">
            <Image
              width={600}
              height={600}
              alt=""
              src="/assets/images/elemants/Star 2.png"
            />
          </div>
        </div>
      </section>
      {/* We are Techco */}
      <section className="mt-16 lg:px-spacing">
        <div className="grid md:h-[405px] w-full grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid place-content-center">
            <Image
              width={400}
              height={400}
              alt=""
              className="w-full "
              src="/assets/images/img/Frame 33.png"
            />
          </div>

          <div className="space-y-5 px-mobile md:px-0">
            <div>
              <p>We are <span className="text-secandry_primary font-bold">Techco</span></p>
              <h4 className="text-h6 md:text-h4 text-black leading-tight">Our Commitment to Client Satisfaction</h4>
            </div>
            <p>
              At Techco, our commitment to client satisfaction is at the core of
              everything we do. We understand clients' success.
            </p>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center gap-1"><span className="text-primary"><IoMdArrowDropright size={24}/></span> <p className="text-paragraph_b">Grow your business the right way.</p></li>
                <li className="flex items-center gap-1"><span className="text-primary"><IoMdArrowDropright size={24}/></span> <p className="text-paragraph_b">Let business growth help your business grow.</p></li>
                <li className="flex items-center gap-1"><span className="text-primary"><IoMdArrowDropright size={24}/></span> <p className="text-paragraph_b">Helping you to get better.</p></li>
              </ul>
            </div>
            <Button name="Get Started"/>
          </div>
        </div>
      </section>

        <div className="w-full mt-16 px-mobile lg:px-spacing">
          <ul className="flex gap-4 flex-wrap justify-center lg:flex-nowrap items-center lg:justify-between">
            <li className="flex items-center gap-3">
              <span>
                <Image width={75} height={75} alt="Expert Team Members" src="/assets/images/elemants/Group 1.png"/>
              </span>
              <div>
                <h4 className="text-xl lg:text-h6 font-bold">Expert Team Members</h4>
                <p className="text-paragraph">We take pride in assembling a diverse and highly skilled.</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <Image width={75} height={75} alt="Fastest Customer Service" src="/assets/images/elemants/Group 2.png"/>
              </span>
              <div>
                <h4 className="text-xl lg:text-h6 font-bold">Fastest Customer Service</h4>
                <p className="text-paragraph">We pride ourselves on providing the fastest customer service industry.</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span>
                <Image width={75} height={75} alt="reasonable Pricing" src="/assets/images/elemants/Group 3.png"/>
              </span>
              <div>
                <h4 className="text-xl lg:text-h6 font-bold">reasonable Pricing</h4>
                <p className="text-paragraph">We believe in providing reasonable pricing that offers exceptional.</p>
              </div>
            </li>
          </ul>

        </div>
    
    </div>
  );
}
