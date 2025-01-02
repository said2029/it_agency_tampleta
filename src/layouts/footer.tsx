
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
import { footerData } from "@/data/data";

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
<footer className="relative bg-primary_gradinet text-white">
  {/* Hero Section */}
  <div className="relative h-[303px]">
    <div className="hero-section flex h-full flex-col items-center justify-center gap-6 bg-[url('/assets/images/img/hero_Image.jpg')] text-center text-white">
      <h1 className="z-50 text-h6 md:text-h4">{footerData.heroSection.heading}</h1>
      <p className="z-50">{footerData.heroSection.description}</p>
      <ButtonMain className="z-50" name={footerData.heroSection.buttonText} />
    </div>
  </div>

  {/* Info & Links Section */}
  <section className="space-y-16 px-mobile md:px-spacing py-16">
    {/* Contact Info */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {footerData.contactInfo.map((info, index) => (
        <div key={index} className="flex items-center gap-3">
          <span className="grid size-16 min-w-16 place-content-center rounded-full bg-black_25">
            <info.icon size={30}/>
          </span>
          <div>
            <p className="text-paragraph">{info.title}</p>
            <h3 className="text-2xl">{info.content}</h3>
          </div>
        </div>
      ))}
    </div>

    <hr className="border-primary/80" />

    {/* Newsletter & Links */}
    <div className="flex items-center gap-10 justify-between flex-wrap">
      {/* Newsletter Section */}
      <div className="space-y-5 md:w-1/4">
        <p>{footerData.newsletter.title}</p>
        <p className="text-white/70">{footerData.newsletter.description}</p>
        <div className="flex items-center justify-between gap-3">
          <span>
            <BiMailSend size={24} />
          </span>
          <input
            className="appearance-none w-full border-none bg-transparent bg-opacity-0 outline-none"
            type="text"
            placeholder={footerData.newsletter.placeholder}
          />
          <span>
            <VscSend size={20} className="-rotate-45" />
          </span>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          {footerData.socialIcons.map((icon, index) => (
            <a key={index} href={icon.link} className="rounded-xl border p-1">
              <icon.icon size={30}/>
            </a>
          ))}
        </div>
      </div>

      {/* Links Section */}
      {footerData.links.map((link, i) => (
        <div key={i + "FooterItem"}>
          <p className="text-paragraph opacity-70">{link.name}</p>
          <div className="flex flex-col gap-2">
            {link.links.map((item, index) => (
              <Link
                key={index}
                className="hover:opacity-70 hover:underline"
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Footer Bottom */}
    <div className="text-paragraph_b flex items-center flex-wrap justify-between">
      <p className="text-center text-paragraph">
        {footerData.footerBottom.copyright}
        <span className="text-secandry_primary">
          {footerData.footerBottom.companyName}
        </span>
        , All rights reserved.
      </p>
      <Link target="_blank" className="underline hover:opacity-85" href={footerData.footerBottom.developerLink}>
        {footerData.footerBottom.developedBy}
      </Link>
    </div>
  </section>
</footer>

  );
}
