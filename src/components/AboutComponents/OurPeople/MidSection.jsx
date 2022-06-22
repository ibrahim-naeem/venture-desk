import img from "../../../assets/OP-box-image.webp";
import CenteredText from "../shared/CenteredText";
import LearnMoreBox from "../shared/LearnMoreBox";
import TextDivider from "../shared/TextDivider";

const MidSection = () => {
  return (
    <div className="w-[100vw] overflow-hidden">
      {/* Text section */}
      <CenteredText
        text="We bring a fresh perspective and infectious energy to every client
        relationship. Our emphasis on teamwork, trust and tolerance for
        diverging opinions helps clients focus on their opportunities, build
        their capabilities and win the future. Together, we achieve results that
        bridge what is with what can be."
      />
      {/* Box Section */}
      <LearnMoreBox
        img={img}
        h1="Glassdoor's Best Place to Work in 2022"
        p="Our people have spoken and we’re the #3 on Glassdoor’s Best Places to
          Work list. Bain has maintained its spot in the top four on Glassdoor's
          list for the last 14 years."
      />
      {/* Box Section End*/}

      <TextDivider text="Our Leadership and People" />
      {/* Paragraph */}
      
        <CenteredText
          text="Our partners put our clients first, with a relentless focus on
          championing bold ideas that help them achieve the extraordinary. In
          every office, on every team, you’ll find passionate, collaborative
          people who care for you and your success."
        />
      
    </div>
  );
};

export default MidSection;
