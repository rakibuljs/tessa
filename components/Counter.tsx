const Counter = () => {
  return (
    <div className="container mx-auto bg-[#F1ECE6] py-12 ">
      <h1
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" text-3xl md:text-[48px] text-center"
      >
        Helping Couples Bring To Life Their <br /> Wedding Dreams
      </h1>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {/* Single Stat */}
        <div>
          <h2 className="text-5xl md:text-[120px] font-serif text-[#a98d75] cormorant-sc-light">
            12
          </h2>
          <p className="text-[34px] pt-2 great-vibes-regular">
            Years Experience
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-[120px] font-serif text-[#a98d75] cormorant-sc-light">
            10K
          </h2>
          <p className="text-[34px] pt-2 great-vibes-regular">
            Photos Delivered
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-[120px] font-serif text-[#a98d75] cormorant-sc-light">
            300
          </h2>

          <p className="text-[34px] pt-2 great-vibes-regular">
            Events Captured
          </p>
        </div>

        <div>
          <h2 className="text-5xl md:text-[120px] font-serif text-[#a98d75] cormorant-sc-light">
            6
          </h2>
          <p className="text-[34px] pt-2 great-vibes-regular">
            Awards Received
          </p>
        </div>
      </div>
    </div>
  );
};
export default Counter;
