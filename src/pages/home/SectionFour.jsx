function SectionFour() {
  return (
    <section className="bg-[#111315] px-4 pt-11 pb-24">
      <div className="pb-9 text-center lg:flex lg:flex-col lg:items-center">
        <h3 className="mb-2.5 text-[22px]/[29px] font-bold tracking-[2%] lg:w-[665px] lg:text-[38px]/[52px]">
          JOIN TOP ARTISTS,BUILD YOUR{" "}
          <span className="text-[#E1F16B]">FANBASE</span>{" "}
        </h3>
        <p className="text-[14px] font-normal text-gray-500 lg:mb-[92px] lg:w-[507px] lg:text-[16px]/[32px]">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
      </div>

      
      {/* Responsive Grid */}
<div className="mx-auto grid max-w-[1200px] grid-cols-3 justify-items-center gap-x-4 gap-y-6 md:max-w-[600px] md:gap-x-8 md:gap-y-8 lg:gap-x-64 lg:gap-y-20">
  {/* Top row */}
  <div className="-ml-4 h-[98px] w-[98px] overflow-hidden rounded-full shadow-[0_-8px_20px_rgba(255,255,255,0.1)] sm:h-[108px] sm:w-[108px] lg:h-[180px] lg:w-[180px] pulse-hover">
    <img
      src="wizkid.png"
      alt="wizkid"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="w-[98px] overflow-hidden h-[98px] rounded-full opacity-80 shadow-[0_-8px_20px_rgba(255,255,255,0.15)] sm:h-[108px] sm:w-[108px] lg:h-[180px] lg:w-[180px] pulse-hover">
    <img
      src="tiwa-savage.png"
      alt="tiwa savage"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="ml-4 h-[98px] w-[98px] overflow-hidden rounded-full shadow-[0_-8px_20px_rgba(255,255,255,0.2)] sm:h-[108px] sm:w-[108px] lg:h-[180px] lg:w-[180px] pulse-hover">
    <img
      src="artiste.png"
      alt="artiste"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Bottom row (centered 2 images) */}
  <div className="col-span-3 mt-4 flex justify-center gap-5 sm:gap-20">
    <div className="h-[98px] w-[98px] overflow-hidden rounded-full shadow-[0_-8px_20px_rgba(255,255,255,0.1)] sm:h-[108px] sm:w-[108px] lg:h-[180px] lg:w-[180px] pulse-hover">
      <img
        src="burnaboy.png"
        alt="burnaboy"
        className="h-full w-full object-cover"
      />
    </div>

    <div className="h-[98px] w-[98px] overflow-hidden rounded-full opacity-75 shadow-[0_-8px_20px_rgba(255,255,255,0.1)] sm:h-[108px] sm:w-[108px] lg:h-[180px] lg:w-[180px] pulse-hover">
      <img
        src="rema.png"
        alt="rema"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</div>

    </section>
  );
}

export default SectionFour;
