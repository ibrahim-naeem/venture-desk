import React from 'react'
import insight1 from '../../assets/insight_1.webp'
import insight2 from '../../assets/insight_2.webp';
import { FiBookmark } from "react-icons/fi";

const InsightSection = ({img, small, heading, text, smallLink}) => {
    return (
      <div className="mob:flex stab:flex-col stab:p-2">
        <img
          src={img}
          className="mob:mr-4 stab:p-3  mob:w-[15%] stab:w-full "
          alt="latest insight image"
        />
        <div className="mob:ml-3 mob:w-full">
          <p className="text-sm text-[#c00] font-semibold stab:pb-5">{small}</p>
          <h3 className="mob:text-lg text-xl font-semibold hover:text-[#c00] pb-5">
            {heading}
          </h3>
          <p className="hidden stab:block text-base text-black mb-6 h-20 w-[full]">
            {text}
          </p>
          <div className="flex justify-between ">
            <p className="text-sm text-slate-500 font-semibold ">{smallLink}</p>
            <FiBookmark className="text-slate-500" size="20" />
          </div>
        </div>
      </div>
    );
}

const Insights = () => {
  return (
    <div className="stab:p-20 mob:p-3 ">
      <div className="flex justify-center mob:mb-5 stab:my-0">
        <div className="border-t border-grey stab:w-1/3 mob:w-2/6"></div>
        <p className="stab:w-1/3 mob:w-3/6 mob:text-lg  stab:text-2xl ltab:text-3xl laptop:text-4xl text-center font-semibold -mt-4 stab:px-5 ltab:px-0 laptop:px-5">
          Our Latest Insights
        </p>
        <div className="border-t border-grey stab:w-1/3 mob:w-2/6"></div>
      </div>
      <div className="flex mob:flex-col stab:flex-row ">
        <div>
          <InsightSection
            img={insight1}
            small="Mergers and Acquisitions"
            heading="The ESG Imperative in M&A"
            text="Acquirers need to assess target companies for hidden risks and for ways to advance their environmental, social, and corporate governance agendas."
            smallLink="M&A Report"
          />
        </div>
        <div className="mob:border-b stab:border-r stab:mx-4 border-grey-500 laptop:h-[580px] my-8"></div>
        <div>
          <InsightSection
            img={insight2}
            small="Organization"
            heading="The Working Future: More Human, Not Less"
            text="It’s time to change how we think about work."
            smallLink="Report"
          />
        </div>
        <div className="mob:border-b  stab:border-none border-grey-500 mt-6"></div>
      </div>
      <div className="flex justify-center">
        <button className="mob:w-full laptop:w-1/5 p-4 mob:my-5  bg-white border text-[#C00] font-bold hover:bg-[#C00] hover:text-white ">
          SEE ALL INSIGHTS
        </button>
      </div>
    </div>
  );
}

export default Insights