import Top_Banner from "@/Components/Top_Banner";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import CardPortfolio from "../_components/CardPortfolio";

export default function page() {
  return (
    <article className="bg-[#74a5ff2d] pb-10">
      <Top_Banner
        Title="Driving Digital Transformation Explore the Depth of Our IT Projects"
        highlightNane="Portfolio"
        subTitle="Our"
      />
      <section className="md:mt-top mt-60 px-mobile md:px-spacing [&_p]:!text-lg">
        <div className="aspect-video md:h-[634px] w-full rounded-2xl overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            width={600}
            height={600}
            alt=""
            src={"/assets/images/img/portfolioImage.png"}
          />
        </div>

        <div className="space-y-6 mt-6">
          <div className="space-y-3">
            <h2 className="text-h6 md:text-h5">Network Infrastructure and Design</h2>
            <p>
              The "Cloud Migration and Integration Project" represents a pivotal
              step for our client's digital transformation journey. By
              transitioning from traditional on-premises infrastructure to
              cloud-based solutions, we are unlocking a world of possibilities,
              from scalability and flexibility to enhanced security and cost
              efficiency. Our meticulous planning and execution ensure a smooth
              migration process, with minimal disruption to business operations.
              From assessing the current environment to preparing the
              infrastructure, migrating data and applications.
            </p>

            <p>
              providing comprehensive training and support, we leave no stone
              unturned in ensuring the success of this project. With our
              expertise and dedication, we empower our client to embrace the
              full potential of cloud computing, driving innovation.
            </p>
          </div>
          <hr />
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
            <p>
              <strong>Services:</strong>  Cloud Migration
            </p>
            <p>
              <strong>Client:</strong>  Techco
            </p>
            <p>
              <strong>Location:</strong>  New York,NY,USA
            </p>
            <p>
              <strong>Completed Date:</strong> 20-12-2024
            </p>
          </div>
          <div>
            <h2 className="text-h5">Project Requirement</h2>
            <p>
              In this phase of the Cloud Migration and Integration project, our
              focus is on executing robust data migration strategies to ensure
              the seamless transfer of data from on-premises servers to cloud
              storage solutions. Leveraging advanced techniques and tools,
            </p>
            <div className="mt-6 flex flex-wrap gap-10">
              <p className="text-paragraph_b">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Comprehensive Assessment Phase</span>
              </p>
              <p className="text-paragraph_b">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Comprehensive Assessment Phase</span>
              </p>
              <p className="text-paragraph_b">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Comprehensive Assessment Phase</span>
              </p>
              <p className="text-paragraph_b">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Comprehensive Assessment Phase</span>
              </p>
              <p className="text-paragraph_b">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Comprehensive Assessment Phase</span>
              </p>
              <p className="text-paragraph_b">
                <IoMdArrowDropright size={20} className="inline text-primary" />{" "}
                <span>Comprehensive Assessment Phase</span>
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-h5">Solution & Result</h2>
            <p>
              The successful execution of robust data migration strategies
              ensures the seamless transfer of data from on-premises servers to
              cloud storage solutions. Data integrity, security, and regulatory
              compliance are prioritized throughout the migration process.
              Rigorous testing and validation verify the accuracy and
              completeness of data migration, minimizing downtime and data loss
              risks.
            </p>
            <p>
              To achieve successful data migration, our solution includes a
              comprehensive approach that encompasses meticulous planning,
              advanced techniques, and thorough testing. We leverage
              industry-leading tools and expertise.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-h5">Solution & Result</h2>
            <p>
              The successful execution of robust data migration strategies
              ensures the seamless transfer of data from on-premises servers to
              cloud storage solutions. Data integrity, security, and regulatory
              compliance are prioritized throughout the migration process.
              Rigorous testing and validation verify the accuracy and
              completeness of data migration, minimizing downtime and data loss
              risks.
            </p>
            <p>
              To achieve successful data migration, our solution includes a
              comprehensive approach that encompasses meticulous planning,
              advanced techniques, and thorough testing. We leverage
              industry-leading tools and expertise.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-h5">Our Similar Projects</h2>
            <div className="flex flex-wrap gap-3">
                <CardPortfolio/>
                <CardPortfolio/>
                <CardPortfolio/>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
