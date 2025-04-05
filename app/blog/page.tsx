"use client";
import hero from "@/public/images/banner.png";
import blog1 from "@/public/images/blog1.png";
import blog2 from "@/public/images/blog2.png";
import blog3 from "@/public/images/blog3.png";
import blog4 from "@/public/images/blog4.png";

import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Change to available weight (400)
  style: ["normal"],
  display: "swap",
});
const BlogPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto bg-white px-10">
      <div
        className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
      <div className="text-center py-16 ">
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">Blog</h1>
        <h1 className=" md:text-[58px]">Latest Stories</h1>
      </div>

      {/* blog part */}
      <div className="grid lg:grid-cols-2 gap-8 pt-10 pb-10">
        <Link
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          href="/blog/accessorizing-your-wedding-look-from-veils-to-shoes"
        >
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center  items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={blog1}
              alt=""
              className="w-full  group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <div className="px-4 py-6">
              <h1 className="text-xl md:text-[40px] pt-2 text-start ">
                Accessorizing Your Wedding <br /> Look: From Veils to Shoes.{" "}
              </h1>
              {/* <h1 className="text-[28px] text-start ">Look: From Veils to Shoes. </h1> */}
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Date{" "}
                <span
                  className={`great-vibes-regular text-[#bba085] ${greatVibes}`}
                >
                  Nov 8, 2023
                </span>{" "}
              </h1>
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Category:{" "}
                <span className="great-vibes-regular text-[#bba085] ">
                  Weddings
                </span>{" "}
              </h1>
            </div>
            <h1 className="text-[28px] group-hover:text-[#bba085] ">
              Read More
            </h1>
          </div>
        </Link>

        <Link
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          href="/blog/the-benefits-of-a-second-shooter-at-your-wedding-copy"
        >
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center  items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={blog2}
              alt=""
              className="w-full  group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <div className="px-4 py-6">
              <h1 className="text-xl md:text-[40px] pt-2 text-start ">
                Tips for Planning Weddings in <br /> Different Seasons.
              </h1>
              {/* <h1 className="text-[28px] text-start ">Look: From Veils to Shoes. </h1> */}
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Date{" "}
                <span
                  className={`great-vibes-regular text-[#bba085] ${greatVibes}`}
                >
                  Nov 8, 2024
                </span>{" "}
              </h1>
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Category:{" "}
                <span className="great-vibes-regular text-[#bba085] ">
                  Weddings
                </span>{" "}
              </h1>
            </div>
            <h1 className="text-[28px] group-hover:text-[#bba085] ">
              Read More
            </h1>
          </div>
        </Link>

        <Link
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          href="/blog/choosing-the-perfect-wedding-dress-a-brides-guide"
        >
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center  items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={blog3}
              alt=""
              className="w-full  group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <div className="px-4 py-6">
              <h1 className="text-xl md:text-[40px] pt-2 text-start ">
                Choosing the Perfect Dress for your Wedding.
              </h1>
              {/* <h1 className="text-[28px] text-start ">Look: From Veils to Shoes. </h1> */}
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Date{" "}
                <span
                  className={`great-vibes-regular text-[#bba085] ${greatVibes}`}
                >
                  Dec 5, 2023
                </span>{" "}
              </h1>
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Category:{" "}
                <span className="great-vibes-regular text-[#bba085] ">
                  Client Guides
                </span>{" "}
              </h1>
            </div>
            <h1 className="text-[28px] group-hover:text-[#bba085] ">
              Read More
            </h1>
          </div>
        </Link>

        <Link
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          href="/blog/the-benefits-of-a-second-shooter-at-your-wedding"
        >
          <div className="bg-[#FBFAFB] hover:shadow-sm text-center  items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
            <Image
              src={blog4}
              alt=""
              className="w-full  group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
            />
            <div className="px-4 py-6">
              <h1 className="text-xl md:text-[40px] pt-2 text-start ">
                The Benefits of a Second Shooter at Your Wedding.
              </h1>
              {/* <h1 className="text-[28px] text-start ">Look: From Veils to Shoes. </h1> */}
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Date{" "}
                <span
                  className={`great-vibes-regular text-[#bba085] ${greatVibes}`}
                >
                  Nov 22, 2023
                </span>{" "}
              </h1>
              <h1 className=" text-xl  md:text-[28px] text-start ">
                Category:{" "}
                <span className={`text-[#bba085] ${greatVibes.className}`}>
                  Photography
                </span>{" "}
              </h1>
            </div>
            <h1 className="text-[28px] group-hover:text-[#bba085] ">
              Read More
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default BlogPage;
