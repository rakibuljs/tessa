"use client";
import hero from "@/public/images/banner.png";
import det2 from "@/public/images/det2.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Change to available weight (400)
  style: ["normal"],
  display: "swap",
});

const BlogOne = () => {
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
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">BLOG</h1>
        <h1 className=" text-2xl md:text-[58px]">{}</h1>
      </div>
      {/* date  */}
      <div className="flex max-w-xl mx-auto pb-1 justify-between">
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Date{" "}
          <span className={`${greatVibes.className} text-[#bba085]`}>
            Nov 8, 2023
          </span>{" "}
        </h1>
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Category:{" "}
          <span className={`${greatVibes.className} text-[#bba085] `}>
            Weddings
          </span>{" "}
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" justify-center flex"
      >
        <Image src={det2} alt="" />
      </div>

      {/* description */}
      <div className="text-[28px] max-w-3xl justify-center mx-auto space-y-6 py-10 ">
        <p>
          Choosing the perfect accessories can elevate your wedding look, adding
          a personal touch and enhancing your overall style. Here’s how to
          select the right accessories, from veils to shoes, for your big day.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Veils:</span> The veil is a timeless
          accessory that can range from simple and elegant to elaborate and
          statement-making. Consider the length and style that complements your
          dress. A cathedral veil adds drama, while a birdcage veil offers
          vintage charm. Ensure the veil’s details, such as lace or beading,
          match your gown’s embellishments.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Jewelry:</span> Select jewelry that
          complements your dress without overpowering it. For a gown with
          intricate detailing, opt for subtle pieces like stud earrings or a
          delicate bracelet. If your dress is simple, you can go bolder with
          statement earrings or a sparkling necklace. Balance is key—avoid
          wearing all statement pieces at once.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Shoes:</span> Comfort and style should
          both be priorities when choosing your wedding shoes. Consider the
          venue and terrain; stilettos might be impractical for a beach wedding.
          Embellished flats or block heels are great alternatives. Break in your
          shoes before the big day to avoid discomfort.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Hair Accessories:</span> From tiaras
          to floral crowns, hair accessories can highlight your hairstyle and
          theme. Choose pieces that complement your veil and jewelry, and
          coordinate with your overall look.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Belts and Sashes:</span> A belt or
          sash can define your waist and add a touch of sparkle or color to your
          gown. Choose one that enhances your dress without clashing with its
          design.
        </p>

        <p className="">
          By thoughtfully selecting your wedding accessories, you can create a
          cohesive and stunning look that reflects your personal style and
          enhances your wedding day ensemble.
        </p>
        <div className="border-b-1 border-gray-300"></div>
      </div>
      <div className="flex max-w-3xl mx-auto pb-1 justify-between  ">
        <Link
          href={"/blog"}
          className=" text-xl  md:text-[24px] text-start  uppercase flex items-center gap-1"
        >
          {" "}
          <IoIosArrowRoundBack size={30} /> Back{" "}
        </Link>
        <Link
          href={"/portfolio"}
          className=" text-xl  md:text-[24px] text-start uppercase  flex items-center gap-1 "
        >
          {" "}
          Gallery <IoIosArrowRoundForward size={30} />{" "}
        </Link>
      </div>
    </div>
  );
};
export default BlogOne;
