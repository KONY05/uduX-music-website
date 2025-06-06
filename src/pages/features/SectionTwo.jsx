import TryItNowBtn from "../../ui/TryItNowBtn";

function SectionTwo() {
  return (
    <section className="relative -top-14 -mb-14 bg-white md:top-0 md:flex md:flex-row-reverse md:px-[72px] md:py-[58px] lg:gap-[62px]">
      <div className="flex flex-col gap-2 px-4 pt-[38px] text-neutral-950 md:basis-[100%] md:pt-[24px] lg:gap-0">
        <h3 className="mb-2.5 text-left text-[22px]/[30px] font-bold tracking-[2%] lg:mb-8 lg:text-[38px]/[42px]">
          SEE HOW YOUR FANS ALL AROUND THE WORLD LISTEN
        </h3>
        <p className="text-[14px] font-normal lg:mb-4 lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="text-[14px] font-normal lg:mb-5 lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <TryItNowBtn/>
      </div>

      <div className="flex px-4 pt-6 pb-[38px] md:basis-[100%] justify-center">
        <img
          src="featureSection1Img.png"
          alt="featureSection1Img.png"
          className="xl:w-[550px] xl:h-[400px]"
        />
      </div>
    </section>
  );
}

export default SectionTwo;
