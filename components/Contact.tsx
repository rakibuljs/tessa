import contact from "@/public/images/contact.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#f5f2ec] py-16 px-5 container mx-auto">
        {/* Heading Section */}
        <div className="text-center pb-5">
          <h1 className="text-[24px] tracking-[10px] text-[#bba085]">
            CONTACT
          </h1>
          <h1 className="text-[48px]">Enquire Now</h1>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Right Side - Image (Reversed on Mobile & Tablet) */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="order-1 md:order-2"
          >
            <Image
              src={contact}
              alt="Wedding Photography"
              className="w-full h-[536px] object-cover"
            />
          </div>

          {/* Left Side - Contact Form (Reversed on Mobile & Tablet) */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="order-2 md:order-1"
          >
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
    </div>
  );
};
export default Contact;
