import Home_1 from "@/layouts/home_1";
import Home_2 from "@/layouts/Home_2";
import { Settings } from "@/data/data";
import React from "react";

export default async function page({
  searchParams,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: any;
}) {
  const SearchParams = await searchParams;
  const page = SearchParams?.page ? +SearchParams?.page : 1;
  return <>{Settings.homePage == 1 && page == 1 ? <Home_1 /> : <Home_2 />}</>;
}
