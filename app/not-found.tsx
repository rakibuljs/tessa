import hero from "@/public/images/banner.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto bg-white pb-20 px-4">
      <div
        className="w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>

      <div className="text-center max-w-xl justify-center mx-auto py-16 ">
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">SORRY</h1>
        <h1 className=" text-2xl md:text-[58px] text-[#bba085]">
          Page Not Found
        </h1>
        <p className="text-lg md:text-[24px] text-[#bba085] mt-4">
          We couldn't find the page you are looking for.
        </p>
      </div>

      <div className="flex max-w-3xl mx-auto pb-1 justify-between mt-10">
        <Link
          href={"/"}
          className="text-xl md:text-[24px] text-start uppercase flex items-center gap-1"
        >
          <IoIosArrowRoundBack size={30} /> Back to Home
        </Link>
      </div>

      <div className="flex justify-center py-10"></div>
    </div>
  );
};
export default NotFound;
