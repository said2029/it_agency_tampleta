import Top_Banner from "@/Components/Top_Banner";
import { Button } from "@/Components/UI/Button";
import React from "react";
import CardPortfolio from "./_components/CardPortfolio";

export default function Page() {
  return (
    <div className="bg-[#74a5ff2d] pb-16">
      <Top_Banner
        title="Our Portfolio"
        highlightName="Portfolio"
        subTitle="Our"
      />
      <section className="mt-top flex flex-col items-center justify-center px-spacing_2">
        <div className="w-fit space-x-4 rounded-xl bg-white p-3">
          <Button size={"lg"}>SEE ALL</Button>
          <Button variant={"outline"} size={"lg"}>
            Technology
          </Button>
          <Button variant={"outline"} size={"lg"}>
            Analysis
          </Button>
          <Button variant={"outline"} size={"lg"}>
            Helpdesk
          </Button>
        </div>
        <div className="mt-60 grid grid-cols-1 md:grid-cols-2 gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <CardPortfolio key={i + "portfolio"} />
          ))}
        </div>
      </section>
    </div>
  );
}
