"use client";
import hero from "@/public/images/banner.png";
import { useEffect } from "react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="container mx-auto bg-white pb-20 px-4">
      <div
        className="w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>

      <div className="text-center max-w-xl justify-center mx-auto py-16">
        <h1 className="text-[24px] tracking-[10px] text-[#bba085] uppercase">
          Oops!
        </h1>
        <h2 className="text-2xl md:text-[58px] text-[#bba085]">
          Something went wrong
        </h2>
        <p className="text-lg md:text-[24px] text-[#bba085] mt-4">
          We’re working on fixing it. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-6 bg-[#bba085] text-white px-6 py-2 rounded-full hover:bg-[#a08b6d] transition"
        >
          Try Again
        </button>
      </div>

      <div className="flex justify-center py-10"></div>

      <div className="flex max-w-3xl mx-auto pb-1 justify-center mt-10">
        <Link
          href="/"
          className="text-xl md:text-[24px] uppercase flex items-center gap-1"
        >
          <IoIosArrowRoundBack size={30} /> Go Home
        </Link>
      </div>
    </div>
  );
}
