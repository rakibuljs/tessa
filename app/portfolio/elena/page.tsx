"use client";
import hero from "@/public/images/banner.png";

import portfolio17 from "@/public/images/portfolio17.png";
import portfolio18 from "@/public/images/portfolio18.png";
import portfolio19 from "@/public/images/portfolio19.png";
import portfolio20 from "@/public/images/portfolio20.png";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import Aos from "aos";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Change to available weight (400)
  style: ["normal"],
  display: "swap",
});
const Elena = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto bg-white pb-20 px-4">
      <div
        className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
      <div className="text-center max-w-xl justify-center mx-auto py-16 ">
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">
          PORTFOLIO
        </h1>
        <h1 className=" text-2xl md:text-[58px]">Elena</h1>
      </div>
      {/* date  */}
      <div className="flex max-w-xl mx-auto pb-1 justify-between">
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Date{" "}
          <span className={`${greatVibes.className} text-[#bba085]`}>
            Mar 8, 2023
          </span>{" "}
        </h1>
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Category:{" "}
          <span className="great-vibes-regular text-[#bba085] ">Portrait</span>{" "}
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" justify-center flex"
      >
        <Image src={portfolio17} alt="" />
      </div>

      {/* description */}
      <div className="text-[28px] max-w-3xl justify-center mx-auto space-y-6 py-10 ">
        <p>
          The natural light and vibrant scenery brought out the best in each
          shot, highlighting the client's personality and style. Their ease and
          enthusiasm made the session enjoyable, resulting in a collection of
          stunning and authentic photos.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mx-auto gap-3 max-w-screen-6xl">
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <Image src={portfolio18} alt="" className="" />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <Image src={portfolio19} alt="" className="" />
        </div>
      </div>

      <div className="lg:px-20 pt-3 pb-10">
        <Image src={portfolio20} alt="" />
      </div>
      <div className="border-b-1 border-gray-300"></div>

      <div className="flex max-w-3xl mx-auto pb-1 justify-between  ">
        <Link
          href={"/portfolio"}
          className=" text-xl  md:text-[24px] text-start  uppercase flex items-center gap-1"
        >
          {" "}
          <IoIosArrowRoundBack size={30} /> Back{" "}
        </Link>
        <Link
          href={"/service"}
          className=" text-xl  md:text-[24px] text-start uppercase  flex items-center gap-1 "
        >
          {" "}
          Services <IoIosArrowRoundForward size={30} />{" "}
        </Link>
      </div>
    </div>
  );
};
export default Elena;
