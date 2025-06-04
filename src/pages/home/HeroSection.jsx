function HeroHome() {
  return (
    <section className="pb-11 lg:pb-0">
      <div className="px-4 lg:w-xl">
        <h2 className="mb-2.5 pt-24 text-[27px]/[38px] font-bold tracking-normal lg:text-[54px]/[76px] lg:pt-28">
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
          style={{ color: "hsla(67, 83%, 68%, 1)" }}
          className="flex gap-2.5 py-2.5 align-middle text-[14px] font-normal hover:cursor-pointer"
        >
          Try it now &rarr;
        </span>
      </div>

      <div className="relative">
        <img
          src="heroImg1.png"
          alt="image1"
          className="absolute inset-y-0 right-0 lg:w-[260px] lg:-inset-y-72"
        />
      </div>
      <div>
        <img src="heroImg2.png" alt="image2" className="mt-16 lg:w-[260px] lg:inset-x-[450px] lg:-inset-y-24 lg:relative"/>
      </div>
    </section>
  );
}

export default HeroHome;
