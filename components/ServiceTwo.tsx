import wflower from "@/public/images/wflower.png";
import Image from "next/image";

const ServiceTwo = () => {
  return (
    <div className="relative mb-20 container mx-auto flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-50   ">
      {/* Left Image */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="relative  w-full  bg-left   h-[800px] md:bg-contain  bg-no-repeat "
        style={{
          backgroundImage: `url(/images/copul.png)`, // Correct the path here for Next.js
        }}
      >
        {/* <img src={wife} alt="Wedding Couple" className=" object-left " /> */}
      </div>

      {/* Right Content Box */}
      <div className="absolute md:relative w-[90%] sm:w-[80%] md:w-1/2 bg-white/90 p-8 h-[581px]  rounded-md md:-ml-[510px] md:p-20 text-center">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-col items-center"
        >
          {/* Icon or small decorative element */}
          <Image src={wflower} alt="" />

          {/* Title */}
          <h2 className="text-gray-800 text-2xl md:text-[34px] italic great-vibes-regular font-semibold mt-2">
            Creative, Passionate, Artistic.
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-center max-w-[310px] mt-4 text-[24px] md:text-[25px] lg:text-[28px] ">
            I will ensure your wedding day memories are preserved in stunning,
            timeless photographs that you will cherish for a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceTwo;
