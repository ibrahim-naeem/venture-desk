import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";

const SmallNavLink = ({ name }) => {
  return (
    <li className=" py-2 text-[12px] font-semibold ">
      <a className={`hover:text-[#c00]  `}>{name}</a>
    </li>
  );
};

const NavbarSmall = ({ navSmallColor }) => {
  return (
    <div className="flex justify-between bg-transparent  px-[140px] ">
      <div className=" mob:hidden laptop:block">
        <ul
          className={`flex mr-auto group-hover:text-gray-400 ${
            navSmallColor ? navSmallColor : "text-white"
          }`}
        >
          <div className=" flex items-start hover:text-[#c00] ">
            <SmallNavLink className="group-hover:text-[#c00]" name="OFFICES" />
            <MdOutlineArrowDropDown size="30" />
          </div>
          <div className="border-r border-[#5F6C74] h-4 mt-2 mx-5 "></div>
          <SmallNavLink name="ALUMNI" />
          <div className="border-r border-[#5F6C74] h-4 mt-2 mx-5"></div>
          <SmallNavLink name="MEDIA CENTER" />
          <div className="border-r border-[#5F6C74] h-4 mt-2 mx-5"></div>
          <SmallNavLink name="SUBSCRIBE" />
          <div className="border-r border-[#5F6C74] h-4 mt-2 mx-5"></div>
          <SmallNavLink name="CONTACT" />
          <div className="border-r border-[#5F6C74] h-4 mt-2 mx-5"></div>
        </ul>
      </div>
      <div className=" mob:hidden laptop:block">
        <ul
          className={`flex mr-auto group-hover:text-slate-400 ${
            navSmallColor ? navSmallColor : "text-white"
          }`}
        >
          <div className="p-2">
            <VscGlobe color="grey" size="20" />
          </div>
          <div className=" flex items-start hover:text-[#c00]">
            <SmallNavLink name="GLOBAL | ENGLISH" />
            <MdOutlineArrowDropDown size="30" />
          </div>
          <div className="border-r border-[#5F6C74] h-4 mt-2 mx-3"></div>
          <div className="p-2">
            <AiOutlineFolder color="grey" size="18" />
          </div>
          <div className=" flex items-start hover:text-[#c00] ">
            <SmallNavLink name="RED FOLDER" />
            <MdOutlineArrowDropDown size="30" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarSmall;
