import img from "../../../assets/OP-box-image1.webp";
import img1 from "../../../assets/OP-box-image2.webp";

import { AiOutlineSearch } from "react-icons/ai";
import ImageZoomBox from '../shared/ImageZoomBox';
import LearnMoreBox from "../shared/LearnMoreBox";


const SearchSection = () => {
  return (
    <div>
      {/* Input Section */}
      <div className="mob:my-8 stab:my-12 ltab:my-16 laptop:my-20 mob:py-4 stab:py-8 ltab:py-16 w-[80vw] mx-auto flex mob:flex-col stab:flex-row bg-[#f9f9f9]">
        <div className="w-full border-b border-[#c00] w-[80%] mx-10  flex">
          <AiOutlineSearch
            size="28"
            className="text-red-600 mr-3 ltab:mt-6 laptop:mt-7"
          />
          <input
            className="outline-none mob:text-base stab:text-lg ltab:text-2xl font-bold bg-transparent "
            type="text"
            placeholder="Search our team"
          />
        </div>
        <div className="stab:pr-6 ltab:pr-10 xl:pr-0 ">
          <button className="bg-[#c00] mob:text-xs ltab:text-base content-center justify-content text-white font-semibold hover:bg-red-800 mob:p-2 ltab:p-4 mx-auto mob:my-5 stab:my-0 mob:w-[65vw] stab:w-full mob:ml-10 stab:ml-0">
            FIND PROFILES
          </button>
        </div>
      </div>
      {/* Input Section */}
      {/* Box Section */}
      <LearnMoreBox
        img={img}
        h1="Glassdoor's Best Place to Work in 2022"
        p="Our people have spoken and we’re the #3 on Glassdoor’s Best Places to
          Work list. Bain has maintained its spot in the top four on Glassdoor's
          list for the last 14 years."
      />
      {/* Box Section End*/}

      {/* Image Box */}

      <ImageZoomBox
        img={img1}
        text="We work as one global team to help you achieve the extraordinary"
      />

      {/* Image Box End*/}
    </div>
  );
};

export default SearchSection;
