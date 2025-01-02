import Home_1 from "@/Components/pages/home_1";
import Home_2 from "@/Components/pages/Home_2";
import { Settings } from "@/data/data";
import React from "react";

export default function page() {
  return <>{Settings.homePage == 1 ? <Home_1 /> : <Home_2 />}</>;
}
