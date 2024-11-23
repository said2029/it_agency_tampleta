"use client";
import { animate, AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaHospitalUser, FaUsers } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";
import {
  MdDesignServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { PiCoinsThin } from "react-icons/pi";

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="px-mobile relative flex w-full items-center justify-between gap-3 bg-white py-3 md:flex-col md:px-spacing xl:flex-row xl:gap-0">
      <Image
        width={183}
        height={45}
        src={"/assets/images/logo/logo.png"}
        alt="logo"
        priority
      />
      <ul className="hidden items-center justify-between gap-7 md:flex">
        <Tap name="Home" Component={ComponentHome} />
        <Tap name="Company" inCenter={false} Component={ComponentCompany} />
        <Tap name="Porfolio" Component={ComponentPortfilio} />
        <Tap name="Services" Component={ComponentServices} />
        <Tap name="Blogs" Component={ComponentBlogs} />
        <Link href={"/"} className="text-navItem">
          Contact
        </Link>
      </ul>
      <button className="text-nowraps hidden items-center gap-3 rounded-[51px] bg-primary_gradinet px-6 py-4 text-paragraph_b text-white xl:flex">
        Get Started
        <FaArrowRight />
      </button>

      {/* mobile nav */}
      <MobileNav />
    </nav>
  );
}

// mobile Nav

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="blocks md:hidden">
      <button onClick={() => setOpen(true)} className="text-black_50">
        <IoMdMenu size={50} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={{
              inital: {
                x: "100%",
              },
              animate: {
                x: "0",
              },
            }}
            initial="inital"
            animate={"animate"}
            exit={"inital"}
            transition={{
              duration: 0.3,
              type: "tween",
            }}
            className="fixed left-0 top-0 flex h-[100vh] w-screen flex-col overflow-y-scroll bg-white px-5"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4"
            >
              <IoMdClose size={40} />
            </button>
            {/* logo */}
            <Image
              width={183}
              height={45}
              src={"/assets/images/logo/logo.png"}
              alt="logo"
              priority
              className="mt-14"
            />
            <ul className="mt-14 w-full space-y-9">
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
          </motion.div>
        )}
      </AnimatePresence>
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
        <span className="text-navItem">{name}</span>
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
    <ul className="hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70 w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1">
      <li className="bg-primary/20 text-primary/70">Home 1</li>
      <li>Home 1</li>
      <li>Home 1</li>
    </ul>
  );
};
// for Company tab
const ComponentCompany = () => {
  return (
    <div className="w-full md:px-16">
      <div className="hover:[&_a]:bg-primary/15 grid w-full gap-10 rounded-md bg-white p-4 md:mt-4 md:grid-cols-3 md:pt-16 xl:grid-cols-4">
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <GoHome className="rounded-md text-primary" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">About Us</li>
          </ul>
          <p className="text-paragraph text-black_75">
            Lorem ipsum dolor sit ametr
          </p>
        </Link>
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <PiCoinsThin className="rounded-md text-primary" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Our Pricing</li>
          </ul>
          <p className="text-paragraph text-black_75">Streamlined Pricing</p>
        </Link>

        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <GoHome className="rounded-md text-primary" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Portfolio</li>
          </ul>
          <p className="text-paragraph text-black_75">
            Explore our all overview
          </p>
        </Link>
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <FaHospitalUser className="rounded-md text-primary" size={35} />
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
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <FaUsers className="rounded-md text-primary" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Team</li>
          </ul>
          <p className="text-paragraph text-black_75">
            We are friendly Join our team
          </p>
        </Link>
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <GoHome className="rounded-md text-primary" size={35} />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Team Details</li>
          </ul>
          <p className="text-paragraph text-black_75">
            We are friendly Join our team
          </p>
        </Link>
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <MdOutlineMiscellaneousServices
                  className="rounded-md text-primary"
                  size={35}
                />
              </span>
            </li>
            <li className="text-h6 font-medium text-black">Services</li>
          </ul>
          <p className="text-paragraph text-black_75">Happy to help you!</p>
        </Link>
        <Link href={"/"} className="rounded-md px-4 py-3 transition-all">
          <ul className="flex items-center gap-1">
            <li>
              <span>
                <MdDesignServices
                  className="rounded-md text-primary"
                  size={35}
                />
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
    <ul className="hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70 w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1">
      <li className="bg-primary/20 text-primary/70">Home 1</li>
      <li>Home 1</li>
      <li>Home 1</li>
    </ul>
  );
};
// for Services tab
const ComponentServices = () => {
  return (
    <ul className="hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70 w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1">
      <li className="bg-primary/20 text-primary/70">Home 1</li>
      <li>Home 1</li>
      <li>Home 1</li>
    </ul>
  );
};
// for Blogs tab
const ComponentBlogs = () => {
  return (
    <ul className="hover:[&_li]:bg-primary/20 hover:[&_li]:text-primary/70 w-full space-y-2 rounded-md bg-white px-1 py-3 text-navItem font-medium shadow-md md:w-48 [&_li]:cursor-pointer [&_li]:rounded-sm [&_li]:px-3 [&_li]:py-1">
      <li className="bg-primary/20 text-primary/70">Home 1</li>
      <li>Home 1</li>
      <li>Home 1</li>
    </ul>
  );
};
