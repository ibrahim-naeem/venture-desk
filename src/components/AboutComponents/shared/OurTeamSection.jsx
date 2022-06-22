
import { RiArrowRightFill } from "react-icons/ri";

const OurTeamSection = ({h1,p,small}) => {
  return (
    <div className="mob:pb-5 ltab:pb-10">
      <div className="w-[70vw] m-auto pb-20">
        <h1 className="mob:text-xs ltab:text-sm text-[#c00] font-bold mob:pb-3 ltab:pb-6 text-center">
         {h1}
        </h1>
        <div className="group hover:text-[#c00] text-center">
          <p className="mob:text-lg stab:text-xl ltab:text-2xl laptop:text-3xl font-semibold py-5">
           {p}
          </p>
          <span className="flex justify-around mob:py-2 ltab:py-5">
            <RiArrowRightFill size='20' className="group-hover:ml-2 duration-300 ease-out"/>
          </span>
        </div>
      </div>
      {p && <p className="mob:text-xs ltab:text-base mob:mx-12 stab:mx-14 ltab:mx-20 mob:px-8 stab:px-12 ltab:px-16">
       {small}
      </p>}
    </div>
  );
};

export default OurTeamSection;
