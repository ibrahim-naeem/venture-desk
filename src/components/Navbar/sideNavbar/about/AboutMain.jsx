import logo from '../../../../assets/logo_red_bain.svg'
import { IoMdArrowDropright } from "react-icons/io";
import "../../animation.css";

const Item = ({ text, arrow }) => (
  
  <div className="flex mt-4  py-2  hover:text-[#c00]">
    <p className="text-sm font-bold pl-4 pr-2 cursor-pointer">{text}</p>
    {!arrow && (
      <div>
        <IoMdArrowDropright size="22" className="self-center" />
      </div>
    )}
  </div>
);

const ItemTwo = ({ text, arrow }) => (
  <div className="flex mt-3  py-2  hover:text-[#c00]">
    <p className="text-[12px] font-semibold pl-4 mr-auto">{text}</p>
    {!arrow && (
      <div>
        <IoMdArrowDropright size="22" className="self-center mx-5" />
      </div>
    )}
  </div>
);

const NavMainList = ({ setNavItem }) => {
  return (
    <div className=''>
      <img src={logo} className=" mob:w-[180px] stab:w-[230px] p-5 mb-4 " />
      <div onClick={() => setNavItem(true)}>
        <Item text="Industries" />
      </div>
<div onClick={() => setNavItem(true)}>
  <Item text="Consulting Services" />
</div>

      
      <div onClick={() => setNavItem(true)}>
        <Item text="About" />
      </div>
      

      <div className="border-b  w-full " />
      <ItemTwo text="OFFICES" />
      <ItemTwo text="ALUMNI" arrow />
      <ItemTwo text="MEDIA CENTER" arrow />
      <ItemTwo text="SUBSCRIBE" arrow />
      <ItemTwo text="CONTACT" arrow />
      <ItemTwo text="GLOBAL | ENGLISH" />
      <ItemTwo text="RED FOLDER" />
    </div>
  );
};






 

export default NavMainList







