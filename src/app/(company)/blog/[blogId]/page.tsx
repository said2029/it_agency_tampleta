import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

import { CiSearch } from "react-icons/ci";
import { FaRegComments, FaRegUser } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight, MdOutlineDateRange } from "react-icons/md";
const post = {
  title: "Leading the Digital Age with Groundbreaking IT Technologies",
  author: "admin",
  date: "June 8, 2024",
  tags: ["App Dev", "Data", "Solution"],
  quote: {
    text: "In the rapidly evolving world of technology, staying ahead is not just an advantage—it's a necessity. Embracing the latest IT solutions and trends like AI, edge computing, and 5G isn't merely about keeping up with the competition; it's about setting the pace, driving innovation",
    author: "Robert Vibes",
  },
  listItems: [
    "Unveiling Emerging Technologies",
    "Navigating Complex Challenges",
    "Forecasting Future Trends",
    "Driving Innovation Strategies",
    "Exploring Industry Practices",
    "Empowering Transformation",
  ],
};

export default function dsfds() {
  return (
    <main className="bg-primary/10 pb-top">
      <section className="relative grid h-72 w-full place-content-center">
        <Image
          className="pointer-events-none absolute inset-0 left-0 top-0 -z-40 h-full w-full"
          width={1000}
          height={600}
          src={"/assets/images/backgrounds/Rectangle 14.png"}
          alt="top_image_benner"
        />
        <div className="px-spacing text-center text-white">
          <h1 className="text-4xl lg:text-h5">
            Leading the Digital Age with Groundbreaking IT Technologies
          </h1>
          <div className="mt-5">
            <Link href={"/"}>Techco</Link> / Blog / Cybersecurity / Leading the
            Digital Age with Groundbreaking IT Technologies
          </div>
        </div>
      </section>
      <section className="relative mt-60 grid grid-cols-1 gap-10 bg-blue-100/50 px-mobile md:mt-top md:grid-cols-3 md:px-spacing">
        <article className="mx-auto max-w-4xl space-y-6 rounded-xl p-6 md:col-span-2">
          <div className="mb-8 md:h-80">
            <Image
              width={500}
              height={350}
              src="/assets/images/img/Rectangle_37.png"
              alt="Brain visualization"
              className="h-full w-full rounded-lg aspect-video"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-7">
            <p className="flex items-center gap-3 text-[16px]">
              <span className="text-primary">
                <FaRegUser size={16} />
              </span>{" "}
              <span className="opacity-85">{post.author}</span>
            </p>
            <p className="flex items-center gap-3 text-[16px]">
              <span className="text-primary">
                <FaRegComments size={16} />
              </span>{" "}
              <span className="opacity-85">Comments (0)</span>
            </p>
            <p className="flex items-center gap-3 text-[16px]">
              <span className="text-primary">
                <MdOutlineDateRange size={16} />
              </span>{" "}
              <span className="opacity-85">{post.date}</span>
            </p>
          </div>

          <div className="space-y-6 text-gray-600">
            <p>
              Gain exclusive insights into the world of IT solutions with
              Techco's distinguished thought leaders. With years of experience
              and a deep understanding of industry trends, our thought leaders
              offer invaluable perspectives that illuminate the path to
              technological excellence. From emerging technologies to innovative
              strategies, they provide unique insights that inform and inspire.
              Join us as we delve into the inner workings of IT solutions,
              exploring the challenges.
            </p>

            <p>
              Embark on an illuminating journey into the world of IT solutions
              with Techco's esteemed thought leaders. Delve deep into the inner
              workings of technology as our seasoned experts share their wealth
              of knowledge and experience. With a finger on the pulse of
              industry trends and a keen eye for innovation, our thought leaders
              offer unparalleled insights that illuminate
            </p>

            <div className="my-10 grid gap-8 md:grid-cols-2">
              <div>
                <Image
                  width={340}
                  height={340}
                  src="/assets/images/elemants/elemants (16).png"
                  alt="Abstract shapes"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4">
                {post.listItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8 rounded-lg border-s-4 border-primary bg-white p-6">
              <p className="mb-4 italic text-gray-700">{post.quote.text}</p>
              <cite className="text-gray-600">— {post.quote.author}</cite>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              Exploring the Future with Quantum Computing
            </h3>

            <p>
              The technological advancements of 2024 offer unprecedented
              opportunities for businesses to innovate and thrive. By embracing
              AI and ML, edge computing, advanced cybersecurity, hybrid cloud
              environments, 5G technology, remote work solutions, and quantum
              computing, businesses can stay ahead of the curve and drive
              sustainable growth. Stay informed and be proactive in adopting
              these technologies to transform your business and achieve.
            </p>

            <p>
              Though still in its nascent stages, quantum computing holds
              promise for solving complex problems beyond the capabilities of
              classical computers. Industries such as pharmaceuticals, finance,
              and logistics are exploring quantum computing for its potential to
              accelerate research, optimize processes, and enhance cryptographic
              security.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-gray-200 pt-6">
              <span className="text-gray-700">Tags:</span>
              <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-white px-3 py-1 text-sm text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <hr />

          {/* Leave A Comment */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Leave A Comment</h2>
            <p className="mt-3 opacity-85">
              All fields marked with an asterisk (*) are required
            </p>
            <form action="" className="mt-7 space-y-8">
              <div className="flex items-center gap-4">
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder="Name*"
                  type="text"
                  required
                  maxLength={15}
                />
                <input
                  className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                  placeholder="Email Address*"
                  type="email"
                  required
                  maxLength={15}
                />
              </div>
              <input
                className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                placeholder="Website"
                type="url"
                maxLength={15}
              />
              <label className="flex items-center gap-2">
                <input className="size-4" type="checkbox" />
                <p>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </label>
              <textarea
                rows={10}
                className="w-full rounded-lg bg-white p-5 focus:outline-none"
                placeholder="Message*"
                required
              />
              <input
                className="cursor-pointer rounded-full bg-primary px-6 py-3 text-white transition-all hover:scale-105"
                type="submit"
                value={"POST COMMENT"}
              />
            </form>
          </div>
        </article>

        {/* sidbar */}
        <aside className="sticky top-0 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Search</h2>
            <div className="relative">
              <input
                type="search"
                className="h-14 w-full rounded-lg bg-white px-5 focus:outline-none"
                placeholder="Search ..."
              />
              <button className="absolute bottom-1/2 right-2 top-1/2 grid size-10 -translate-y-1/2 place-content-center rounded-lg bg-primary_gradinet text-white">
                <CiSearch size={30} />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Recent Post</h2>
            <div className="mt-4 flex flex-col gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i + "sidbar_cards_blog"}
                  className="flex gap-3 overflow-hidden rounded-lg bg-white p-2"
                >
                  <div className="size-24 min-w-24 rounded-lg bg-red-500">
                    <Image
                      className="h-full w-full object-cover"
                      width={300}
                      height={300}
                      alt=""
                      src={"/assets/images/img/Rectangle_37.png"}
                    />
                  </div>
                  <div>
                    <p className="opacity-75">June 8, 2024</p>
                    <h2 className="line-clamp-2 text-xl font-semibold opacity-90">
                      Unlocking New Possibilities with Advanced Cloud ...
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Categories</h2>
            <ul className="divide-black/20 space-y-5 divide-y">
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Business
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Cloud Solution
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Cybersecurity
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  It Solution
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Mobile App
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  Tech Trends
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  TechSolutions
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
              <li className="flex items-center justify-between py-2">
                <Link
                  href={"/"}
                  className="text-xl font-medium opacity-65 hover:text-primary hover:opacity-100"
                >
                  UX Design
                </Link>
                <p className="text-[16px]">(3)</p>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Tags</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-primary/5 p-5">
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                App Dev
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Consultants
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Cybersecurity
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Data
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                It
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Optimization
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Solution
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                Startup
              </span>
              <span className="flex-grow rounded-lg bg-white px-4 py-2 text-lg opacity-80">
                TechSolutions
              </span>
            </div>
          </div>
        </aside>
      </section>
      {/* pagination */}
      <section className="mt-top grid place-content-center">
        <div className="flex items-center gap-4">
          <button className="size-12 rounded-xl bg-white text-xl">1</button>
          <button className="size-12 rounded-xl bg-primary text-xl text-white">
            2
          </button>
          <button className="size-12 rounded-xl bg-white text-xl">3</button>
          <button className="grid size-12 place-content-center rounded-xl bg-white text-xl">
            <MdKeyboardDoubleArrowRight size={30} />
          </button>
        </div>
      </section>
    </main>
  );
}
