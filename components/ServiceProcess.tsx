import ser5 from "@/public/images/ser5.png";
import ser6 from "@/public/images/ser6.png";
import ser7 from "@/public/images/ser7.png";
import ser8 from "@/public/images/ser8.png";
import Image from "next/image";
import FAQSection from "./FAQSection";
import ServiceAnotherSection from "./ServiceAnotherSection";
const ServiceProcess = () => {
  return (
    <div className="container mx-auto bg-[#FBFAFB] ">
      <div className="text-center py-16 ">
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">
          SERVICES
        </h1>
        <h1 className=" md:text-[48px]">What to Expect</h1>
      </div>
      {/* one */}
      <div className="flex flex-col md:flex-row  space-y-3 gap-4 md:space-x-5">
        {/* Image Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/2"
        >
          <Image
            src={ser8} // Replace with your image path
            alt="About"
            className="w-full h-[407px]  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  cormorant-sc-light ">
            01
          </h2>
          <hr className="w-36 my-2 hidden sm:block border-brown-500 text-[#bba085]" />
          <h2 className="text-3xl md:text-[28px] uppercase">
            INITIAL CONSULTATION
          </h2>

          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            &ldquo;We&rsquo;ll discuss your vision, style preferences, and key
            moments. This meeting helps build a relationship, allowing me to
            capture your love story authentically.&rdquo;
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col md:flex-row space-y-3  gap-4 md:space-x-5"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={ser5} // Replace with your image path
            alt="About"
            className="w-full h-[407px]  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  cormorant-sc-light ">
            02
          </h2>
          <hr className="w-36 my-2 hidden sm:block  border-brown-500 text-[#bba085] " />
          <h2 className="text-3xl md:text-[28px]   uppercase ">
            PLANNING & PREPARATIONS
          </h2>

          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            Create a detailed photography timeline and finalize locations and
            special requests. This thorough planning ensures a smooth and
            beautifully captured wedding day.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col md:flex-row space-y-3   gap-4 md:space-x-5"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={ser6} // Replace with your image path
            alt="About"
            className="w-full h-[407px]  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  cormorant-sc-light ">
            03
          </h2>
          <hr className="w-36 my-2 hidden sm:block  border-brown-500 text-[#bba085] " />
          <h2 className="text-3xl md:text-[28px]   uppercase ">EVENT DAY</h2>

          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            On your wedding day, I&rsquo;ll unobtrusively capture every special
            moment, from candid emotions to posed portraits. My goal is to
            document your love story as it naturally unfolds.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col md:flex-row pb-10   gap-4 md:space-x-5"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={ser7} // Replace with your image path
            alt="About"
            className="w-full h-[407px]  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  cormorant-sc-light ">
            04
          </h2>
          <hr className="w-36 my-2 hidden sm:block  border-brown-500 text-[#bba085] " />
          <h2 className="text-3xl md:text-[28px]   uppercase ">
            POST-PRODUCTION DELIVERY
          </h2>

          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            I will meticulously edit and enhance your photos so that
            you&rsquo;ll receive a curated collection of high-quality images to
            cherish forever.
          </p>
        </div>
      </div>
      <FAQSection />
      <ServiceAnotherSection />
    </div>
  );
};
export default ServiceProcess;
