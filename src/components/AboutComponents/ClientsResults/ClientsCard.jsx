import img1 from "../../../assets/AC-1.jpg";
import img2 from "../../../assets/AC-2.jpg";
import img3 from "../../../assets/AC-3.jpg";
import img4 from "../../../assets/AC-4.jpg";
import img5 from "../../../assets/AC-5.jpg";
import img6 from "../../../assets/AC-6.jpg";
import img7 from "../../../assets/AC-7.jpg";
import img8 from "../../../assets/AC-8.jpg";
import { FiBookmark } from "react-icons/fi";

const Card = ({ img, small, h1, p, border, style }) => {
  return (
    <div
      className={`mob:w-full ltab:w-1/4 px-4 mob:my-8 ltab:my-5 ${
        border && "ltab:border-r"
      }`}
    >
      <img src={img} alt="" />
      <p className="mob:text-xs ltab:text-sm font-semibold text-[#c00] py-3">
        {small}
      </p>
      <h1 className="mob:text-sm stab:text-base ltab:text-lg font-semibold pb-3 hover:text-[#c00]">
        {h1}
      </h1>
      <p className="mob:text-xs stab:text-sm ltab:text-base">{p}</p>
      <FiBookmark
        size="20"
        color="grey"
        className={`ml-auto mob:mt-10 ltab:mt-7 ${style}`}
      />
    </div>
  );
};

const ClientsCard = ({ modal }) => {
  return (
    <div>
      <div
        className={`flex mob:flex-col ltab:flex-row flex-wrap mob:w-full ltab:w-[85vw]  mx-auto mob:mb-6 stab:mb-10 ltab:mb-14 laptop:mb-20 `}
      >
        <Card
          img={img1}
          small="Telecommunications"
          h1="Restoring Customer Advocacy With a Digital-First Approach"
          p="For one telco tethered to the past, customer centricity meant embracing digitalization."
          border="true"
          style="relative top-[18px]"
        />
        <Card
          img={img2}
          small="Infrastructure, Construction & Building Products"
          h1="Tata Steel Helps Home Builders Break New Ground"
          p="A unique e-commerce platform extends the company’s reach into the consumer market."
          border="true"
        />

        <Card
          img={img3}
          small="Media & Entertainment"
          h1="A Global Media Company Unlocks Hundreds of Millions in Working Capital"
          p="A merger spurred MediaCo to radically improve its cash conversion cycle."
          border="true"
          style="relative top-[16px]"
        />
        <Card
          img={img4}
          small="Private Equity"
          h1="Springtime for April as a Digital Transformation Takes Root"
          p="Encouraged by new owner CVC Capital Partners, the insurer launched a bold four-part strategy to revive growth and reclaim the mantle of disruptor."
        />
        <Card
          img={img5}
          small="Technology"
          h1="How a Data-Driven Mindset Powers McAfee’s Growth"
          p="A new test-and-learn approach for customer’s end-to-end experience supports industry-leading success across customer acquisition, retention, and product development."
          border="true"
          style="relative top-[165px]"
        />
        <Card
          img={img6}
          small="Consumer Products"
          h1="Better Forecasts, Less Waste Boost Grupo Bimbo’s Profitability"
          p="Bimbo Bakeries USA (BBU), part of $15 billion packaged food company Grupo Bimbo, had what they described as a “persistent and unrelenting” waste problem. They were discarding unsold food at a rate double their peers, creating significant economic and environmental challenges. “We continued to build this waste into our operating budget, and we had to put a stop to it,” says Tony Gavin, Executive Vice President, BBU."
          border="true"
        />
        <Card
          img={img7}
          small="Metals"
          h1="Advanced Analytics Breakthrough Lets Metals Company Optimize Yield Cost"
          p="A new tool allows operators to find the most cost-effective blend to achieve a desired grade."
          border="true"
          style="relative top-[185px]"
        />
        <Card
          img={img8}
          small="Chemicals"
          h1="Advanced Analytics helps a Plastic Manufacturer Optimize its Yield"
          p="New process setting dramatically reduces consumption of high-cost ingredient"
          style="relative top-[185px]"
        />
        <Card
          img={img1}
          small="Telecommunications"
          h1="Restoring Customer Advocacy With a Digital-First Approach"
          p="For one telco tethered to the past, customer centricity meant embracing digitalization."
          border="true"
          style="relative top-[18px]"
        />
        <Card
          img={img2}
          small="Infrastructure, Construction & Building Products"
          h1="Tata Steel Helps Home Builders Break New Ground"
          p="A unique e-commerce platform extends the company’s reach into the consumer market."
          border="true"
        />

        <Card
          img={img3}
          small="Media & Entertainment"
          h1="A Global Media Company Unlocks Hundreds of Millions in Working Capital"
          p="A merger spurred MediaCo to radically improve its cash conversion cycle."
          border="true"
          style="relative top-[16px]"
        />
        <Card
          img={img4}
          small="Private Equity"
          h1="Springtime for April as a Digital Transformation Takes Root"
          p="Encouraged by new owner CVC Capital Partners, the insurer launched a bold four-part strategy to revive growth and reclaim the mantle of disruptor."
        />
      </div>
      <div className="flex justify-center pb-12 ">
        <button className="w-[90vw] ltab:w-[10vw] mob:p-2 ltab:p-4 bg-white border text-[#C00] mob:font-semibold ltab:font-bold hover:bg-[#C00] hover:text-white ">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default ClientsCard;
