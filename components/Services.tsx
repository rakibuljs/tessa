import Image from "next/image"; // Import next/image for image optimization
import Link from "next/link"; // Import Next.js Link component
import { Great_Vibes } from "next/font/google";
import { servicesCard } from "@/utils/data";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // Change to available weight (400)
  style: ["normal"],
  display: "swap",
});

export default function Service() {
  return (
    <div className="pt-20 bg-white container mx-auto pb-20">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-center "
      >
        <h1 className=" text-[24px] tracking-[10px] text-[#bba085] ">
          SERVICES
        </h1>
        <h1 className=" md:text-[48px]">Photography Packages</h1>
      </div>

      {/* image card */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="grid lg:grid-cols-3 gap-8 pt-10 pb-10"
      >
        {servicesCard.map((service) => (
          <Link href={"/service"} key={service.id}>
            <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
              <Image
                src={service.image}
                alt=""
                className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
              />
              <h1 className={`text-[34px] pt-2 ${greatVibes.className}`}>
                {service.title}
              </h1>
              <Image
                src={service.flowers}
                alt=""
                className="mx-auto group-hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              />
              <button className="text-[24px] pb-2 group-hover:text-[#bba085]">
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>

      <Link href={"/service"}>
        <button className="justify-center  cursor-pointer text-center mx-auto items-center flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">
          View Details
        </button>
      </Link>
    </div>
  );
}
