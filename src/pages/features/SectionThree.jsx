import TryItNowBtn from "../../ui/TryItNowBtn";

function SectionThree() {
  return (
    <section className="bg-[#111315] px-4 pt-[38px] pb-[38px] md:mt-[56px] md:flex md:px-[72px] md:pt-[96px] lg:gap-[62px]">
      <div className="flex flex-col gap-2 pb-6 lg:w-[570px]">
        <h3 className="mb-2.5 text-[22px]/[29px] font-bold tracking-[2%] lg:w-[665px] lg:text-[38px]/[52px]">
          PITCH YOUR MUSIC TO UDUX CURATORS
        </h3>
        <p className="text-[14px] font-normal text-[#6F767E] lg:mb-4 lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <p className="text-[14px] font-normal text-[#6F767E] lg:mb-5 lg:text-lg">
          Figma files can also be downloaded from our store. These files include
          the latest Figma features and are synced with the Webflow template.
        </p>
        <TryItNowBtn color="text-[#E1F16B]"/>
      </div>

      <div className="pb-[38px] xl:ml-[80px]">
        <img
          src="artisteLineUp.png"
          alt="artiste line up"
          className="lg:w-full"
        />
      </div>
    </section>
  );
}

export default SectionThree;
