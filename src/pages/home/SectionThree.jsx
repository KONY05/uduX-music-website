function SectionThree() {
  return (
    <section
      style={{
        backgroundImage: "url('/section3ImgBig.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-neutral-950"
    >
      <div className="pt-[500px]">
        <div
          style={{ backgroundColor: "hsla(210, 11%, 7%, 1)" }}
          className=" pl-3.5 pr-[18px] pt-6 shadow-[-5px_-35px_25px_rgba(0,0,0,0.8)] pb-[70px]"
        >
          <h3 className="mb-2.5 font-bold text-[22px]/[29px] tracking-[2%] ">
            ‘‘UDUX FOR ARTISTS HELPS YOU FIND YOUR FANS’’
          </h3>
          <p className="font-normal text-[14px] text-gray-500">
            Figma files can also be downloaded from our store. These files
            include the latest Figma features and are synced with the Webflow
            template.
          </p>
        </div>
      </div>

      {/* <div
        style={{ boxShadow: " -0px_-10px_15px_rgba(0,0,0,0.3)" }}
        className="pl-3.5 pr-[18px] pt-6"
      >
        <h3 className="mb-2.5 font-bold text-[22px]/[29px] tracking-[2%] ">
          ‘‘UDUX FOR ARTISTS HELPS YOU FIND YOUR FANS’’
        </h3>
        <p className="font-normal text-[14px] text-gray-500">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
      </div> */}
    </section>
  );
}

export default SectionThree;
