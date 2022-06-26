import Characteristics from "../shared/Characteristics";
import img from "../../../assets/WWD-image-1.jpg";
import ImageZoomBox from "../shared/ImageZoomBox";
import CenteredText from "../shared/CenteredText";
import TextDivider from "../shared/TextDivider";
const Card = ({ h1, p }) => (
  <div className="mob:w-full ltab:w-[25vw] mob:py-5 ltab:my-1 text-center">
    <h1 className="mob:text-4xl stab:text-5xl ltab:text-6xl text-7xl font-bold">
      {h1}
    </h1>
    <p className="mob:text-sm stab:text-lg ltab:text-xl">{p}</p>
  </div>
);

export const MidSection = () => {
  return (
    <div>
      <CenteredText
        text="We work with ambitious clients who want to define the future, not hide from it."
        style="text-justified"
      />
      <CenteredText
        text="Global leaders come to us to solve industry-defining challenges in: strategy, marketing, organization, operations, information technology, digital transformation and strategy, advanced analytics, transformations, sustainability, corporate finance and mergers and acquisitions, across all industries and geographies. Our unique approach to change management (Results360®) helps structure, orchestrate and enable sustained results."
        style="text-justified"
      />
      <CenteredText
        text="We measure our success by the success of our clients: more than 60% of the Global 500, private equity funds representing 75% of global equity capital, leading nonprofits and innovative startups. "
        style="text-justified "
      />
      <div className="my-5">
        <TextDivider text="By the Numbers" />
      </div>
      {/* Card */}
      <div className="w-[80vw] mx-auto mob:my-5 stab:my-10 ltab:my-20 flex mob:flex-col ltab:flex-row  justify-between content-center">
        <Card
          h1="1973"
          p="We started with an insurgent mindset and a mission to redefine management consulting by focusing on results, not reports."
        />
        <Card h1="63%" p="We’ve worked with 63% of the Global 500" />
        <Card
          h1="38"
          p="Across 63 offices in 38 countries, we work as one global team to help clients achieve the extraordinary."
        />
      </div>
      {/* Card end*/}
      <TextDivider text="What Makes Bain Different" />

      <CenteredText
        h1="An insurgent mindset"
        text="We work with ambitious clients who want to define the future, not hide from it. Together, we define a bold ambition and achieve extraordinary results that redefine industries."
        style="text-justified"
      />
      <CenteredText
        h1="Integrated innovation"
        text="We work with ambitious clients who want to define the future, not hide from it. Together, we define a bold ambition and achieve extraordinary results that redefine industries."
        style="text-justified"
      />
      <CenteredText
        h1="A uniquely collaborative culture"
        text="We work with ambitious clients who want to define the future, not hide from it. Together, we define a bold ambition and achieve extraordinary results that redefine industries."
        style="text-justified"
      />
      <TextDivider text="Explore Bain" />

      <div className="w-[80vw] mx-auto flex flex-wrap mb-14">
        <Characteristics text="What We Do" />
        <Characteristics text="Awards & Recognition" />
        <Characteristics text="Our People & Leadership" />
        <Characteristics text="Diversity, Equity & Inclusion" />
        <Characteristics text="Social Impact" />
      </div>

      {/* <ImageZoomBox
        img={img}
        text="Thrive in great company. Explore careers at Bain."
      /> */}
    </div>
  );
};
