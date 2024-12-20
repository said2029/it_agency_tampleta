
import { BiMailSend, BiPhoneCall, BiCurrentLocation } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import Link from "next/link";
import ButtonMain from "@/Components/MianButton";

const Links = [
  {
    name: "Services",
    links: [
      {
        name: "It Consultation",
        link: "/",
      },
      {
        name: "Cloud Services",
        link: "/",
      },
      {
        name: "AI Machine Learning",
        link: "/",
      },
      {
        name: "Data Security",
        link: "/",
      },
      {
        name: "Software Development",
        link: "/",
      },
      {
        name: "Cyber Security",
        link: "/",
      },
    ],
  },
  {
    name: "Information",
    links: [
      {
        name: "About Techco",
        link: "/",
      },
      {
        name: "Investors",
        link: "/",
      },
      {
        name: "Contact",
        link: "/",
      },
      {
        name: "Affiliate Program",
        link: "/",
      },
      {
        name: "Career",
        link: "/",
      },
      {
        name: "Pricing Plan",
        link: "/",
      },
    ],
  },
  {
    name: "Product",
    links: [
      {
        name: "Case Studies",
        link: "/",
      },
      {
        name: "Our Pricing",
        link: "/",
      },
      {
        name: "Features",
        link: "/",
      },
      {
        name: "Overview",
        link: "/",
      },
      {
        name: "New Releases",
        link: "/",
      },
      {
        name: "Solutions",
        link: "/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-top relative bg-primary_gradinet text-white">
      <div className="relative h-[303px]">
        <div className="hero-section flex h-full flex-col items-center justify-center gap-6 bg-[url('/assets/images/img/hero_Image.jpg')] text-center text-white">
          <h1 className="z-50 text-h6 md:text-h4">Ready to Work, Let's Chat</h1>
          <p className="z-50">
            Our team of experts is ready to collaborate with you every step of
            the way, from initial consultation to implementation.
          </p>
          <ButtonMain className="z-50" name="Contact Us Today" />
        </div>
      </div>
      <section className="space-y-16 px-mobile md:px-spacing_2 py-16">
        {/* info */}
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-content-center rounded-full bg-black_25">
              <MdEmail size={30} />
            </span>
            <div>
              <p className="text-paragraph">Write to us</p>
              <h3 className="text-h6">Techco@gmail.com</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-content-center rounded-full bg-black_25">
              <BiPhoneCall size={30} />
            </span>
            <div>
              <p className="text-paragraph">Call Us (USA)</p>
              <h3 className="text-h6">+(1) 1230 452 8597</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-content-center rounded-full bg-black_25">
              <BiCurrentLocation size={30} />
            </span>
            <div>
              <p className="text-paragraph">Our Office</p>
              <h3 className="text-h6">Waterloo, Park, Australia</h3>
            </div>
          </div>
        </div>
        <hr className="border-primary/80" />
        <div className="flex items-center gap-10 justify-between flex-wrap">
          <div className="space-y-5 md:w-1/4">
            <p>Newsletter</p>
            <p className="text-white/70">
              Sign up to Techco weekly newsletter to get the latest updates.
            </p>
            <div className="flex items-center justify-between gap-3">
              <span>
                <BiMailSend size={24} />
              </span>
              <input
                className="appearance-none w-full border-none bg-transparent bg-opacity-0 outline-none"
                type="text"
                placeholder="Enter your Email"
              />
              <span>
                <VscSend size={20} className="-rotate-45" />
              </span>
            </div>
            <hr />
            <div className="flex items-center gap-2">
              <span className="rounded-xl border p-1">
                <BiLogoFacebook size={25} />
              </span>
              <span className="rounded-xl border p-1">
                <BiLogoInstagram size={25} />
              </span>
              <span className="rounded-xl border p-1">
                <BiLogoLinkedin size={25} />
              </span>
            </div>
          </div>
          {Links.map((link) => (
            <div key={link.name}>
              <p className="text-paragraph opacity-70">{link.name}</p>
              <div className="flex flex-col gap-2">
                {link.links.map((item) => (
                  <Link className="hover:opacity-70 hover:underline" href={item.link}>{item.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-paragraph_b flex items-center justify-between">
          <p className="text-center text-paragraph">
          Copyright © 2024 <span className="text-secandry_primary">Techco</span>, All rights reserved.
          </p>
          <p>Developed by <span className="text-secandry_primary">Vexial</span></p>
        </div>
      </section>
    </footer>
  );
}
