"use client";
import ButtonMain from "@/Components/MianButton";
import { Settings } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  GrAccessibility,
  GrAnalytics,
  GrArticle,
  GrCatalog,
  GrCluster,
  GrCodeSandbox,
  GrOverview,
  GrQr,
} from "react-icons/gr";
import { IoIosArrowDown} from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";

type Props = {};

export default function Header_1({}: Props) {
  return (
    <nav className="relative z-50 flex w-full items-center justify-between gap-3 bg-white px-mobile py-3 shadow-sm md:flex-col md:px-spacing xl:flex-row xl:gap-0">
      <Link href={"/"}>
        <div className="h-16 w-fit overflow-hidden">
          <Image
            width={400}
            height={400}
            className="h-full w-full object-fill"
            src={Settings.logo}
            alt="logo"
            priority
          />
        </div>
      </Link>
      <ul className="hidden items-center justify-between gap-7 md:flex">
        <Tap name="Home" Component={ComponentHome} />
        <Tap name="Company" inCenter={false} Component={ComponentCompany} />
        <Tap name="Porfolio" Component={ComponentPortfilio} />
        <Tap name="Services" Component={ComponentServices} />
        <Tap name="Blogs" Component={ComponentBlogs} />
        <Link href={"/contact"} className="text-navItem opacity-70">
          Contact
        </Link>
      </ul>
      <ButtonMain className="hidden !text-white xl:flex" name="Get Started" />

      {/* mobile nav */}
      <MobileNav />
    </nav>
  );
}

