"use client";
import ButtonMain from "@/Components/MianButton";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import {motion} from "framer-motion";
import { useState } from "react";
import { Settings } from "@/data/data";


type Props = {};

export default function Header_2({}: Props) {
  return (
    <nav className="relative z-50 flex w-full items-center justify-between gap-3 bg-white px-mobile py-3 shadow-sm md:flex-col md:px-spacing xl:flex-row xl:gap-0">
      <Link href={"/"}>
        <Image
          width={183}
          height={45}
          src={Settings.logo}
          alt="logo"
          priority
        />
      </Link>
      <ul className="hidden items-center justify-between gap-7 md:flex opacity-70">
        <Link href={"/"} className="text-navItem">
          Home
        </Link>
        <Link href={"/portfolio"} className="text-navItem">
          Porfolio
        </Link>
        <Link href={"/services"} className="text-navItem">
          Services
        </Link>
        <Link href={"/blog"} className="text-navItem">
          Blogs
        </Link>
        <Link href={"/team_member"} className="text-navItem">
        Team
        </Link>
        <Link href={"/contact"} className="text-navItem">
          Contact
        </Link>
      </ul>
      <ButtonMain className="hidden !text-white xl:flex" name="Get Started" />

      {/* mobile nav */}
      <MobileNav />
    </nav>
  );
}

// // mobile NavBar
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
            <Link href={"/"}>
              <Image
                width={183}
                height={45}
                src={Settings.logo}
                alt="logo"
                priority
                className="mt-14"
              />
            </Link>
            <ul className="mt-14 w-full space-y-9">

              <li className="border-b">
                <Link href={"/portfolio"} className="text-navItem">
                Porfolio
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/services"} className="text-navItem">
                Services
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/blog"} className="text-navItem">
                Blogs
                </Link>
              </li>
              <li className="border-b">
                <Link href={"/team_member"} className="text-navItem">
                Team
                </Link>
              </li>
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
