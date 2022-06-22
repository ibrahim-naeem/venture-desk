
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";


const FormSection = () => {
  const [arrow, setArrow] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Select an Industry');

  const handleChange = () => {
    setArrow(!arrow);
  }

  const handleDropDown = (e) => {
    console.log(setDropdownValue(e.target.value));
    setArrow(false);
  }
  
  return (
    <div>
      <div className="flex mob:flex-col ltab:flex-row border mx-auto mb-20 p-5 w-[85vw]">
        {/* Side One */}
        <div className="mob:w-full ltab:w-1/2 mob:p-2 stab:p-5 ltab:p-10 ">
          <h1 className="mob:text-lg stab:text-2xl ltab:text-3xl laptop:text-4xl mob:font-semibold ltab:font-bold mob:pb-4 stab:pb-6 ltab:pb-10 laptop:pb-16">
            Ready to talk?
          </h1>
          <p className="mob:text-lg stab:text-xl ltab:text-2xl laptop:text-3xl font-base mob: pb-2 ltab:pb-5">
            I want to talk to your experts in:
          </p>

          <div
            className="mob:w-[70vw] stab:w-[75vw] ltab:w-[33vw] laptop:w-[28vw] hover:text-[#c00] flex"
            onClick={handleChange}
          >
            <button
              type="button"
              className=" mob:text-lg stab:text-xl ltab:text-2xl laptop:text-3xl mob:font-semibold ltab:font-bold ltab:p-2 mr-auto mob:h-8 ltab:h-12 overflow-hidden"
            >
              {dropdownValue}
            </button>
            <div className="relative mob: top-3 ltab:top-5">
              {!arrow && <AiFillCaretDown />}
              {arrow && <AiFillCaretUp />}
            </div>
          </div>
          <div className="mob:w-[70vw] stab:w-[75vw] ltab:w-full laptop:w-[28vw]  h-1 border-b border-[#c00]" />
          {/* Select */}
          {arrow && (
            <select
              size="4"
              className="mob:w-[70vw] stab:w-[75vw] ltab:w-[33vw] laptop:w-[420px] mob:text-xs stab:text-lg ltab:text-xl laptop:text-2xl font-bold outline-none absolute "
            >
              <option
                onClick={handleDropDown}
                className="hover:text-[#c00] border-b mob:p-2 ltab:p-3 bg-none"
              >
                Select an Industry
              </option>
              <option
                onClick={handleDropDown}
                className="hover:text-[#c00] border-b mob:p-2 ltab:p-3"
              >
                Advanced Manufacturing & Services
              </option>
              <option
                onClick={handleDropDown}
                className="hover:text-[#c00] border-b mob:p-2 ltab:p-3"
              >
                Aerospace, Defense & Government Services
              </option>
              <option
                onClick={handleDropDown}
                className="hover:text-[#c00] border-b mob:p-2 ltab:p-3"
              >
                Automotive & Mobility
              </option>
              <option
                onClick={handleDropDown}
                className="hover:text-[#c00] border-b mob:p-2 ltab:p-3"
              >
                Aviation
              </option>
              <option
                onClick={handleDropDown}
                className="hover:text-[#c00] border-b mob:p-2 ltab:p-3"
              >
                Chemicals
              </option>
            </select>
          )}
        </div>

        {/* dropdown */}

        {/* Side Two */}
        <div className="mob:w-full ltab:w-1/2 mob:p-3 ltab:p-10">
          <p className="mob:text-xs stab:text-base ltab:text-xl ">
            We work with ambitious leaders who want to define the future, not
            hide from it. Together, we achieve extraordinary outcomes.
          </p>
          <form className="flex flex-col ">
            <input
              className="w-full mob:p-1 ltab:p-3 mob:text-xs stab:text-base ltab:text-xl border border-black outline-none my-5 bg-[#f9f9f9] hover:bg-white"
              type="text"
              placeholder="Your email"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="w-48 mob:p-2 ltab:p-4 bg-[#CC0000] outline-none text-white hover:bg-red-800 mob:font-semibold ltab:font-bold"
            >
              CONTACT US
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSection