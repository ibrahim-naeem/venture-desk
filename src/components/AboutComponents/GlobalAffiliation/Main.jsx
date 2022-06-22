import FormSection from "../shared/FormSection"
import GlobalCards from "./GlobalCards"

import AboutHeroSection from "../shared/AboutHeroSection"
import { SpinOff } from "./SpinOff"

import background from "../../../assets/global-1.jpg";

const index = () => {
  return (
    <div>
      <AboutHeroSection
        background={background}
        small="About Bain"
        main="Global Affiliations"
        text="Bain recognizes that when we collaborate with some of the world’s
              most ambitious organizations, we can multiply our impact in areas
              from economic development to poverty alleviation. We have enduring
              partnerships and affiliations with a number of like-minded
              organizations and leaders who are eager to help drive global
              change and deliver true results."
      />
      <SpinOff />
      <GlobalCards />
      <FormSection />
    </div>
  );
}

export default index