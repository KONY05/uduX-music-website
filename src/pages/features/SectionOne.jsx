function SectionOne() {
  return (
    <section className="overflow-x-hidden bg-[#1A1D1F] md:flex ">
      <div className="flex flex-col gap-2.5 px-4 py-11 md:basis-[100%] md:mt-[76px] md:px-[72px]">
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
        <span className="flex gap-2.5 py-2.5 align-middle text-[14px] font-normal text-[#E1F16B] hover:cursor-pointer">
          Try it now &rarr;
        </span>
      </div>

      <div className="flex flex-col gap-6 md:basis-[100%] md:flex-row md:gap-[22px] lg:justify-end lg:mr-[50px]">
        <div className="ml-20 flex gap-[18px] md:flex-col md:ml-6 md:mb-[63px]">
          <img
            src="oxladeCover.png"
            alt="oxlade song Cover"
            className="h-[240px] w-[168px] lg:w-[200px] lg:h-full"
          />
          <img
            src="tiwaSavageCover.png"
            alt="tiwaSavage song Cover"
            className="h-[240px] w-[168px] lg:w-[200px] lg:h-full"
          />
        </div>
        <div className="flex gap-[18px] md:flex-col md:mt-[63px]">
          <img
            src="ckayCover.png"
            alt="ckay song Cover"
            className="h-[240px] w-[168px] lg:w-[200px] lg:h-full"
          />
          <img
            src="ayraStarrCover.png"
            alt="ayraStarr song Cover"
            className="h-[240px] w-[168px] lg:w-[200px] lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
