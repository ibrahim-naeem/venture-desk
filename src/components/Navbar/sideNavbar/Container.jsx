import AboutMain from "./about/AboutMain";
import "../animation.css";
import { useState } from "react";
import AboutSub from "./about/AboutSub";

const Container = ({ showSideNav, setShowSideNav }) => {
  const [navItem, setNavItem] = useState(false);

  const handleClick = () => {
    console.log("show side nav :" + showSideNav);
  };

  return (
    <div className="flex">
      <div
        className={`flex ${
          navItem && "bg-white"
        }  mob:w-[250px] stab:w-[360px] overflow-hidden z-20`}
      >
        <div className={`flex z-100 ${showSideNav && "slide-sideNav-right"}`}>
          <div
            className={`w-[360px] h-[100vh] bg-white text-black ${
              navItem && "slide-sideNav-left"
            }`}
          >
            <AboutMain setNavItem={setNavItem} />
          </div>
        </div>
        {navItem ? (
          <div className="slide-sideNav-left ">
            <AboutSub setNavItem={setNavItem} />
          </div>
        ) : (
          <div className="slide-sideNav-item  ">
            <AboutSub setNavItem={setNavItem} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
