import ButtonMain from "../MianButton";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import Featured_Services from "../Global/Featured_Services";
import Recent_bast_work_2 from "../Recent_bast_work_2";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import TeamCard_2 from "../Cards/TeamCard_2";
import Link from "next/link";

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

          <div className="flex items-center gap-2 mt-5">
            <ButtonMain name="Get Started" className="w-fit" />
            <ButtonMain name="Contact Us" className="w-fit !bg-none text-secandry_primary border border-secandry_primary" />
          </div>
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
      <section className="relative mt-top h-fit">
        <div className="bg-primary pb-2 md:px-spacing">
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}
            className="top-0 h-12 w-full bg-white"
          ></div>
          <Featured_Services className="text-white md:mt-10 lg:px-spacing 2xl:px-spacing_2" />
        </div>
        <div className="h-20 w-full -translate-y-1">
          <Image
            className="h-full w-full"
            width={300}
            height={300}
            alt=""
            src={"/assets/images/elemants/elemants (34).svg"}
          />
        </div>
      </section>
      {/* Our Recent Best Works */}
      <Recent_bast_work_2 />
      <section className="relative overflow-hidden px-mobile py-4 text-center md:mt-top lg:px-spacing_2">
        <p>
          <span className="rounded-full bg-secandry_primary px-1 font-bold text-white">
            Client
          </span>{" "}
          Testimonial
        </p>
        <h3 className="text-h5 md:text-h4">What clients say</h3>
        <svg
          className="absolute right-0 top-0 -z-50 w-full"
          width="1398"
          height="1024"
          viewBox="0 0 1398 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1517.5 -35C1517.5 -35 794.227 410.736 440 625C345.766 682 226.5 731.079 127.5 682C56.6462 646.874 7 625 7 519.25C7 413.5 104.5 354.5 247 354.5C389.5 354.5 1457.5 1063 1457.5 1063"
            stroke="#FF3400"
            strokeWidth="14"
          />
        </svg>
        <div className="mt-5 flex flex-wrap justify-center gap-10 md:mt-16">
          {/* card */}
          <div className="grid h-[380px] w-full place-content-center rounded-3xl bg-[url(/assets/images/img/Rectangle_36.png)] bg-cover py-3">
            <div className="w-[340px] space-y-3 rounded-2xl bg-white p-5 text-start">
              <div className="flex w-full items-center gap-2">
                <span className="h-11 w-11 rounded-full bg-[url(/assets/images/img/Ellipse_9.png)] bg-cover" />
                <div>
                  <h3 className="text-xl">Aimily Aimily</h3>
                  <svg
                    width="71"
                    height="15"
                    viewBox="0 0 71 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.08989 4.69872L6.62797 2.70746C6.73783 2.56098 6.86838 2.45349 7.01963 2.38501C7.17087 2.31653 7.32871 2.28211 7.49314 2.28174C7.65756 2.28137 7.81558 2.3158 7.96719 2.38501C8.1188 2.45423 8.24917 2.56171 8.3583 2.70746L9.89638 4.69872L12.231 5.48149C12.469 5.55473 12.6567 5.68986 12.794 5.88688C12.9313 6.0839 13 6.30125 13 6.53892C13 6.64878 12.9839 6.75864 12.9517 6.86851C12.9194 6.97837 12.8669 7.08365 12.794 7.18436L11.2834 9.32668L11.3383 11.5789C11.3475 11.8993 11.2422 12.1694 11.0225 12.3891C10.8027 12.6088 10.5464 12.7187 10.2534 12.7187C10.2351 12.7187 10.1344 12.705 9.95131 12.6775L7.49314 11.9908L5.03496 12.6775C4.98918 12.6958 4.93883 12.7073 4.8839 12.7121C4.82897 12.7169 4.77861 12.7191 4.73284 12.7187C4.43987 12.7187 4.18353 12.6088 3.9638 12.3891C3.74408 12.1694 3.63879 11.8993 3.64795 11.5789L3.70288 9.31295L2.206 7.18436C2.13276 7.08365 2.08002 6.97837 2.0478 6.86851C2.01557 6.75864 1.99964 6.64878 2.00001 6.53892C2.00001 6.31004 2.06647 6.09727 2.19941 5.90062C2.33234 5.70396 2.51764 5.56425 2.75531 5.48149L5.08989 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M19.0899 4.69872L20.628 2.70746C20.7378 2.56098 20.8684 2.45349 21.0196 2.38501C21.1709 2.31653 21.3287 2.28211 21.4931 2.28174C21.6576 2.28137 21.8156 2.3158 21.9672 2.38501C22.1188 2.45423 22.2492 2.56171 22.3583 2.70746L23.8964 4.69872L26.231 5.48149C26.469 5.55473 26.6567 5.68986 26.794 5.88688C26.9313 6.0839 27 6.30125 27 6.53892C27 6.64878 26.9839 6.75864 26.9517 6.86851C26.9194 6.97837 26.8669 7.08365 26.794 7.18436L25.2834 9.32668L25.3383 11.5789C25.3475 11.8993 25.2422 12.1694 25.0225 12.3891C24.8027 12.6088 24.5464 12.7187 24.2534 12.7187C24.2351 12.7187 24.1344 12.705 23.9513 12.6775L21.4931 11.9908L19.035 12.6775C18.9892 12.6958 18.9388 12.7073 18.8839 12.7121C18.829 12.7169 18.7786 12.7191 18.7328 12.7187C18.4399 12.7187 18.1835 12.6088 17.9638 12.3891C17.7441 12.1694 17.6388 11.8993 17.6479 11.5789L17.7029 9.31295L16.206 7.18436C16.1328 7.08365 16.08 6.97837 16.0478 6.86851C16.0156 6.75864 15.9996 6.64878 16 6.53892C16 6.31004 16.0665 6.09727 16.1994 5.90062C16.3323 5.70396 16.5176 5.56425 16.7553 5.48149L19.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M33.0899 4.69872L34.628 2.70746C34.7378 2.56098 34.8684 2.45349 35.0196 2.38501C35.1709 2.31653 35.3287 2.28211 35.4931 2.28174C35.6576 2.28137 35.8156 2.3158 35.9672 2.38501C36.1188 2.45423 36.2492 2.56171 36.3583 2.70746L37.8964 4.69872L40.231 5.48149C40.469 5.55473 40.6567 5.68986 40.794 5.88688C40.9313 6.0839 41 6.30125 41 6.53892C41 6.64878 40.9839 6.75864 40.9517 6.86851C40.9194 6.97837 40.8669 7.08365 40.794 7.18436L39.2834 9.32668L39.3383 11.5789C39.3475 11.8993 39.2422 12.1694 39.0225 12.3891C38.8027 12.6088 38.5464 12.7187 38.2534 12.7187C38.2351 12.7187 38.1344 12.705 37.9513 12.6775L35.4931 11.9908L33.035 12.6775C32.9892 12.6958 32.9388 12.7073 32.8839 12.7121C32.829 12.7169 32.7786 12.7191 32.7328 12.7187C32.4399 12.7187 32.1835 12.6088 31.9638 12.3891C31.7441 12.1694 31.6388 11.8993 31.6479 11.5789L31.7029 9.31295L30.206 7.18436C30.1328 7.08365 30.08 6.97837 30.0478 6.86851C30.0156 6.75864 29.9996 6.64878 30 6.53892C30 6.31004 30.0665 6.09727 30.1994 5.90062C30.3323 5.70396 30.5176 5.56425 30.7553 5.48149L33.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M47.0899 4.69872L48.628 2.70746C48.7378 2.56098 48.8684 2.45349 49.0196 2.38501C49.1709 2.31653 49.3287 2.28211 49.4931 2.28174C49.6576 2.28137 49.8156 2.3158 49.9672 2.38501C50.1188 2.45423 50.2492 2.56171 50.3583 2.70746L51.8964 4.69872L54.231 5.48149C54.469 5.55473 54.6567 5.68986 54.794 5.88688C54.9313 6.0839 55 6.30125 55 6.53892C55 6.64878 54.9839 6.75864 54.9517 6.86851C54.9194 6.97837 54.8669 7.08365 54.794 7.18436L53.2834 9.32668L53.3383 11.5789C53.3475 11.8993 53.2422 12.1694 53.0225 12.3891C52.8027 12.6088 52.5464 12.7187 52.2534 12.7187C52.2351 12.7187 52.1344 12.705 51.9513 12.6775L49.4931 11.9908L47.035 12.6775C46.9892 12.6958 46.9388 12.7073 46.8839 12.7121C46.829 12.7169 46.7786 12.7191 46.7328 12.7187C46.4399 12.7187 46.1835 12.6088 45.9638 12.3891C45.7441 12.1694 45.6388 11.8993 45.6479 11.5789L45.7029 9.31295L44.206 7.18436C44.1328 7.08365 44.08 6.97837 44.0478 6.86851C44.0156 6.75864 43.9996 6.64878 44 6.53892C44 6.31004 44.0665 6.09727 44.1994 5.90062C44.3323 5.70396 44.5176 5.56425 44.7553 5.48149L47.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M61.0899 4.69872L62.628 2.70746C62.7378 2.56098 62.8684 2.45349 63.0196 2.38501C63.1709 2.31653 63.3287 2.28211 63.4931 2.28174C63.6576 2.28137 63.8156 2.3158 63.9672 2.38501C64.1188 2.45423 64.2492 2.56171 64.3583 2.70746L65.8964 4.69872L68.231 5.48149C68.469 5.55473 68.6567 5.68986 68.794 5.88688C68.9313 6.0839 69 6.30125 69 6.53892C69 6.64878 68.9839 6.75864 68.9517 6.86851C68.9194 6.97837 68.8669 7.08365 68.794 7.18436L67.2834 9.32668L67.3383 11.5789C67.3475 11.8993 67.2422 12.1694 67.0225 12.3891C66.8027 12.6088 66.5464 12.7187 66.2534 12.7187C66.2351 12.7187 66.1344 12.705 65.9513 12.6775L63.4931 11.9908L61.035 12.6775C60.9892 12.6958 60.9388 12.7073 60.8839 12.7121C60.829 12.7169 60.7786 12.7191 60.7328 12.7187C60.4399 12.7187 60.1835 12.6088 59.9638 12.3891C59.7441 12.1694 59.6388 11.8993 59.6479 11.5789L59.7029 9.31295L58.206 7.18436C58.1328 7.08365 58.08 6.97837 58.0478 6.86851C58.0156 6.75864 57.9996 6.64878 58 6.53892C58 6.31004 58.0665 6.09727 58.1994 5.90062C58.3323 5.70396 58.5176 5.56425 58.7553 5.48149L61.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-paragraph">
                As a startup, we needed a technology partner who could help us
                bring our vision to life. Itsafe exceeded our expectations with
                their innovative solutions and proactive approach. They guided
                us through every step of the process, our journey together.
              </p>
            </div>
          </div>
          {/* end card */}
          {/* card */}
          <div className="grid h-[380px] w-full place-content-center rounded-3xl bg-[url(/assets/images/img/Rectangle_37.png)] bg-cover py-3">
            <div className="w-[340px] space-y-3 rounded-2xl bg-white p-5 text-start">
              <div className="flex w-full items-center gap-2">
                <span className="h-11 w-11 rounded-full bg-[url(/assets/images/img/Ellipse_10.png)] bg-cover" />
                <div>
                  <h3 className="text-xl">Aimily Aimily</h3>
                  <svg
                    width="71"
                    height="15"
                    viewBox="0 0 71 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.08989 4.69872L6.62797 2.70746C6.73783 2.56098 6.86838 2.45349 7.01963 2.38501C7.17087 2.31653 7.32871 2.28211 7.49314 2.28174C7.65756 2.28137 7.81558 2.3158 7.96719 2.38501C8.1188 2.45423 8.24917 2.56171 8.3583 2.70746L9.89638 4.69872L12.231 5.48149C12.469 5.55473 12.6567 5.68986 12.794 5.88688C12.9313 6.0839 13 6.30125 13 6.53892C13 6.64878 12.9839 6.75864 12.9517 6.86851C12.9194 6.97837 12.8669 7.08365 12.794 7.18436L11.2834 9.32668L11.3383 11.5789C11.3475 11.8993 11.2422 12.1694 11.0225 12.3891C10.8027 12.6088 10.5464 12.7187 10.2534 12.7187C10.2351 12.7187 10.1344 12.705 9.95131 12.6775L7.49314 11.9908L5.03496 12.6775C4.98918 12.6958 4.93883 12.7073 4.8839 12.7121C4.82897 12.7169 4.77861 12.7191 4.73284 12.7187C4.43987 12.7187 4.18353 12.6088 3.9638 12.3891C3.74408 12.1694 3.63879 11.8993 3.64795 11.5789L3.70288 9.31295L2.206 7.18436C2.13276 7.08365 2.08002 6.97837 2.0478 6.86851C2.01557 6.75864 1.99964 6.64878 2.00001 6.53892C2.00001 6.31004 2.06647 6.09727 2.19941 5.90062C2.33234 5.70396 2.51764 5.56425 2.75531 5.48149L5.08989 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M19.0899 4.69872L20.628 2.70746C20.7378 2.56098 20.8684 2.45349 21.0196 2.38501C21.1709 2.31653 21.3287 2.28211 21.4931 2.28174C21.6576 2.28137 21.8156 2.3158 21.9672 2.38501C22.1188 2.45423 22.2492 2.56171 22.3583 2.70746L23.8964 4.69872L26.231 5.48149C26.469 5.55473 26.6567 5.68986 26.794 5.88688C26.9313 6.0839 27 6.30125 27 6.53892C27 6.64878 26.9839 6.75864 26.9517 6.86851C26.9194 6.97837 26.8669 7.08365 26.794 7.18436L25.2834 9.32668L25.3383 11.5789C25.3475 11.8993 25.2422 12.1694 25.0225 12.3891C24.8027 12.6088 24.5464 12.7187 24.2534 12.7187C24.2351 12.7187 24.1344 12.705 23.9513 12.6775L21.4931 11.9908L19.035 12.6775C18.9892 12.6958 18.9388 12.7073 18.8839 12.7121C18.829 12.7169 18.7786 12.7191 18.7328 12.7187C18.4399 12.7187 18.1835 12.6088 17.9638 12.3891C17.7441 12.1694 17.6388 11.8993 17.6479 11.5789L17.7029 9.31295L16.206 7.18436C16.1328 7.08365 16.08 6.97837 16.0478 6.86851C16.0156 6.75864 15.9996 6.64878 16 6.53892C16 6.31004 16.0665 6.09727 16.1994 5.90062C16.3323 5.70396 16.5176 5.56425 16.7553 5.48149L19.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M33.0899 4.69872L34.628 2.70746C34.7378 2.56098 34.8684 2.45349 35.0196 2.38501C35.1709 2.31653 35.3287 2.28211 35.4931 2.28174C35.6576 2.28137 35.8156 2.3158 35.9672 2.38501C36.1188 2.45423 36.2492 2.56171 36.3583 2.70746L37.8964 4.69872L40.231 5.48149C40.469 5.55473 40.6567 5.68986 40.794 5.88688C40.9313 6.0839 41 6.30125 41 6.53892C41 6.64878 40.9839 6.75864 40.9517 6.86851C40.9194 6.97837 40.8669 7.08365 40.794 7.18436L39.2834 9.32668L39.3383 11.5789C39.3475 11.8993 39.2422 12.1694 39.0225 12.3891C38.8027 12.6088 38.5464 12.7187 38.2534 12.7187C38.2351 12.7187 38.1344 12.705 37.9513 12.6775L35.4931 11.9908L33.035 12.6775C32.9892 12.6958 32.9388 12.7073 32.8839 12.7121C32.829 12.7169 32.7786 12.7191 32.7328 12.7187C32.4399 12.7187 32.1835 12.6088 31.9638 12.3891C31.7441 12.1694 31.6388 11.8993 31.6479 11.5789L31.7029 9.31295L30.206 7.18436C30.1328 7.08365 30.08 6.97837 30.0478 6.86851C30.0156 6.75864 29.9996 6.64878 30 6.53892C30 6.31004 30.0665 6.09727 30.1994 5.90062C30.3323 5.70396 30.5176 5.56425 30.7553 5.48149L33.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M47.0899 4.69872L48.628 2.70746C48.7378 2.56098 48.8684 2.45349 49.0196 2.38501C49.1709 2.31653 49.3287 2.28211 49.4931 2.28174C49.6576 2.28137 49.8156 2.3158 49.9672 2.38501C50.1188 2.45423 50.2492 2.56171 50.3583 2.70746L51.8964 4.69872L54.231 5.48149C54.469 5.55473 54.6567 5.68986 54.794 5.88688C54.9313 6.0839 55 6.30125 55 6.53892C55 6.64878 54.9839 6.75864 54.9517 6.86851C54.9194 6.97837 54.8669 7.08365 54.794 7.18436L53.2834 9.32668L53.3383 11.5789C53.3475 11.8993 53.2422 12.1694 53.0225 12.3891C52.8027 12.6088 52.5464 12.7187 52.2534 12.7187C52.2351 12.7187 52.1344 12.705 51.9513 12.6775L49.4931 11.9908L47.035 12.6775C46.9892 12.6958 46.9388 12.7073 46.8839 12.7121C46.829 12.7169 46.7786 12.7191 46.7328 12.7187C46.4399 12.7187 46.1835 12.6088 45.9638 12.3891C45.7441 12.1694 45.6388 11.8993 45.6479 11.5789L45.7029 9.31295L44.206 7.18436C44.1328 7.08365 44.08 6.97837 44.0478 6.86851C44.0156 6.75864 43.9996 6.64878 44 6.53892C44 6.31004 44.0665 6.09727 44.1994 5.90062C44.3323 5.70396 44.5176 5.56425 44.7553 5.48149L47.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M61.0899 4.69872L62.628 2.70746C62.7378 2.56098 62.8684 2.45349 63.0196 2.38501C63.1709 2.31653 63.3287 2.28211 63.4931 2.28174C63.6576 2.28137 63.8156 2.3158 63.9672 2.38501C64.1188 2.45423 64.2492 2.56171 64.3583 2.70746L65.8964 4.69872L68.231 5.48149C68.469 5.55473 68.6567 5.68986 68.794 5.88688C68.9313 6.0839 69 6.30125 69 6.53892C69 6.64878 68.9839 6.75864 68.9517 6.86851C68.9194 6.97837 68.8669 7.08365 68.794 7.18436L67.2834 9.32668L67.3383 11.5789C67.3475 11.8993 67.2422 12.1694 67.0225 12.3891C66.8027 12.6088 66.5464 12.7187 66.2534 12.7187C66.2351 12.7187 66.1344 12.705 65.9513 12.6775L63.4931 11.9908L61.035 12.6775C60.9892 12.6958 60.9388 12.7073 60.8839 12.7121C60.829 12.7169 60.7786 12.7191 60.7328 12.7187C60.4399 12.7187 60.1835 12.6088 59.9638 12.3891C59.7441 12.1694 59.6388 11.8993 59.6479 11.5789L59.7029 9.31295L58.206 7.18436C58.1328 7.08365 58.08 6.97837 58.0478 6.86851C58.0156 6.75864 57.9996 6.64878 58 6.53892C58 6.31004 58.0665 6.09727 58.1994 5.90062C58.3323 5.70396 58.5176 5.56425 58.7553 5.48149L61.0899 4.69872Z"
                      fill="#FFBB00"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-paragraph">
                As a startup, we needed a technology partner who could help us
                bring our vision to life. Itsafe exceeded our expectations with
                their innovative solutions and proactive approach. They guided
                us through every step of the process, our journey together.
              </p>
            </div>
          </div>
          {/* end card */}
        </div>
      </section>
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
                  className="basis-96 md:basis-1/3 lg:basis-1/5"
                  key={index + "Team Members"}
                >
                  <TeamCard_2 />
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
              <div className="mt-4 space-y-4 p-2">
                <div className="flex items-center gap-3 opacity-70">
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
                <h3 className="text-start text-h6">
                  Leading the Digital Age with Groundbreaking
                </h3>
                <div className="flex items-center gap-3">
                  <Link className="transition-all hover:scale-125" href={"/"}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14.5" cy="14.5" r="14.5" fill="#4078FF" />
                      <path
                        d="M17.6 12.09L11.1475 18.5425C11.0146 18.6754 10.8454 18.7419 10.64 18.7419C10.4346 18.7419 10.2654 18.6754 10.1325 18.5425C9.99956 18.4096 9.93311 18.2404 9.93311 18.035C9.93311 17.8296 9.99956 17.6604 10.1325 17.5275L16.585 11.075H11.075C10.8696 11.075 10.6975 11.0054 10.5588 10.8662C10.4201 10.727 10.3505 10.5549 10.35 10.35C10.3495 10.1451 10.4191 9.973 10.5588 9.8338C10.6985 9.6946 10.8705 9.625 11.075 9.625H18.325C18.5304 9.625 18.7027 9.6946 18.8419 9.8338C18.9811 9.973 19.0505 10.1451 19.05 10.35V17.6C19.05 17.8054 18.9804 17.9777 18.8412 18.1169C18.702 18.2561 18.5299 18.3255 18.325 18.325C18.12 18.3245 17.948 18.2549 17.8088 18.1162C17.6696 17.9775 17.6 17.8054 17.6 17.6V12.09Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <h4 className="text-xl">Read More</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-top"></section>
    </main>
  );
}
