import FormSection from "../shared/FormSection";
import AboutHeroSection from "../shared/AboutHeroSection";
import background from "../../../assets/about.png";
import { Navbar } from "../shared/Navbar";
import MidSection from "./MidSection";

const Main = () => {
  return (
    <div>
      <AboutHeroSection
        background={background}
        main="About Us"
        text="A boutique full service advisory firm Addressing the needs of start-ups in their acceleration stage and mature organisations at their transformation stage. The core of our services includes digital transformation, coaching executive leadership through acceleration stages and value networking. Our mesh of service providers consists of ventures capitalists, angel investors, private equity firms, technology service providers and marketing agencies."
      />

      <Navbar
        h3="About Us"
        p1="Overview"
        p2="Our Firm"
        p3="Our People"
        p4="Results & Partnerships"
      />

      <MidSection />
      <FormSection />
    </div>
  );
};

export default Main;
