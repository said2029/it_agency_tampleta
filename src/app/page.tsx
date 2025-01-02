import Home_1 from "@/Components/pages/home_1";
import Home_2 from "@/Components/pages/Home_2";
import { Settings } from "@/data/data";
import { SearchParams } from "next/dist/server/request/search-params";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const SearchParams = await searchParams;
  const page = SearchParams.page ? +SearchParams.page : 1;
  return <>{Settings.homePage ==1 || page == 1 ? <Home_1 /> : <Home_2 />}</>;
}
