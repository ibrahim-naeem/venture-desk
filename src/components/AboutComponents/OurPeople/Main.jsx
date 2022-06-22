import FormSection from "../shared/FormSection";
import AboutHeroSection from "../shared/AboutHeroSection";
import background from "../../../assets/about-3.jpg";

import CardSection from "./CardSection";
import MidSection from "./MidSection";
import SearchSection from "./SearchSection";
import { Navbar } from "../shared/Navbar";

const Main = () => {
  return (
    <div>
      <AboutHeroSection
        background={background}
        small="About Bain"
        main="Our People"
        text="We hear over and over again that it feels different to work with us. Why? A uniquely collaborative culture full of passionate people who care more about your success."
      />
      <Navbar h3="Our People" p1="Overview" p2="Leadership" />
      <MidSection />
      <CardSection />
      <SearchSection />
      <FormSection />
    </div>
  );
};

export default Main;
