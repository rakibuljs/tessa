import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className="bg-[#EBEBEB] container py-7 justify-center mx-auto z-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Left Side Links */}
          <div className="hidden lg:flex space-x-24 text-[28px] font-normal">
            <Link href={"/"} className="text-[#555555] hover:text-[#bba085]">
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-[#555555] hover:text-[#bba085]"
            >
              About
            </Link>

            <Link
              href={"/service"}
              className="text-[#555555] hover:text-[#bba085]"
            >
              Services
            </Link>
          </div>

          {/* Logo in Center */}
          <Link
            href={"/"}
            className="justify-center   w-full items-center flex"
          >
            <Image src={logo} alt="logo" className="w-[140px] h-[50px]" />
          </Link>

          {/* Right Side Links */}
          <div className="hidden lg:flex space-x-24 text-[28px]">
            <Link
              href={"/portfolio"}
              className="text-[#555555] hover:text-[#bba085]"
            >
              Portfolio
            </Link>
            <Link
              href={"/blog"}
              className="text-[#555555] hover:text-[#bba085]"
            >
              Blog
            </Link>
            <Link
              href={"/contact"}
              className="text-[#555555] hover:text-[#bba085]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu (Vertical Alignment) */}
      <div className="lg:hidden flex flex-col space-y-4 items-center text-[28px]">
        <Link href={"/"} className="text-[#555555] hover:text-[#bba085]">
          Home
        </Link>
        <Link href={"/about"} className="text-[#555555] hover:text-[#bba085]">
          About
        </Link>

        <Link href={"/service"} className="text-[#555555] hover:text-[#bba085]">
          Services
        </Link>
        <Link
          href={"/portfolio"}
          className="text-[#555555] hover:text-[#bba085]"
        >
          Portfolio
        </Link>
        <Link href={"/blog"} className="text-[#555555] hover:text-[#bba085]">
          Blog
        </Link>
        <Link href={"/contact"} className="text-[#555555] hover:text-[#bba085]">
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default FooterNav;
