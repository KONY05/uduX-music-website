import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "hsla(204, 9%, 11%, 1)" }}
      className="flex flex-col gap-8 px-3.5 py-[52px]"
    >
      <div>
        <div className="mb-10 flex flex-col gap-5">
          <h4 className="mb-2.5 text-lg/[29px] font-bold tracking-[2%]">
            SHORT LINE ABOUT UDUX <br /> THREE WORDS HERE
          </h4>
          <p
            style={{ fontFamily: "'League Spartan', sans-serif" }}
            className="text-[13px] font-medium"
          >
            Short sentence here
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <h4 className="mb-2.5 text-center text-lg/[29px] font-bold tracking-[2%]">
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
        style={{ color: "hsla(210, 6%, 46%, 1)" }}
        className="flex flex-col items-center gap-4 text-center text-[9px] font-normal tracking-[48%]"
      >
        <div className="flex flex-col gap-4">
          <p>
            2022 <span>&middot;</span> UDUX
          </p>
          <p>2022</p>
        </div>
        <div className="flex flex-col gap-4">
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
