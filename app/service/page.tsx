"use client";
import hero from "@/public/images/banner.png";
import card1 from "@/public/images/card1.png";
import ser1 from "@/public/images/ser1.png";
import ser2 from "@/public/images/ser2.png";
import ser3 from "@/public/images/ser3.png";
import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";
import Image from "next/image";
import ServiceProcess from "@/components/ServiceProcess";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Change to available weight (400)
  style: ["normal"],
  display: "swap",
});

const ServicePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto">
      <div
        className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
      <div className="text-center py-16 ">
        <h1 className="text-[24px] tracking-[10px] text-[#bba085] ">
          SERVICES
        </h1>
        <h1 className=" md:text-[48px]">Photography Packages</h1>
      </div>

      {/* service card */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid lg:grid-cols-3 gap-8 pt-10 pb-10"
      >
        <Link href={""}>
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={card1}
              alt=""
              className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <h1 className={`text-[34px] pt-2 ${greatVibes.className}`}>
              Wedding
            </h1>
            <h1 className="text-[28px] text-start ">Online Gallery </h1>
            <h1 className="text-[28px] text-start ">
              Professionally Edited Photos
            </h1>
            <h1 className="text-[28px] text-start ">Videographer Option </h1>

            <p className="text-start text-[24px] italic text-[#1f1f1f] ">
              Capture your special day with my signature wedding package. Enjoy
              full-day coverage, professionally edited photos, and a beautiful
              online gallery to share with loved ones.
            </p>
            <h3 className="text-[24px] pt-2  ">Per Session</h3>
            <h1 className="text-[48px]  ">$2999</h1>
          </div>
        </Link>

        <Link href={""}>
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={ser1}
              alt=""
              className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <h1 className={`text-[34px] pt-2 ${greatVibes.className}`}>
              Portrait
            </h1>

            <h1 className="text-[28px] text-start ">
              In Studio or On Location
            </h1>
            <h1 className="text-[28px] text-start ">
              Guidance on Posing & Dress
            </h1>
            <h1 className="text-[28px] text-start ">
              Digital & Print Delivery
            </h1>

            <p className="text-start text-[24px] italic text-[#1f1f1f] ">
              Enjoy a personalized portrait session with my own guidance that
              will highlight your unique personality, with expertly edited
              photos delivered in high resolution.
            </p>
            <h3 className="text-[24px] pt-2  ">Per Session</h3>
            <h1 className="text-[48px]  ">$399</h1>
          </div>
        </Link>

        <Link href={""}>
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={ser2}
              alt=""
              className="w-full  group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <h1 className={`text-[34px] pt-2 ${greatVibes.className}`}>
              Engagement
            </h1>
            <h1 className="text-[28px] text-start ">
              Professionally Edited Photos
            </h1>
            <h1 className="text-[28px] text-start ">Online Gallery </h1>
            <h1 className="text-[28px] text-start ">Videographer Option </h1>

            <p className="text-start text-[24px] italic text-[#1f1f1f] ">
              Celebrate your love with a romantic engagement session at your
              favorite location, complete with professionally edited,
              high-resolution images to cherish forever.
            </p>
            <h3 className="text-[24px] pt-2">Per Session</h3>
            <h1 className="text-[48px]">$1999</h1>
          </div>
        </Link>
      </div>
      <Link href={"/contact"}>
        <button className="justify-center cursor-pointer text-center mx-auto items-center mb-12 flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">
          Book Now
        </button>
      </Link>

      {/* bg image */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" container z-10 mx-auto relative w-full h-96 bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${ser3.src})` }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="relative z-10 text-center text-black max-w-[640px] px-4"
        >
          <h1 className="text-4xl md:text-[40px] font-normal">
            &quot;Turning your love story into beautiful, lasting memories one
            click at a time.&quot;
          </h1>
        </div>
      </div>
      {/*  */}
      <ServiceProcess />
    </div>
  );
};
export default ServicePage;
