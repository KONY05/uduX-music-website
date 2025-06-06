import TryItNowBtn from "../../ui/TryItNowBtn";

function HeroSection() {
  return (
    <section className="pb-11 lg: md:flex md:pt-5 lg:justify-between xl:pt-11">
      <div className="px-4 lg:w-xl lg:px-[60px] xl:w-2xl">
        <h2 className="mb-2.5 pt-24 text-[27px]/[38px] font-bold tracking-normal lg:pt-28 lg:text-[54px]/[76px] xl:text-[65px]">
          DEVELOP YOUR
          <span className="text-[#E1F16B]"> FANBASE </span>
          AND CAREER
        </h2>

        <p className="mb-1.5 text-[14px] font-normal">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are{" "}
        </p>

        <TryItNowBtn color="text-[#E1F16B]"/>
      </div>

      <div className="">
        <img src="phoneImg.png" alt="uduX app" />
      </div>
    </section>
  );
}

export default HeroSection;
