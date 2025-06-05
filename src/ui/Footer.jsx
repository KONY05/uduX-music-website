import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer
      className="flex flex-col gap-8 px-3.5 py-[52px] bg-[#1A1D1F] lg:py-[60px] lg:pl-12 lg:pr-20"
    >
      <div className="lg:flex-row lg:flex lg:justify-between">
        <div className="mb-10 flex flex-col gap-5">
          <h4 className="mb-2.5 text-lg/[29px] font-bold tracking-[2%] lg:text-[21px]">
            SHORT LINE ABOUT UDUX <br /> THREE WORDS HERE
          </h4>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-[13px] font-medium"
          >
            Short sentence here
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[108px]">
          <h4 className="mb-2.5 text-center text-lg/[29px] font-bold tracking-[2%] lg:text-[21px] lg:w-[62px] lg:text-left">
            CONNECT WITH US
          </h4>

          <FooterNav />
        </div>
      </div>
      <hr
        style={{
          color: "hsla(213, 10%, 22%, 1)",
        }}
      />

      <div
        className="flex flex-col items-center gap-4 text-center text-[9px] font-normal tracking-[48%] text-[#6F767E] lg:flex-row lg:justify-between"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-[132px]">
          <p>
            2022 <span>&middot;</span> UDUX
          </p>
          <p>2022</p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-[132px]">
          <p>
            TERMS <span>&amp;</span> CONDITIONS
          </p>
          <p>PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
