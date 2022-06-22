import FormSection from "../shared/FormSection";
import AwardHeroSection from './AwardHeroSection';
import AwardCards from './AwardCards';
import OurTeamSection from "../shared/OurTeamSection";

  
const Main = () => {
  return (
    <div>
      <AwardHeroSection />
      <AwardCards />
      <OurTeamSection
        h1="Our Team"
        p=" Meet the people who lead Bain's mission of delivering results for
            our clients while investing in our employees' learning and growth"
        small="* ©2020 FORTUNE Media IP Limited. All rights reserved. Used under
        license."
      />
      <FormSection />
    </div>
  );
};

export default Main;
