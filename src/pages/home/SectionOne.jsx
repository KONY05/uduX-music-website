function SectionOne() {
  return (
    <section className="px-4 pt-11 pb-14 text-neutral-950 lg:flex lg:flex-row-reverse lg:px-[60px] lg:gap-36 lg:py-20">
      <div className="flex flex-col gap-2.5 lg:gap-[22px] ">
        <h3 className="mb-2.5 font-bold text-[22px]/[29px] tracking-[2%] text-center lg:text-left lg:text-[38px]/[52px]">
          YOUR CAREER IS IN YOUR HANDS
        </h3>
        <p className="font-normal text-[14px] lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="font-normal text-[14px] lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>

        <span className="font-normal text-[14px] flex align-middle gap-2.5 py-2.5 hover:cursor-pointer lg:text-[17px]">
          Try it now &rarr;
        </span>
      </div>

      <div className="flex justify-center lg:w-full ">
        <div
          style={{ backgroundColor: "hsla(67, 83%, 68%, 1)" }}
          className="w-fit"
        >
          <img
            src="section1Img.png"
            alt="section1Img.png"
            className="skew-x-2 mt-[-2px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
