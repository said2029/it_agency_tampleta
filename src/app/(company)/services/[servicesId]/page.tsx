import Top_Banner from "@/Components/Top_Banner";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function page() {
  return (
    <article className="bg-[#74a5ff2d] pb-10">
      <Top_Banner
        Title="Driving Digital Transformation Explore the Depth of Our IT Projects"
        highlightNane="Portfolio"
        subTitle="Our"
      />
      <section className="px-mobile md:mt-top md:px-spacing_2 [&_p]:!text-lg">
        <div className="aspect-video  md:h-[634px] rounded-2xl overflow-hidden w-full">
          <Image
            className="h-full w-full object-cover"
            width={600}
            height={600}
            alt=""
            src={"/assets/images/img/portfolioImage.png"}
          />
        </div>

        <div className="mt-7 space-y-6">
          <div className="space-y-3">
            <h2 className="text-h6 md:text-h5">
              Network Infrastructure and Design
            </h2>
            <p>
              Network infrastructure and design are the backbone of modern
              businesses, serving as the foundation upon which all digital
              operations rely. At our IT solution agency, we specialize in
              crafting robust and reliable network architectures tailored to
              meet the unique needs of our clients. From small businesses to
              large enterprises, we understand the critical importance of a
              well-designed network infrastructure in driving efficiency,
              security, and scalability. Our team of experienced professionals
              works closely with clients.
            </p>

            <p>
              We take a holistic approach to network design, considering factors
              such as bandwidth requirements, security protocols, scalability,
              and future growth potential. By leveraging industry best practices
              and cutting-edge technologies,
            </p>
          </div>
          <hr />
          <div>
          <h2 className="text-h5">Service Process</h2>
          </div>
          <div>
            <h2 className="text-h5">Services Outcome</h2>
            <p>
              Here are six key points that can be associated with a digital
              Transformation gallery case global Digital Systems Engineer
              Services leader helping Fortune 500 companies on their innovation
              agenda:
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              <p className="!text-xl">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Scalability and Flexibility</span>
              </p>
              <p className="!text-xl">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>User Experience</span>
              </p>
              <p className="!text-xl">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Security and Compliance</span>
              </p>
              <p className="!text-xl">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Security and Compliance</span>
              </p>
              <p className="!text-xl">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Performance Optimization</span>
              </p>
              <p className="!text-xl">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Training and Education</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
                
            </div>
            <div>

            </div>
          </div>

        </div>
      </section>
    </article>
  );
}
