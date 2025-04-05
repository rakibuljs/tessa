"use client";
import Image from "next/image";
import Link from "next/link";
import hero from "@/public/images/banner.png";
import details from "@/public/images/details.png";

import deta from "@/public/images/deta.png";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import { useEffect } from "react";
import Aos from "aos";
const Blog3 = () => {
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
          Choosing the Perfect Dress for your Wedding.
        </h1>
      </div>
      {/* date  */}
      <div className="flex max-w-xl mx-auto pb-1 justify-between">
        <h1 className=" text-xl  md:text-[28px] text-start ">
          Date{" "}
          <span className="great-vibes-regular text-[#bba085] ">
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
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" justify-center flex"
      >
        <Image src={deta} alt="" />
      </div>

      {/* description */}
      <div className="text-[28px] max-w-3xl justify-center mx-auto space-y-6 py-10 ">
        <p>
          Your wedding dress is one of the most important aspects of your big
          day. It’s a reflection of your style, personality, and the theme of
          your wedding. With so many options available, choosing the perfect
          wedding dress can be overwhelming. Here are some tips to help you find
          the dress of your dreams.
        </p>

        <p>
          First, consider the venue and season of your wedding. A beach wedding
          might call for a light, flowing dress, while a winter ceremony could
          be complemented by a gown with long sleeves and heavier fabrics. Next,
          set a budget before you start shopping to avoid falling in love with a
          dress that's out of reach.
        </p>

        <p>
          It’s important to start shopping early, as it can take months for a
          dress to be ordered and altered. Bring supportive friends or family
          members whose opinions you trust, but avoid bringing too many people,
          as too many opinions can be confusing.
        </p>
        <Image src={details} alt="" />

        <p>
          Try on different styles to see what flatters your body type best.
          Don’t be afraid to step out of your comfort zone; you might be
          surprised by what looks good on you. Pay attention to how you feel in
          the dress—comfort is key on your big day.
        </p>

        <p>
          Finally, trust your instincts. When you find a dress that makes you
          feel beautiful and confident, you’ll know it’s the one. Enjoy the
          process, and happy dress shopping!
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
export default Blog3;
