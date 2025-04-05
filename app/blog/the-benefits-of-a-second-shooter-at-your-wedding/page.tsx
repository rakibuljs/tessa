"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/images/banner.png";

import det6 from "@/public/images/det6.png";
import details1 from "@/public/images/details1.png";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import { useEffect } from "react";
import Aos from "aos";
const Blog4 = () => {
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
          The Benefits of a Second Shooter at Your Wedding.
        </h1>
      </div>
      {/* date  */}
      <div className="flex max-w-xl mx-auto pb-1 justify-between">
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Date{" "}
          <span className="great-vibes-regular text-[#bba085] ">
            Nov 22, 2023
          </span>{" "}
        </h1>
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Category:{" "}
          <span className="great-vibes-regular text-[#bba085] ">
            Photography
          </span>{" "}
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" justify-center flex"
      >
        <Image src={det6} alt="" />
      </div>

      {/* description */}
      <div className="text-[28px] max-w-3xl justify-center mx-auto space-y-6 py-10 ">
        <p>
          Planning your wedding day involves many decisions, and one crucial
          aspect is choosing the right photographer. While many couples focus on
          finding a skilled primary photographer, the value of a second shooter
          is often overlooked. This article explores the significant benefits of
          having a second shooter at your wedding, ensuring you understand how
          this additional photographer can enhance your special day.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Comprehensive Coverage:</span>A second
          shooter provides comprehensive coverage of your wedding, capturing
          moments that a single photographer might miss. While the primary
          photographer focuses on the main events, the second shooter can
          capture candid moments, reactions, and details from different angles.
          This ensures that no precious moment goes undocumented.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Different Perspectives:</span> Having
          two photographers allows for diverse perspectives on your wedding day.
          While one photographer captures the traditional, posed shots, the
          second shooter can focus on candid, behind-the-scenes moments. This
          variety adds depth and richness to your wedding album, giving you a
          fuller, more dynamic representation of your day.
        </p>

        <p className="text-[28px]">
          <span className="font-semibold">Backup and Security:</span> Having a
          second shooter acts as a backup in case of any unforeseen issues, such
          as equipment failure or an unexpected illness. This added security
          gives you peace of mind, knowing that your wedding day memories are in
          safe hands and will be captured no matter what.
        </p>

        <Image src={details1} alt="" />

        <p className="text-[28px]">
          <span className="font-semibold">Capturing Guest Reactions:</span>While
          the main photographer is focused on the couple, the second shooter can
          capture the reactions of your guests. These candid shots of laughter,
          tears, and joyful expressions add an emotional layer to your wedding
          album, allowing you to see how much your special day meant to your
          loved ones.
        </p>

        <p className="text-[28px]">
          Incorporating a second shooter into your wedding photography team
          offers numerous benefits, from comprehensive coverage and creative
          opportunities to enhanced efficiency and peace of mind. By choosing to
          have a second shooter, you ensure that every moment, detail, and
          emotion of your special day is beautifully captured, providing you
          with a rich and complete wedding album to cherish for years to come.
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
export default Blog4;
