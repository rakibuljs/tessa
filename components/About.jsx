"use client";
import Link from "next/link";
const About = () => {
  return (
    <div className="pt-20 bg-[#FFFFFF] container mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center text-[24px] tracking-[10px] text-[#bba085]"
      >
        AWARD WINNING
      </h1>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="max-w-[600px] capitalize justify-center text-center mx-auto text-3xl px-5 md:text-[50px] font-normal mt-2 tracking-normal"
      >
        <h1>
          Experience the perfect blend of creativity and elegance in every
          frame.
        </h1>
      </div>

      {/* About Section */}
      <div className="bg-[#FBFAFB] mt-16 grid lg:grid-cols-2 gap-10">
        {/* Left Image */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <img
            src="/images/abou.png"
            alt="about"
            className="w-full lg:h-[770px]"
          />
        </div>

        {/* Right Content */}
        <div>
          <img
            src="/images/kot.png"
            alt="about image"
            className="justify-center mx-auto flex items-center pt-7 text-center"
          />
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="px-4"
          >
            <h1 className="text-[32px] md:text-[48px] text-center">
              Hello, My Name is Tessa
            </h1>
            <p className="text-2xl md:text-[29px]">
              I'm a passionate wedding photographer based in beautiful
              California. With over a decade of experience, I have dedicated my
              career to capturing the unique love stories of couples from all
              walks of life. My journey in photography began in college, where I
              fell in love with the art of storytelling through a lens. After
              earning my degree in Fine Arts, I honed my skills working with
              some of the top photographers in the industry.
            </p>
            <img
              src="/images/flowers.png"
              alt="flowers"
              className="justify-center mx-auto flex items-center pt-7 text-center"
            />
            <Link href="/about">
              <button className="justify-center cursor-pointer text-center mx-auto items-center flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
