function HeroHome() {
  return (
    <section className="pb-11 lg:pb-0">
      <div className="px-4 lg:w-xl lg:px-[60px] xl:w-2xl">
        <h2 className="mb-2.5 pt-24 text-[27px]/[38px] font-bold tracking-normal lg:pt-28 lg:text-[54px]/[76px] xl:text-[65px]">
          AN INNOVATIVE PLATFORM THAT{" "}
          <span style={{ color: "hsla(67, 83%, 68%, 1)" }}>
            SUPPORTS ARTISTS.
          </span>
        </h2>

        <p className="mb-1.5 text-[14px] font-normal">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are{" "}
        </p>

        <span
          className="flex gap-2.5 py-2.5 align-middle text-[14px] font-normal hover:cursor-pointer text-[#E1F16B]"
        >
          Try it now &rarr;
        </span>
      </div>

      <div className="relative">
        <img
          src="heroImg1.png"
          alt="image1"
          className="absolute inset-y-0 right-0 lg:-inset-y-72 lg:w-[260px] xl:-inset-y-90 xl:w-[300px]"
        />
      </div>
      <div className="lg:h-[300px] xl:h-[200px]">
        <img
          src="heroImg2.png"
          alt="image2"
          className="mt-16 lg:relative lg:inset-x-[470px] lg:-inset-y-30 lg:w-[260px] xl:inset-x-[750px] xl:-inset-y-72 xl:w-[300px]"
        />
      </div>
    </section>
  );
}

export default HeroHome;
