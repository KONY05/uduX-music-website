function SectionTwo() {
  return (
    <section>
      <div
        style={{
          backgroundColor: "hsla(67, 83%, 68%, 1)",
          backgroundImage: "url('/Vector.png')",
          //   backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className="text-neutral-950 pt-11 pb-10 px-4 flex flex-col gap-2.5"
      >
        <h3 className="mb-2.5 font-bold text-[22px]/[29px] tracking-[2%] text-center">
          USE YOUR STATS TO MAKE MOVES{" "}
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

      <div style={{
        backgroundColor:"hsla(210, 11%, 7%, 1)",
      }} className="flex justify-center py-14 pl-6 pr-[30px]">
        <div
          style={{
            backgroundColor: "hsla(67, 83%, 68%, 1)",
          }}
          className="w-fit"
        >
          <img src="section2Img.png" alt="section2Img.png" className="mb-1.5 ml-1.5"/>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
