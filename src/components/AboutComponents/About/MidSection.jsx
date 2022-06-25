import CenteredText from "../shared/CenteredText";
import Characteristics from "../shared/Characteristics";
import TextDivider from "../shared/TextDivider";
import LearnMoreBox from "../shared/LearnMoreBox";
import ImageZoomBox from "../shared/ImageZoomBox";
import img from "../../../assets/OP-box-image.webp";
import img1 from "../../../assets/AI-1.jpg";
import img2 from "../../../assets/AI-2.webp";
import img3 from "../../../assets/AI-3.png";
import OurTeamSection from "../shared/OurTeamSection";

const MidSection = () => {
  return (
    <>
      <CenteredText
        text="Venture Desk brings ideas to life, leveraging modern technologies.
        Today, it has grown into a full-cycle, mobile-first software development company,
         with the highest team satisfaction in the industry, independent analyst recognition, 
         and an ever-growing list of delighted clients who work with us again and again. 
         We are proud to have worked with Estee Lauder, Clinique, Engro, Swatch Group, Politico, 
         and OOMCO. We have helped dozens of startups with modern technologies."
        style="text-justified"
      />
      {/* Video  */}
      {/* <div className="w-[100vw] text-justified mt-10 ">
        
          <iframe
            src="https://www.youtube.com/embed/r9jwGansp1E"
            
            
            className="w-[85vw] mob:h-[30vh] ltab:h-[80vh] mx-auto"
            allow="autoplay; fullscreen; picture-in-picture"
            
          ></iframe>
        
        <p className="text-gray-500 mob:text-xs stab:text-sm px-10 stab:px-14 ltab:px-20 laptop:px-[110px]">
          We seek out people and clients who defy the perception of their own
          limits, those with the ambition to lead and the courage to adapt.
          Watch the video to learn more.
        </p>
      </div> */}
      {/* Video end */}
      <div className="mob:my-5 stab:my-10 ltab:my-20">
        <TextDivider text="Our Firm" />
        <div className="w-[80vw] mx-auto flex flex-wrap mb-14 ">
          <Characteristics
            text="Startup partner program™"
            p="We have created Startup Partner Program™ for funding early stage startups. We make small investments in return for small stakes in the startups we build."
          />
          <Characteristics
            text="Rapid strategy workshop™"
            p="Building a successful product is an art. The dozens of clients have used our Rapid Strategy Workshop™ model to get multi-million dollar revenue and valuations."
          />
          <Characteristics
            text="Rapid mvp development™"
            p="Do you want to test the idea with minimum investment and time? – Build Minimum Viable Product through our Rapid MVP Development™."
          />
          <Characteristics
            text="Our approach"
            p="To be the number one choice for businesses when it comes to digital product development, design, quality, and innovation."
          />
          <Characteristics
            text="Our mission"
            p="To help businesses become competitive with the power of digital innovation, outstanding design, and emerging technologies via building intelligent digital products."
          />
          {/*Learn Box Section */}
          <LearnMoreBox
            img={img1}
            h1="Bold Steps for Climate Change"
            p="The firm announced an aggressive set of goals to help curb global warming by 1.5°C, in line with its commitment to the Science-Based Targets Initiative."
          />
          {/* Learn Box Section End*/}
          <div className="mx-auto">
            <TextDivider text="Our People" />
          </div>
          <div className="w-[1200px] mx-auto flex flex-wrap mb-14">
            <Characteristics
              text="Culture of Collaboration"
              p="We hear over and over again that it feels different to work with us. Why? A uniquely collaborative culture full of passionate people who care more about your success."
            />
            <Characteristics
              text="Diversity, Equity & Inclusion"
              p="We help our clients see the world differently by welcoming different opinions and perspectives that help us see the world differently."
            />
            <Characteristics
              text="Social Impact"
              p="We’re investing $1 billion of pro bono consulting work in promising organizations that need resources and strategic guidance to reach their full potential."
            />
          </div>
          {/* Image Box Section */}
          <ImageZoomBox img={img2} text="Bold ideas. Extraordinary team" />
          {/* IMage Bocx Section */}
          <div className="mx-auto">
            <TextDivider text="Results & Partnerships" />
          </div>
          <div className="w-[1200px] mx-auto flex flex-wrap mb-14">
            <Characteristics
              text="Enduring Results"
              p="We hear over and over again that it feels different to work with us. Why? A uniquely collaborative culture full of passionate people who care more about your success."
            />
            <Characteristics
              text="Bain Alliance Ecosystem"
              p="We help our clients see the world differently by welcoming different opinions and perspectives that help us see the world differently."
            />
            <Characteristics
              text="Global Affiliations "
              p="We’re investing $1 billion of pro bono consulting work in promising organizations that need resources and strategic guidance to reach their full potential."
            />
            <Characteristics
              text="World Economic Forum"
              p="We’re investing $1 billion of pro bono consulting work in promising organizations that need resources and strategic guidance to reach their full potential."
            />
          </div>
          {/* Image Box Section */}
          <ImageZoomBox
            img={img3}
            text="We work as one global team to help you achieve the extraordinary"
            a
          />
          {/* IMage Bocx Section */}
          <div className="mx-auto relative top-10">
            <OurTeamSection
              h1="Our Team"
              p=" Get in touch and see how our team can help you achieve it"
            />
          </div>
          {/*Learn Box Section */}
          <LearnMoreBox
            img={img}
            h1="Bold Steps for Climate Change"
            p="The firm announced an aggressive set of goals to help curb global warming by 1.5°C, in line with its commitment to the Science-Based Targets Initiative."
          />
          {/* Learn Box Section End*/}
        </div>
      </div>
    </>
  );
};

export default MidSection;
