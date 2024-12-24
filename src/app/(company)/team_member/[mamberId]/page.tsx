import Top_Banner from "@/Components/Top_Banner";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function page() {
  return (
    <main className="bg-[#74a5ff2d] pb-10">
      <Top_Banner
        Title="Team Details"
        highlightNane="Details"
        subTitle="Team"
      />
      <div className="md:px-spacing_2">
        <div className="mt-top flex flex-col md:flex-row items-center md:items-start gap-7 rounded-xl bg-white p-3">
          <div>
            <Image
              width={300}
              height={300}
              alt=""
              src={"/assets/images/img/Rectangle 11.png"}
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-5">
              <h2 className="text-h5">August Everest</h2>
              <p className="text-paragraph text-xl">
                <strong>Responsibility:</strong> systems engineer
              </p>
              <p className="text-paragraph text-xl">
                <strong>Experience:</strong>18 Years
              </p>
              <p className="text-paragraph text-xl">
                <strong>Email:</strong>August@example.com
              </p>
              <p className="text-paragraph text-xl">
                <strong>Phone:</strong>+91590 0574 258
              </p>
            </div>
            <hr />
            <div className="flex max-w-xl flex-wrap justify-between gap-4">
              <p className="text-paragraph text-xl">
                <strong>Product Development:</strong> 98%
              </p>
              <p className="text-paragraph text-xl">
                <strong>Problem-Solving:</strong> 98%
              </p>
              <p className="text-paragraph text-xl">
                <strong>Communication Skills:</strong> 98%
              </p>
              <p className="text-paragraph text-xl">
                <strong>Passion for Helping:</strong> 98%
              </p>
            </div>
          </div>
        </div>

        <article className="mt-8 [&_p]:text-paragraph space-y-4 px-mobile">
          <h4 className="text-h5">Professional Skills</h4>
          <p>
            Since joining Techco in 1993, Matilda has been instrumental in
            transforming the company from a collection of tech-savvy individuals
            collaborating with startups to a world-renowned leader in Digital
            Systems Engineering Services, catering to the innovation needs of
            Fortune 500 enterprises. During Matilda's tenure as President and
            CEO, Techco has witnessed remarkable expansion in both its scale and
            revenue streams. This growth has been achieved hand-in-hand with the
            cultivation of a vibrant company culture that champions employee
            engagement and fosters a spirit of innovation at every level.
          </p>
          <hr />
          <h4 className="text-h5">Educational Experience</h4>
          <p>
            Armed with a Bachelor's degree in Computer Science from the
            University of XYZ, I specialized in data structures, algorithms, and
            networks. Expanding my knowledge, I pursued a Master's in
            Information Technology Management at ABC University.
          </p>

          <div className="space-y-3 mt-3">
            <p className="text-paragraph_b">
              <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
              <span>Proficiency in systems analysis, design, implementation, and maintenance.</span>
            </p>
            <p className="text-paragraph_b">
              <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
              <span>Strong knowledge of network protocols, hardware, and software components.</span>
            </p>
            <p className="text-paragraph_b">
              <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
              <span>Experience with virtualization technologies (VMware, Hyper-V).</span>
            </p>
            <p className="text-paragraph_b">
              <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
              <span>Skilled in cloud computing platforms (AWS, Azure, Google Cloud).</span>
            </p>
            <p className="text-paragraph_b">
              <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
              <span>Proficient in scripting languages (Python, PowerShell).</span>
            </p>
            <p className="text-paragraph_b">
              <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
              <span>Experience in system security and disaster recovery planning.</span>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
