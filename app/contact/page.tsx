"use client";
import contact from "@/public/images/contact.png";
import hero from "@/public/images/banner.png";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import ContactAddress from "@/components/ContactAddress";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Change to available weight (400)
  style: ["normal"],
  display: "swap",
});

const ContactPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="container bg-white mx-auto">
      <div
        className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      ></div>
      <div className="text-center py-16 ">
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">
          Contact
        </h1>
        <h1 className=" md:text-[48px]">Get in Touch</h1>
      </div>
      <div className="bg-[#F4F5F4] py-16 px-5 container mx-auto">
        {/* Heading Section */}
        <div className="text-center pb-5">
          <h1 className="text-[24px] tracking-[10px] text-[#bba085]">
            CONTACT
          </h1>
          <h1 className="text-[48px]">Enquire Now</h1>
        </div>

        {/* Contact Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Right Side - Image (Reversed on Mobile & Tablet) */}
          <div className="order-1 md:order-2">
            <Image
              src={contact}
              alt="Wedding Photography"
              className="w-full h-[536px] object-cover"
            />
          </div>

          {/* Left Side - Contact Form (Reversed on Mobile & Tablet) */}
          <div className="order-2 md:order-1">
            <form className="space-y-9">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 text-2xl py-7 bg-white text-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 text-2xl py-7 bg-white text-black focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 text-2xl py-14 bg-white text-black focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#e0cdb7] text-black text-lg font-medium hover:bg-[#d4bca4] transition"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" container z-10 mx-auto relative w-full h-96 bg-[#FBFAFB] flex items-center justify-center"
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="relative z-10 text-center text-black max-w-[640px] px-4"
        >
          <h1
            className={`${greatVibes.className} text-[34px] text-[#bba085] pt-2 great-vibes-regular`}
          >
            Enquire Now
          </h1>

          <h1 className="text-4xl md:text-[40px] font-normal">
            "You will never know the value of a moment until it becomes a
            memory."
          </h1>
        </div>
      </div>

      {/* address section */}
      <ContactAddress />
    </div>
  );
};
export default ContactPage;
