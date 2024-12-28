"use client";
import React, { useState } from "react";
import ButtonMain from "./MianButton";
import clsx from "clsx";
import { motion } from "framer-motion";
export default function Recent_bast_work_2() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="mt-top md:px-spacing">
      <div className="text-center md:space-y-2 md:text-start">
        <p>
          <span className="font-bold text-secandry_primary">Crafting</span>{" "}
          Success With Project
        </p>
        <h3 className="text-h4 md:text-h3">Our Recent Best Works</h3>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="max-w-3xl text-paragraph_b opacity-70">
            Our recent projects highlight our expertise in delivering tailored
            solutions that meet the unique needs and objectives of our
            clients,custom software.
          </p>
          <ButtonMain href="#" name="All Works" />
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row justify-between gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Works_Card
            onHover={() => setActiveIndex(i)}
            key={"Our_Recent_Best_Works" + i}
            active={activeIndex == i}
          />
        ))}
      </div>
    </section>
  );
}

// Our Recent Best Works Card

const Works_Card = ({
  active = false,
  onHover,
}: {
  active?: boolean;
  onHover: () => void;
}) => {
  return (
    <>
      <motion.div
        onMouseEnter={onHover}
        variants={{
          animate: { width:"800px"},
          initial: { width: "9rem" },
        }}
        initial="initail"
        animate={active?"animate":"initial"}
        transition={{ duration: 0.2,ease:"linear" }}
        className="relative hidden md:block h-[300px] rounded-2xl bg-[url(/assets/images/img/hero_Image.jpg)] md:h-[500px] overflow-hidden"
      >
        <div className="absolute !min-w-[300px] inset-0 top-0 flex items-end justify-start bg-gradient-to-t from-sky-950 to-transparent text-white">
          <div className="flex w-full items-center justify-between p-5">
            <div>
              <h1 className="text-h4">Dashboard Design</h1>
              <p className="text-paragraph opacity-50">Dashboard Design</p>
            </div>
            <ButtonMain
              href="#"
              className="text-nowrap"
              name="Explore More"
            />
          </div>
        </div>
      </motion.div>



      {/* mobile */}
      <div
        className="relative md:hidden w-full h-[300px] overflow-hidden rounded-2xl bg-[url(/assets/images/img/hero_Image.jpg)] pl-1 md:h-[539px]"
      >
        <div className="absolute inset-0 top-0 flex items-end justify-start bg-gradient-to-t from-sky-950 to-transparent text-white">
          <div className="flex w-full items-center justify-between p-5">
            <div>
              <h1 className="text-h4">Dashboard Design</h1>
              <p className="text-paragraph opacity-50">Dashboard Design</p>
            </div>
            <ButtonMain
              href="#"
              className=""
              name="Explore More"
            />
          </div>
        </div>
      </div>
    </>
  );
};
