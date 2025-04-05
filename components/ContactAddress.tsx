import contact1 from "@/public/images/contact1.png";
import { FiMail, FiHome, FiPhone } from "react-icons/fi";

const ContactAddress = () => {
  return (
    <div className="relative flex mb-14 items-center justify-center min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${contact1.src})` }}
      ></div>

      {/* White Overlay Section */}
      <div className="relative w-full max-w-lg lg:left-52  min-h-screen  items-center justify-center text-center mx-auto flex flex-col md:flex-row bg-white/90 ">
        {/* Right side (Contact Info) */}
        <div className="w-full  p-10 flex flex-col items-center text-center">
          {/* Email */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-6"
          >
            <FiMail className="text-3xl text-[#bba085] mx-auto mb-2" />
            <h2 className="text-lg font-semibold tracking-widest">EMAIL</h2>
            <p className="text-gray-700 text-[28px]">hello@tessamorgan.xyz</p>
          </div>

          {/* Address */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-6"
          >
            <FiHome className="text-3xl text-[#bba085] mx-auto mb-2" />
            <h2 className="text-lg font-semibold tracking-widest">ADDRESS</h2>
            <p className="text-gray-700 text-[28px]">
              54 Reese Avenue, Fresno CA 93722
            </p>
          </div>

          {/* Phone */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mb-6"
          >
            <FiPhone className="text-3xl text-[#bba085] mx-auto mb-2" />
            <h2 className="text-lg font-semibold tracking-widest">MOBILE</h2>
            <p className="text-gray-700 text-[28px]">+1 901 247 5467</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactAddress;
