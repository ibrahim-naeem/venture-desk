import FormSection from "../shared/FormSection";
import AboutHeroSection from "../shared/AboutHeroSection";
import background from "../../../assets/about-1.jpg";
import { Navbar } from "../shared/Navbar";
import { MidSection } from "./MidSection";

const Main = () => {
  return (
    <div>
      <AboutHeroSection
        background={background}
        small="About Venture Desk"
        main="What We Do"
        text="We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be."
      />
      <Navbar
        h3="What We Do"
        p1="Overview"
        p2="By the Numbers"
        p3="What Makes Bain Different"
      />
      <MidSection />
      <FormSection />
    </div>
  );
};

export default Main;
