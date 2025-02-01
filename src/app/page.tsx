import Home_1 from "@/layouts/home_1";
import Home_2 from "@/layouts/Home_2";
import { Settings } from "@/data/data";
import React from "react";
import { SearchParams } from "next/dist/server/request/search-params";

export default function page({ searchParams }: { searchParams: SearchParams }) {
  const SearchParams = searchParams;
  const page = SearchParams?.page ? +SearchParams?.page : 1;
  return <>{Settings.homePage == 1 && page == 1 ? <Home_1 /> : <Home_2 />}</>;
}
