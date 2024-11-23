import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Button({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <button
      className={
        "text-nowraps items-center gap-3 rounded-[51px] bg-primary_gradinet px-6 py-4 text-paragraph_b text-white flex " +
        className
      }
    >
      {name}
      <FaArrowRight />
    </button>
  );
}
