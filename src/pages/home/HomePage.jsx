import HeroSection from "./HeroSection";
import NavBar from "../../ui/NavBar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import Footer from "../../ui/Footer";

function HomePage() {
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

      <SectionFour />

      <Footer/>
    </main>
  );
}

export default HomePage;
