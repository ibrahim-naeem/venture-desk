import FormSection from "../shared/FormSection";
import AboutHeroSection from "../shared/AboutHeroSection";
import background from "../../../assets/about.png";
import {Navbar} from '../shared/Navbar';
import MidSection from "./MidSection";

const Main = () => {
  return (
    <div >
      <AboutHeroSection
        background={background}
        main="About Us"
        text="This is where aspiration meets innovation, candor fuels collaboration and impossible surrenders to teamwork. We champion the bold to achieve the extraordinary."
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

 

 

 

 
