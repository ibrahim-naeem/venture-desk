import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Item = ({ text, arrowleft, arrowRight }) => (
  <div className="flex p-3 ">
    {arrowleft && <IoMdArrowDropright size="22" className="mt-[1px]"/>}
    <p className="mob:text-xs stab:text-base text-black pr-2 mob:mt-1 cursor-pointer hover:text-[#c00]">
      {text}
    </p>
    {arrowRight && <IoMdArrowDropright size="22" className="mt-[1px]"/>}
  </div>
);

const NavSubList = ({ setNavItem }) => {
  return (
    <div className="">
      <div onClick={() => setNavItem(false)}>
        <Item text="Main Menu" arrowleft="true" />
      </div>

      <div className="border-b mob:w-[200px] stab:w-[360px]" />
      <div className="font-bold">
        <Link to="/about">
          <Item text="About" />
        </Link>
      </div>
      <Link to="/about/what-we-do">
        <Item text="What We Do" />
      </Link>
      <Link to="/about/what-we-believe">
        <Item text="What We Believe" />
      </Link>
      <Link to="/about/our-people">
        <Item text="Our People & Leadership" />
      </Link>
      <Link to="/about/clients-results">
        <Item text="Client Results" />
      </Link>
      <Link to="/about/awards-and-recognition">
        <Item text="Awards & Recognition" />
      </Link>
      <Link to="/about/global-affiliation">
        <Item text="Global Affiliations" />
      </Link>

      <div className="border-b w-[360px]" />
      <div className="bg-[#f9f9f9]">
        <Item text="Further: Our global responsibility" />
        <Item text="Diversity, Equity & Inclusion" arrowRight="true" />
        <Item text="Social Impact" />
        <Item text="Sustainability" />
        <Item text="Learn more about Further" />
      </div>
    </div>
  );
};

export default NavSubList;
     