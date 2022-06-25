import React from "react";
import careerOverview from "../../assets/careers-overview.webp";

const Careers = () => {
  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <img
          src={careerOverview}
          className="scale-125 py-20 -z-10 w-full h-100%"
          alt="career overview image "
        />
        <div className="absolute left-[12%] mob:top-[48%] stab:top-[50%] group">
          <p className="mob:text-sm stab:text-base ltab:text-xl laptop:text-2xl text-white ltab:font-semibold ">
            Careers
          </p>
          <h1 className="mob:text-2xl stab:text-3xl ltab:text-5xl laptop:text-6xl text-white font-bold  stab:py-2 ltab:py-4 laptop:py-7">
            Venture Desk & You
          </h1>
          <button className="mob:p-1 mob:text-[50%] stab:text-sm ltab:text-base stab:p-2 ltab:p-3 laptop:p-4 bg-transparent border text-white font-bold group-hover:bg-[#C00] group-hover:text-white group-hover:border-none ">
            SEE ALL INSIGHTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
