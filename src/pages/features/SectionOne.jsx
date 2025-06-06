import TryItNowBtn from "../../ui/TryItNowBtn";

function SectionOne() {
  return (
    <section className="overflow-x-hidden bg-[#1A1D1F] md:flex">
      <div className="flex flex-col gap-2.5 px-4 py-11 md:mt-[76px] md:basis-[100%] md:px-[72px]">
        <h3 className="mb-2.5 text-left text-[22px]/[29px] font-bold tracking-[2%] lg:text-[38px]/[52px]">
          FIND OUT HOW YOUR SONGS ARE PERFORMING
        </h3>
        <p className="text-[14px] font-normal text-[#6F767E] lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="text-[14px] font-normal text-[#6F767E] lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <TryItNowBtn color="text-[#E1F16B]" />
      </div>

      <div className="flex flex-col gap-6 md:basis-[100%] md:flex-row md:gap-[22px] lg:mr-[50px] lg:justify-end overflow-hidden">
        <div className="ml-20 flex gap-[18px] md:mb-[63px] md:ml-6 md:flex-col">
          <img
            src="oxladeCover.png"
            alt="oxlade song Cover"
            className="animate-containerOne h-[240px] w-[168px] lg:h-full lg:w-[200px]"
          />
          <img
            src="tiwaSavageCover.png"
            alt="tiwaSavage song Cover"
            className="animate-containerOne h-[240px] w-[168px] lg:h-full lg:w-[200px]"
          />
        </div>

        <div className="flex gap-[18px] md:mt-[63px] md:flex-col">
          <img
            src="ckayCover.png"
            alt="ckay song Cover"
            className="animate-containerTwo h-[240px] w-[168px] lg:h-full lg:w-[200px]"
          />
          <img
            src="ayraStarrCover.png"
            alt="ayraStarr song Cover"
            className="animate-containerTwo h-[240px] w-[168px] lg:h-full lg:w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
