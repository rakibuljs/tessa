"use client";
import hero from "@/public/images/banner.png";

import det3 from "@/public/images/det3.png";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import { useEffect } from "react";
import Aos from "aos";
import Link from "next/link";
import Image from "next/image";
const Blog2 = () => {
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
        <h1 className=" text-2xl md:text-[58px]">
          Tips for Planning Weddings in Different Seasons.
        </h1>
      </div>
      {/* date  */}
      <div className="flex max-w-xl mx-auto pb-1 justify-between">
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Date{" "}
          <span className="great-vibes-regular text-[#bba085] ">
            Nov 8, 2023
          </span>{" "}
        </h1>
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Category:{" "}
          <span className="great-vibes-regular text-[#bba085] ">Weddings</span>{" "}
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" justify-center flex"
      >
        <Image src={det3} alt="" />
      </div>

      {/* description */}
      <div className="text-[28px] max-w-3xl justify-center mx-auto space-y-6 py-10 ">
        <p>
          Planning a wedding involves many details, and the season in which you
          choose to get married can greatly influence the overall experience.
          Each season offers unique opportunities and challenges, particularly
          concerning lighting, weather, and current trends. Here’s how to make
          the most of each season for your special day.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Spring Weddings:</span>Spring is a
          popular wedding season thanks to its mild weather and blooming
          flowers. When planning a spring wedding, consider incorporating the
          natural beauty of the season with pastel color palettes and floral
          decorations. However, be mindful of unpredictable rain. Have a backup
          plan for outdoor ceremonies, like a tent or an indoor venue option.
          For lighting, take advantage of the soft, natural light that spring
          provides, perfect for capturing dreamy photographs.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Summer Weddings:</span> Summer
          weddings are known for their vibrant atmosphere and extended daylight
          hours. This season is ideal for outdoor ceremonies and receptions. To
          combat the heat, schedule your ceremony for the late afternoon or
          early evening. Offer guests cooling stations with fans and refreshing
          drinks. Utilize the golden hour for stunning, sun-kissed photos.
          Bright, bold colors and tropical flowers are popular summer trends.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Fall Weddings:</span> Fall’s rich
          colors and cooler temperatures make it a favorite for many couples.
          Embrace the season by incorporating autumnal hues like deep reds,
          oranges, and golds into your decor. Consider the shorter daylight
          hours and plan your ceremony earlier in the day to capture the best
          light for photos. Rustic venues, like barns or vineyards, complement
          the fall aesthetic beautifully. Be prepared for chilly evenings by
          providing blankets or heaters for your guests.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Winter Weddings:</span>Winter weddings
          offer a magical, cozy ambiance with the potential for festive decor.
          Opt for indoor venues to avoid weather-related issues, and ensure the
          venue is well-heated. Incorporate warm lighting, such as candles and
          fairy lights, to create a romantic atmosphere. Rich fabrics like
          velvet and lush greenery can add elegance to your winter wedding. Be
          mindful of early sunsets and plan your photo sessions accordingly to
          make the most of natural light.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">General Tips:</span> Regardless of the
          season, always have a contingency plan for weather-related challenges.
          Communicate with your photographer about the best times for natural
          lighting and be flexible with your schedule to capture the perfect
          moments. Stay updated on current seasonal trends to ensure your
          wedding feels fresh and relevant.
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
export default Blog2;
