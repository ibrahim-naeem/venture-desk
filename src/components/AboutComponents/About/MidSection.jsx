import CenteredText from "../shared/CenteredText";
import Characteristics from "../shared/Characteristics";
import TextDivider from "../shared/TextDivider";
import LearnMoreBox from "../shared/LearnMoreBox";
import ImageZoomBox from "../shared/ImageZoomBox";
import img from "../../../assets/OP-box-image.webp";
import img1 from "../../../assets/AI-1.jpg"
import img2 from "../../../assets/AI-2.webp";
import img3 from "../../../assets/AI-3.png";
import OurTeamSection from "../shared/OurTeamSection";



const MidSection = () => {
  return (
    <>
      <CenteredText
        text="We're a global consultancy that helps the world’s most ambitious change makers define the future. Across 63 offices in 38 countries, we work alongside our clients as one team with a shared ambition to achieve extraordinary results, outperform the competition and redefine industries. We complement our tailored, integrated expertise with a vibrant ecosystem of digital innovators to deliver better, faster and more enduring outcomes. Our 10-year commitment to invest more than $1 billion in pro bono services brings our talent, expertise and insight to organizations tackling today’s urgent challenges in education, racial equity, social justice, economic development and the environment. "
        style="text-justified"
      />
      {/* Video  */}
      <div className="w-[100vw] text-justified mt-10 ">
        
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
      </div>
      {/* Video end */}
      <div className="mob:my-5 stab:my-10 ltab:my-20">
        <TextDivider text="Our Firm" />
        <div className="w-[80vw] mx-auto flex flex-wrap mb-14 ">
          <Characteristics
            text="What We Believe"
            p="We believe those who challenge themselves to be exceptional should champion that spirit in others. And that doing the right thing is rarely easy, but always worth it."
          />
          <Characteristics
            text="What We Do"
            p="Global leaders come to us to solve industry-defining challenges. Our unique approach to change management helps structure, orchestrate and enable sustained results."
          />
          <Characteristics
            text="Awards & Recognition"
            p="We’re proud to be consistently recognized as one of the world’s best places to work, a champion of diversity and a model of social responsibility."
          />
          <Characteristics
            text="Worldwide Offices"
            p="Across 63 offices in 38 countries, we work as one global team to help clients outperform their competition and redefine their industries."
          />
          <Characteristics
            text="Media Center"
            p="Our people are continually sought out by global, local and industry media for their unique insights and expert perspectives."
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
            text="We work as one global team to help you achieve the extraordinary"a
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
}

export default MidSection