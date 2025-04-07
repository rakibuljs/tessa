import Image from "next/image";
import port10 from "@/public/images/port10.png";
import Link from "next/link";

const PortfolioNextSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="grid lg:grid-cols-2 px-10 gap-10 py-16"
    >
      <div className="items-center  justify-center my-auto bg-[#FDFCFC] md:p-10">
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">
          YOU'RE PERFECT
        </h1>
        <h1 className="text-[34px] pt-2 great-vibes-regular">Stay Beautful</h1>
        <p className="text-[28px] ">
          Your wedding day deserves to be immortalized with stunning
          photography, and that's exactly what I offer. Choose me to ensure your
          wedding memories are preserved with artistic flair and heartfelt
          authenticity
        </p>
        <div className="mb-12 flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10 w-fit">
          <Link href="/contact">Enquire Now</Link>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <Image src={port10} alt="" className=" hidden lg:block h-[536px]" />
      </div>
    </div>
  );
};
export default PortfolioNextSection;
