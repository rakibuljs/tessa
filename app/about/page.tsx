"use client";
import about from "@/public/images/about.png";
import hero from "@/public/images/banner.png";
import abpage from "@/public/images/abpage.png";
import me from "@/public/images/me1.png";
import me2 from "@/public/images/me2.png";
import me3 from "@/public/images/me3.png";
import abFloer from "@/public/images/abFloer.png";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import AboutSlider from "@/components/AboutSlider";
import NextAbout from "@/components/NextAbout";
const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto bg-white">
      <div
        className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
      <div className="pt-20 bg-[#FFFFFF] container mx-auto ">
        <h1 className="text-center text-[24px] tracking-[10px] text-[#bba085] ">
          ABOUT
        </h1>
        <div className=" capitalize justify-center text-center mx-auto text-3xl px-5  md:text-[55px] font-normal mt-2 tracking-normal">
          <h1>my story</h1>
        </div>

        {/* about image  and content section */}
        <div className="bg-[#FBFAFB] mt-16  grid lg:grid-cols-2 gap-10 ">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-full flex justify-center"
          >
            <Image
              src={about}
              alt="About Us"
              className="w-full max-w-5xl h-auto object-cover"
            />
          </div>

          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="  px-4 pt-12"
            >
              <p className="text-2xl md:text-[29px] ">
                My journey into photography began in California where I grew up
                and received my first camera as a birthday gift during my
                teenage years. That moment sparked a lifelong passion that led
                me to study fine arts in college and eventually settle here.
              </p>
              <p className="text-2xl md:text-[29px] pt-4 ">
                My approach to wedding photography is all about capturing
                authentic, candid moments with an artistic touch. Making people
                feel comfortable in front of the camera is one of my strengths,
                and it's something my clients appreciate, often returning with
                glowing testimonials.
              </p>
              <p className="text-2xl md:text-[29px] pt-4 ">
                My work has been featured in various bridal magazines and blogs,
                which is always an honor. When I'm not working, I love exploring
                the Blue Ridge Mountains, attending local art festivals, and
                spending quality time with my rescue dog, Max.
              </p>

              <p className="text-2xl md:text-[29px] pt-4 ">
                Traveling across the country, I feel incredibly fortunate to
                turn precious moments into lasting memories for couples on their
                special day.
              </p>
              <Image
                src={abpage}
                alt="flowers image"
                className="justify-center mx-auto flex items-center pt-7 text-center"
              />
              <h1 className="text-[34px] text-center pt-2 great-vibes-regular">
                Tessa M
              </h1>
              <Link href={"/portfolio"}>
                <button className="justify-center text-center mx-auto items-center mb-12 flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">
                  My Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* slider  */}
      <AboutSlider />

      {/* next about us */}
      <h1
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-[68px] text-center py-12 great-vibes-regular pt-14"
      >
        A few more things
      </h1>
      {/* one */}
      <div className="flex flex-col md:flex-row space-y-3  gap-4 md:space-x-5">
        {/* Image Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-full md:w-1/2"
        >
          <Image
            src={me} // Replace with your image path
            alt="About"
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  uppercase ">
            One
          </h2>
          <hr className="w-36 my-2 hidden sm:block  border-brown-500 text-[#bba085] " />
          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            I am blessed with a loving partner and two adorable kids who fill
            our home with joy and laughter. Our family adventures and shared
            moments continuously remind me of the importance of capturing life’s
            fleeting yet precious moments.
          </p>
        </div>
      </div>
      {/* two */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col md:flex-row  space-y-3  gap-4 md:space-x-5 "
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={me2} // Replace with your image path
            alt="About"
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  uppercase ">
            Two
          </h2>
          <hr className="w-36 my-2 hidden sm:block  border-brown-500 text-[#bba085] " />
          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            Outside of photography, I find inspiration in the beauty of nature
            through hiking and camping adventures. These experiences fuel my
            creativity and bring a fresh perspective to my work, ensuring each
            wedding I photograph is uniquely beautiful.
          </p>
        </div>
      </div>

      {/* three */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col md:flex-row  space-y-3 pb-10  gap-4 md:space-x-5 "
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={me3} // Replace with your image path
            alt="About"
            className="w-full h-auto  object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-[48px] text-[#bba085]  uppercase ">
            Three
          </h2>
          <hr className="w-36 my-2 hidden sm:block  border-brown-500 text-[#bba085] " />
          <hr className="w-36 my-2 text-center  md:hidden sm:justify-center mx-auto border-brown-500 text-[#bba085] " />

          <p className="mt-4 text-xl md:text-[28px] leading-relaxed">
            My love for cooking and experimenting with new recipes keeps my
            creative juices flowing even when I’m off duty. This passion for
            creativity and exploration extends into my photography, where I
            strive to capture the essence of each couple’s big day.
          </p>
        </div>
      </div>

      {/* after section */}

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="bg-[#F1ECE6] text-center py-10 md:p-20  mb-10 container mx-auto"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Image src={abFloer} alt="" />
          </div>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-sm text-[41px] font-light"
          >
            "I guarantee stunning, high-quality wedding photos that will capture
            every special moment on your big day, or your money back."
          </p>
        </div>
      </div>
      <NextAbout />
    </div>
  );
};
export default AboutPage;
