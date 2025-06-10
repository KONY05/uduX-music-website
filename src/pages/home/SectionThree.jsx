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
        <div className="bg-[#121416] pt-6 pr-[18px] pb-[70px] pl-3.5 shadow-[-5px_-35px_25px_rgba(0,0,0,0.8)] lg:w-[663px] lg:bg-transparent lg:pb-2 lg:pl-[62px] lg:shadow-none">
          <h3 className="mb-2.5 text-[22px]/[29px] font-bold tracking-[2%] lg:mb-2 lg:text-[38px]/[52px]">
            ‘‘UDUX FOR ARTISTS HELPS YOU FIND YOUR FANS’’
          </h3>
            <p className="text-[14px] font-normal text-gray-500 w-full lg:w-[507px] lg:text-[18px]/[32px] lg:backdrop-blur-2xl lg:rounded-xl lg:p-4 lg:bg-gradient-to-br lg:from-black/60 lg:to-transparent">
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are synced with the Webflow
              template.
            </p>
        </div>
      </div>
      <div className="hidden h-10 bg-[#111315] shadow-[-5px_-25px_20px_rgba(0,0,0,0.8)] lg:block"></div>
    </section>
  );
}

export default SectionThree;