// mobile NavBar
const MobileNav = () => {
  return (
    <div className="blocks md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className=" overflow-y-scroll">
          <SheetHeader>
            <SheetTitle>
              {Settings.title}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col mt-14">
            <ul className="w-full">
              <Accardon name="Home" Component={ComponentHome} />
              <Accardon name="Company" Component={ComponentCompany} />
              <Accardon name="Porfolio" Component={ComponentPortfilio} />
              <Accardon name="Services" Component={ComponentServices} />
              <Accardon name="Blogs" Component={ComponentBlogs} />
              <li className="border-b">
                <Link href={"/"} className="text-navItem">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
// tab
const Tap = ({
  name,
  Component,
  inCenter = true,
}: {
  name: string;
  Component: any;
  inCenter?: Boolean;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${inCenter && "relative"}`}
    >
      <Link href={"#"} className="flex items-center gap-2">
        <span className="text-navItem opacity-70">{name}</span>
        <motion.span
          variants={{
            inital: {
              rotate: "0deg",
            },
            animate: { rotate: "180deg" },
          }}
          initial="inital"
          animate={hover ? "animate" : "inital"}
        >
          <IoIosArrowDown />
        </motion.span>
      </Link>
      <div className="absolute left-1/2 h-9 w-36 -translate-x-1/2"></div>

      <AnimatePresence>
        {hover && (
          <motion.div
            variants={{
              inital: {
                opacity: 0,
                top: "50px",
              },
              animate: {
                opacity: 1,
                top: "30px",
              },
            }}
            initial={"inital"}
            animate="animate"
            exit={"inital"}
            className={`absolute ${inCenter ? "left-1/2 -translate-x-1/2" : "left-0 w-screen"} translate-y-7`}
          >
            <Component />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
// accardon for mobile navBar
const Accardon = ({ name, Component }: { name: string; Component: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <li onClick={() => setOpen(!open)} className="border-b">
      <span className="flex items-center justify-between py-6 text-navItem">
        {name}{" "}
        <motion.span
          variants={{
            inital: {
              rotate: "0deg",
            },
            animate: { rotate: "180deg" },
          }}
          initial="inital"
          animate={open ? "animate" : "inital"}
        >
          <IoIosArrowDown />
        </motion.span>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={{
              initail: { height: "0px" },
              open: { height: "fit-content" },
            }}
            initial="initail"
            animate="open"
            exit={"initail"}
            className="h-0 origin-bottom overflow-hidden bg-background"
          >
            <Component />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
//  Components for navBar taps as content
// for home Tab
const ComponentHome = () => {
  return (
    <ul className="w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1 hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70">
      <li className="bg-primary/20 text-primary/70">
        <Link href={"/?page=1"}>Home 1</Link>{" "}
      </li>
      <li>
        <Link href={"/?page=2"}>Home 2</Link>{" "}
      </li>
    </ul>
  );
};
// for Company tab
const ComponentCompany = () => {
  return (
    <div className="w-screen overflow-hidden md:px-16">
      <div className="grid w-full gap-10 rounded-md bg-white p-4 shadow-lg md:mt-4 md:grid-cols-3 md:pt-16 xl:grid-cols-4 hover:[&_a]:bg-primary/15">
        <Link href={"/about"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrAccessibility
                  className="rounded-md text-primary/80"
                  size={35}
                />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">About Us</li>
          </ul>
          <p className="text-paragraph text-black_75">
            Lorem ipsum dolor sit ametr
          </p>
        </Link>
        <Link href={"/pricing"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrAnalytics className="rounded-md text-primary/80" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Our Pricing</li>
          </ul>
          <p className="text-paragraph text-black_75">Streamlined Pricing</p>
        </Link>

        <Link
          href={"/portfolio"}
          className="rounded-md px-4 py-3 transition-all"
        >
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrArticle className="rounded-md text-primary/80" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Portfolio</li>
          </ul>
          <p className="text-paragraph text-black_75">
            Explore our all overview
          </p>
        </Link>
        <Link
          href={"/portfolio/detals"}
          className="rounded-md px-4 py-3 transition-all"
        >
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrCatalog className="rounded-md text-primary/80" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">
              Portfolio Details
            </li>
          </ul>
          <p className="text-paragraph text-black_75">
            Explore our work overview
          </p>
        </Link>
        <Link
          href={"/team_member"}
          className="rounded-md px-4 py-3 transition-all"
        >
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrCluster className="rounded-md text-primary/80" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Team</li>
          </ul>
          <p className="text-paragraph text-black_75">
            We are friendly Join our team
          </p>
        </Link>
        <Link
          href={"/team_member/detals"}
          className="rounded-md px-4 py-3 transition-all"
        >
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrCodeSandbox
                  className="rounded-md text-primary/80"
                  size={35}
                />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Team Details</li>
          </ul>
          <p className="text-paragraph text-black_75">
            We are friendly Join our team
          </p>
        </Link>
        <Link
          href={"/services"}
          className="rounded-md px-4 py-3 transition-all"
        >
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrOverview className="rounded-md text-primary/80" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Services</li>
          </ul>
          <p className="text-paragraph text-black_75">Happy to help you!</p>
        </Link>
        <Link
          href={"/services/detals"}
          className="rounded-md px-4 py-3 transition-all"
        >
          <ul className="flex items-center gap-2">
            <li>
              <span>
                <GrQr className="rounded-md text-primary/80" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Service Details</li>
          </ul>
          <p className="text-paragraph text-black_75">Happy to help you!</p>
        </Link>
      </div>
    </div>
  );
};
// for Portfilio tab
const ComponentPortfilio = () => {
  return (
    <ul className="w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1 hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70">
      <li className="bg-primary/20 text-primary/70">
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
      <li>
        <Link href={"/portfolio/detals"}>Portfolio Detals</Link>
      </li>
    </ul>
  );
};
// for Services tab
const ComponentServices = () => {
  return (
    <ul className="w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1 hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70">
      <li className="bg-primary/20 text-primary/70">
        <Link href={"/services"}>Services</Link>{" "}
      </li>
      <li>
        <Link href={"/services/detals"}>Services Detals</Link>{" "}
      </li>
    </ul>
  );
};
// for Blogs tab
const ComponentBlogs = () => {
  return (
    <ul className="w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1 hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70">
      <li className="bg-primary/20 text-primary/70">
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/blog/id"}>Blog Detals</Link>
      </li>
    </ul>
  );
};
