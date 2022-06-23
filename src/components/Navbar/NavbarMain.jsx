import logo from "../../assets/venture_desk.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import IndustriesDropdown from "./dropdowns/IndustriesDropdown";
import ConsultingDropdown from "./dropdowns/ConsultingDropdown";
import AboutDropdown from "./dropdowns/AboutDropdown";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./sideNavbar/Container";
import { AiOutlineClose } from "react-icons/ai";

const NavItem = ({ name }) => {
  return (
    <li className="px-5 font-bold ">
      <p className={`hover:text-[#c00]`}>{name}</p>
    </li>
  );
};

const NavbarMain = ({ navbar, navMainColor, logoColor }) => {
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
        className={`flex bg-transparent mob:px-5 laptop:px-[115px] mob:py-2 stab:py-5  ${
          navbar ? "block" : "hidden"
        }`}
      >
        <div
          className={` group-hover:text-gray-400 pr-5 ${
            navMainColor ? "text-slate-400" : "text-white"
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
              onClick={() => setShowSideNav(false)}
            >
              <AiOutlineClose className="mx-auto " />
            </button>
          )}
        </div>
        {/* LOGO START */}
        <Link to="/">
          <img
            className={`group-hover:block pl-5 mob:w-[70%] stab:w-[80%] ltab:w-[90%] laptop:w-[55%] -mt-2  `}
            src={logo}
            alt="venture desk logo"
          />
        </Link>
        {/* LOGO END*/}

        <ul
          className={`flex mr-auto group-hover:text-black  ${
            navMainColor ? navMainColor : "text-white"
          }`}
        >
          <div className="navItem mob:hidden laptop:block">
            <NavItem name="Industries" />
            <IndustriesDropdown />
          </div>
          <div className="navItem mob:hidden laptop:block">
            <NavItem name="Consulting Services" />
            <ConsultingDropdown />
          </div>
          <div className="navItem mob:hidden laptop:block">
            <Link to="/about">
              <NavItem name="About" />
            </Link>
            <AboutDropdown />
          </div>
        </ul>

        <div className="flex mob:ml-auto">
          <span
            className={` mob:text-sm laptop:text-base font-semibold px-2 group-hover:text-slate-400 mob:-mt-1 stab:mt-0 ${
              navMainColor ? "text-slate-400" : "text-white"
            }`}
          >
            Explore
          </span>
          <button>
            <AiOutlineSearch
              className={`group-hover:text-slate-400 mob:text-base stab:text-lg ltab:text-xl laptop:text-2xl stab:-mt-1 laptop:mt-0 ${
                navMainColor ? "text-slate-400" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;

{
  /* 
const DropDown = ({children}) => {
  return (
    <div class="navItem__box absolute hidden top-[105px] left-[110px] w-[1290px] bg-white  px-6 py-8">
      {children}
    </div>
  );
}

export default DropDown */
}
