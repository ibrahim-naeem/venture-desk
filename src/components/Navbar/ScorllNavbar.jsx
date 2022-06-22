import logoRed from "../../assets/logo_red_bain.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Container from "./sideNavbar/Container";
import { AiOutlineClose } from "react-icons/ai";

const ScorllNavbar = ({ navbar }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  console.log(showSideNav)
  if (showSideNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  } 
  return (
    <div>
      {/* SideNav Shadow */}
      {showSideNav && (
        <div className="absolute top-0 w-[100vw] h-[100vh] bg-slate-900 opacity-50" />
      )}
      <div
        className={`flex justify-around fixed top-0 bg-white py-4 w-[100vw] border-b  ${
          !navbar ? "block" : "hidden"
        }`}
      >
        {/* sidebar menu icon */}
        <div className="" onClick={() => setShowSideNav(true)}>
          {showSideNav && (
            <div className="absolute top-0 left-0 flex">
              <Container 
              showSideNav={showSideNav}
              setShowSideNav={setShowSideNav}
               />
            </div>
          )}
          <AiOutlineMenu className="mob:text-base stab:text-lg ltab:text-xl laptop:text-2xl" />
          
        </div>
        {/* close button */}
          {showSideNav && (
            <button
              type="button"
              className="absolute top-0 mob:left-[250px] stab:left-[360px] bg-[#c00] text-white text-2xl w-12 h-12 slide-sideNav-right"
              onClick={() => setShowSideNav(!showSideNav)}
            >
              <AiOutlineClose className="mx-auto " />
            </button>
            
          )}
        <img className="mob:w-40 stab:w-64 mx-[15%]" src={logoRed} />
        <AiOutlineSearch className="text-slate-400 mob:text-base stab:text-lg ltab:text-xl laptop:text-2xl mob:mt-1 stab:mt-0" />
      </div>
    </div>
  );
};

export default ScorllNavbar;
