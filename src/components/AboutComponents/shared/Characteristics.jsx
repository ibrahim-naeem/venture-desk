import { IoMdArrowDropright } from "react-icons/io";

const Characteristics = ({ text, p }) => (
  <div className="mob:mx-auto ltab:mx-4 laptop:mx-5 mob:w-[60vw] ltab:w-[35vw] laptop:w-[23vw] mx-5 border-b mob:my-5 ltab:my-2">
    <div className="flex justify-between py-3 ">
      <h1 className=" mob:text-lg stab:text-xl ltab:text-2xl mob:font-semibold ltab:font-bold hover:text-[#c00]">
        {text}
      </h1>
      <IoMdArrowDropright size="20" className="text-[#c00] mt-2" />
    </div>
    {p && (
      <p className=" w-[100%] pb-12 mob:text-xs stab:text-sm ltab:text-base ">
        {p}
      </p>
    )}
  </div>
);


export default Characteristics;
