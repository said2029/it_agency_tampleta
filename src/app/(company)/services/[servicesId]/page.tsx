import Top_Banner from "@/Components/Top_Banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
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
      <section className="mt-60 px-mobile md:mt-top md:px-spacing [&_p]:!text-lg">
        <div className="aspect-video w-full overflow-hidden rounded-2xl md:h-[634px]">
          <Image
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Accordion
                  className="h-full space-y-6"
                  type="single"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl font-bold hover:text-primary hover:no-underline">
                      01. Listening to Your Needs
                    </AccordionTrigger>
                    <AccordionContent className="bg-primary/10 p-3 py-7 text-xl font-semibold opacity-90">
                      Data - driven diagnostic and predictive app for improving
                      outcomes Data driven diagnostic and predictive app for
                      improving.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl font-bold hover:text-primary hover:no-underline">
                      02. Tailored Solutions
                    </AccordionTrigger>
                    <AccordionContent className="bg-primary/10 p-3 py-7 text-xl font-semibold opacity-90">
                      Data - driven diagnostic and predictive app for improving
                      outcomes Data driven diagnostic and predictive app for
                      improving.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl font-bold hover:text-primary hover:no-underline">
                      03. Tactical Alignment
                    </AccordionTrigger>
                    <AccordionContent className="bg-primary/10 p-3 py-7 text-xl font-semibold opacity-90">
                      Data - driven diagnostic and predictive app for improving
                      outcomes Data driven diagnostic and predictive app for
                      improving.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl font-bold hover:text-primary hover:no-underline">
                      04. Measurable Results
                    </AccordionTrigger>
                    <AccordionContent className="bg-primary/10 p-3 py-7 text-xl font-semibold opacity-90">
                      Data - driven diagnostic and predictive app for improving
                      outcomes Data driven diagnostic and predictive app for
                      improving.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="grid place-content-center">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  src={"/assets/images/elemants/elemants (30).png"}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-h5">Services Outcome</h2>
            <p>
              Here are six key points that can be associated with a digital
              Transformation gallery case global Digital Systems Engineer
              Services leader helping Fortune 500 companies on their innovation
              agenda:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
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
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </article>
  );
}
