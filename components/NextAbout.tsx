import me4 from "@/public/images/me4.png";
import me5 from "@/public/images/me5.png";
import Image from "next/image";
import Link from "next/link";
const NextAbout = () => {
  return (
    <section className="container mx-auto px-3 bg-white md:px-10 pb-40 flex flex-col md:flex-row items-center gap-10">
      {/* Left Text Section */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="w-full lg:w-1/2 text-center  md:text-left"
      >
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">
          Crafting Memories
        </h1>
        <h2 className="text-3xl   md:text-[44px]  mt-2">Your Story, My Lens</h2>
        <p className="mt-4  text-xl md:text-[24px] leading-relaxed">
          From the first glance to the final dance, my goal is to encapsulate
          the essence of your love story in every shot, ensuring that your
          wedding album is a beautiful reflection of your unique journey
          together. Let&rsquo;s work together to make your dream wedding an
          everlasting legacy.
        </p>
        <div className="mt-12">
          <Link
            href="service"
            className="mt-2 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-1/2  flex justify-center">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="relative w-2/3 hidden lg:block "
        >
          <Image
            src={me4}
            alt="Couple Wedding"
            className="w-full md:h-[450px] "
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" relative top-14 w-2/3 translate-x-14 translate-y-14 hidden lg:block"
        >
          <Image
            src={me5}
            alt="Wedding Stairs"
            className="w-full h-[450px]  "
          />
        </div>
      </div>
    </section>
  );
};
export default NextAbout;
