function SectionTwo() {
  return (
    <section className="lg:flex">
      <div
        style={{
          backgroundImage: "url('/Vector.png')",
          //   backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="text-neutral-950 pt-11 pb-10 px-4 flex flex-col gap-2.5 lg:basis-[100%] lg:py-[72px] lg:px-[72px] lg:gap-0 bg-[#E1F16B]"
      >
        <h3 className="mb-2.5 font-bold text-[22px]/[29px] tracking-[2%] text-center lg:text-left lg:text-[38px]/[52px] lg:mb-8">
          USE YOUR STATS TO MAKE MOVES{" "}
        </h3>
        <p className="font-normal text-[14px] lg:text-lg lg:mb-4">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="font-normal text-[14px] lg:text-lg lg:mb-5">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <span className="font-normal text-[14px] flex align-middle gap-2.5 py-2.5 hover:cursor-pointer lg:text-[17px]">
          Try it now &rarr;
        </span>
      </div>

      <div className="flex justify-center py-14 pl-6 pr-[30px] lg:basis-[100%] lg:px-[82px] lg:pt-[134px] lg:pb-[83px] bg-[#111315]">
        <div

          className="w-fit bg-[#E1F16B]"
        >
          <img src="section2Img.png" alt="section2Img.png" className="mb-1.5 ml-1.5"/>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
