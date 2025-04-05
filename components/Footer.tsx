import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footer from "@/public/images/footer.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#F1ECE6] text-center p-6 md:p-10 text-gray-700 mb-10 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          <Image src={footer} alt="" />
        </div>
        <p className="mt-2 text-sm text-[28px] font-light">
          is a <span className="italic">freelance wedding photographer</span>{" "}
          who specializes in event photography, weddings, and portraits for
          couples and individuals. Capturing love, one moment at a time. Your
          timeless memories, expertly preserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#"
            className="text-white p-1 bg-[#BAA084] rounded-sm text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white p-1 bg-[#BAA084] rounded-sm text-2xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-white p-1 bg-[#BAA084] rounded-sm text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white p-1 bg-[#BAA084] rounded-sm text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
        <p className="text-xs text-[23px] mt-4">
          Copyright. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
