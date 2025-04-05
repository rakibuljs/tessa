import Marquee from "react-fast-marquee";
import me6 from "@/public/images/me6.png";
import me7 from "@/public/images/me7.png";
import Image from "next/image";
const AboutSlider = () => {
  return (
    <div className="container mx-auto bg-[#F1ECE6] py-10">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <Image src={me6} alt="Slide 1" className="w-full h-auto" />
        <Image src={me7} alt="Slide 2" className="w-full h-auto" />
      </Marquee>
    </div>
  );
};
export default AboutSlider;
