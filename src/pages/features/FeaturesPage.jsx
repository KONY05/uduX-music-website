import Footer from "../../ui/Footer";
import NavBar from "../../ui/NavBar";
import HeroSection from "./HeroSection";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function FeaturesPage() {
  return (
    <main className="text-white">
      <div
        style={{
          backgroundColor: "hsla(210, 11%, 7%, 1)",
          backgroundImage:
            "url('/horizontalLine.png'), url('/verticalLine.png')",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "center, center", // adjust as needed
          backgroundSize: "cover, cover",
        }}
      >
        <NavBar />
        <HeroSection />
      </div>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer/>
    </main>
  );
}

export default FeaturesPage;
