import { useState, useEffect } from "react";

import NavbarMain from "./NavbarMain";
import NavbarSmall from "./NavbarSmall";
import ScorllNavbar from "./ScorllNavbar";

const Navbar = ({ navSmallColor, navMainColor, logoColor }) => {
  const [navbar, setNavbar] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const offset = window.pageYOffset;
      if (offset > 45) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    });
  }, []);
  return (
    <div className="absolute w-[100vw] z-20 group ">
      <div className="group-hover:bg-white">
        <NavbarSmall navSmallColor={navSmallColor} />
        <div
          className={`group-hover:border-b  ${navMainColor && "border-b"}`}
        ></div>
        <NavbarMain
          navbar={navbar}
          navMainColor={navMainColor}
          logoColor={logoColor}
        />
        <ScorllNavbar navbar={navbar} />
      </div>
      <div
        className={`w-full border-b ${
          !logoColor ? "border-[#5F6C74]" : "border-[#D8D8D8]"
        }   group-hover:border-none`}
      ></div>
    </div>
  );
};

export default Navbar;
