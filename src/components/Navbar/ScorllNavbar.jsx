import logo from "../../assets/venture_desk.png";
import { AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineSearch } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import Container from "./sideNavbar/Container";
import { AiOutlineClose } from "react-icons/ai";

const ScorllNavbar = ({ navbar }) => {
  const [showSideNav, setShowSideNav] = useState(false);

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
          <AiOutlineMenu className="mob:text-base stab:text-lg ltab:text-xl laptop:text-2xl text-slate-400" />
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
        <img
          // className="mob:w-40 stab:w-64 mx-[15%]"
          className="bg-black mob:w-[20px] stab:w-[25px] ltab:w-[30px] laptop:w-[40px] mx-[15%]"
          src={logo}
          alt="venture desk logo"
        />

        <span
          className={` mob:text-sm laptop:text-base font-bold text-slate-400 mob:-mt-1 stab:mt-0 align-middle`}
        >
          <MdAlternateEmail className="mob:text-base stab:text-lg ltab:text-xl laptop:text-2xl mob:mt-1 stab:mt-0 inline-block align-middle" />
          info@venturedesk.net
        </span>
      </div>
    </div>
  );
};

export default ScorllNavbar;
