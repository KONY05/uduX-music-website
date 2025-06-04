function SectionOne() {
  return (
    <section className="px-4 pt-11 pb-14 text-neutral-950">
      <div className="flex flex-col gap-2.5">
        <h3 className="mb-2.5 font-bold text-[22px]/[29px] tracking-[2%] text-center">
          YOUR CAREER IS IN YOUR HANDS
        </h3>
        <p className="font-normal text-[14px]">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="font-normal text-[14px]">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>

        <span className="font-normal text-[14px] flex align-middle gap-2.5 py-2.5 hover:cursor-pointer">
          Try it now &rarr;
        </span>
      </div>

      <div className="flex justify-center">
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
