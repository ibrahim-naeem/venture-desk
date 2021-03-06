import React from "react";
import QuestionImage from "../../assets/questions_image.webp";

const Ans = ({ answer }) => {
  return (
    <div>
      <button className="py-3 px-5 m-2 border rounded-full mob:text-[12px] stab:text-sm ltab:text-base  text-[#c00] font-bold hover:bg-[#C00] hover:text-white hover:border-none ">
        {answer}
      </button>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="p-20 flex justify-around mob:flex-col mob:flex-col-reverse stab:flex-row ">
      {/* detailsection */}
      <div className="mob:w-full stab:w-2/3">
        <div className="stab:pl-10 w-full">
          <h1 className="mob:text-xl  mob:w-full mob:pt-5 stab:pt-0 stab:text-2xl ltab:text-3xl laptop:text-4xl font-bold w-[480px]">
            We champion the bold to achieve the extraordinary.
          </h1>
          <p className="mob:text-lg stab:text-xl py-7 mob:w-100 laptop:w-[80%] ">
            At Venture Desk, we deliver successful products by doing three
            things: being accountable for our projects, making our methods
            transparent, and building strong relationships with our clients.
          </p>
          <h2 className="text-lg font-bold pb-5">How we start?</h2>
          <div className="flex flex-wrap ">
            <Ans answer="Ip protection" />

            <Ans answer="Consultation & project discovery" />
            <Ans
              answer="
Rapid strategy workshop™"
            />
            <Ans
              answer="
User interfaces & experiences"
            />
            <Ans
              answer="
Agile development"
            />
            <Ans
              answer="
Testing & incremental quality assurance"
            />
            <Ans
              answer="
Support & maintenance"
            />

            <a className=" pt-5 ml-5 border-b-2 border-slate-400 m-0 h-10 font-semibold text-slate-500 hover:text-[#c00] hover:border-[#c00]">
              View All
            </a>
          </div>
        </div>
      </div>
      {/* imagesection */}

      <div className="stab:w-1/3">
        <img src={QuestionImage} />
      </div>
    </div>
  );
};

export default Questions;
