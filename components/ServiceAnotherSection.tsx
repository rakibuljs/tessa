import ser9 from "@/public/images/ser9.png";
import ser10 from "@/public/images/ser10.png";
import Image from "next/image";
import Link from "next/link";

const ServiceAnotherSection = () => {
  return (
    <div className="container mx-auto bg-[#FBFAFB] py-10 ">
      <div className="flex flex-col md:flex-row space-y-3   gap-4 md:space-x-5">
        {/* Image Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full lg:w-1/2 hidden lg:block"
        >
          <Image
            src={ser9} // Replace with your image path
            alt="About"
            className="w-full max-h-[780px]  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-full lg:w-1/2 pt-10 text-center md:text-start md:px-10"
        >
          <h1 className="text-[34px] pt-2 great-vibes-regular">
            Quality Guaranteed
          </h1>

          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />
          <Link href={"/blog"}>
            <button className="flex cursor-pointer mx-auto lg:mx-0 justify-center  md:justify-start md:mx-0 md:text-start lg:justify-start text-center lg:text-start mb-12 mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">
              Visit My Blog
            </button>
          </Link>

          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="mt-4 text-xl md:text-[28px] px-2 leading-relaxed"
          >
            On your big day, you can count on me to turn fleeting moments into
            timeless treasures you will cherish for generations.
          </p>
          {/* Image Section */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-full h-full pt-10"
          >
            <Image
              src={ser10} // Replace with your image path
              alt="About"
              className="w-full h-auto  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceAnotherSection;
