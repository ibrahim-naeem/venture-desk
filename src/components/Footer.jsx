import React from "react";

//logos and images
import logo from "../assets/venture_desk.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const NavLink = ({ name }) => {
  return (
    <li className="pr-5  stab:font-semibold  mob:py-2">
      <a href="#footer">{name}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="smob:w-full  bg-black text-white mob:px-5 laptop:px-20  mob:py-10 laptop:py-20  ">
      {/* text and form section */}
      <div className="flex mob:flex-col stab:flex-row justify-around mb-[120px] ">
        {/* section-part-one */}
        <div className="laptop:w-1/2 mob:w-full mob:py-5 stab:py-0 stab:mr-5">
          <p className="text-xl">
            Stay ahead in a rapidly changing world. Subscribe to Bain Insights,
            our monthly look at the critical issues facing global businesses.
          </p>
        </div>

        <div className="laptop:w-1/2 mob:w-full flex ltab:flex-row justify-around mob:flex-col ">
          <div className="w-2/3 w-full mob:py-5 stab:py-2 ltab:py-0 tab:py-0 ltab:mx-5">
            <input
              className="w-full p-3 mr-3  bg-[#424242] text-xl outline-none hover:bg-[#ADAAB1]"
              type="text"
              placeholder="Your email address"
            />
            <input
              className="mt-5 pt-5 mr-3 mob:h-2 stab:h-4 ltab:h-5 mob:w-3 stab:w-4 ltab:w-5  accent-red-600"
              type="checkbox"
            />
            <span className="text-lg">
              *I have read the {""}
              <span className="border-b border-rose-600 hover:border-none text-lg">
                Privacy Policy
              </span>{" "}
              and agree to its terms.
            </span>
          </div>
          <button className="mob:w-full ltab:w-[140px] h-14  bg-[#CC0000] hover:bg-red-800 font-bold">
            SUBSCRIBE
          </button>
        </div>
      </div>
      {/* Logo  and social media link section */}
      <div className="mob:mb-5 stab:mb-[120px]">
        <div className="flex justify-between mob:flex-col stab:flex-row ">
          <div>
            <img src={logo} className="w-50%" alt="white logo" />
          </div>
          <div className="flex pr-9 mob:my-5 laptop:my-0 mob:-ml-5 laptop:ml-0">
            <FaLinkedinIn className="hover:text-blue-600 ml-5" size="20" />
            <FaTwitter className="hover:text-blue-600 ml-5" size="20" />
            <FaFacebookF className="hover:text-blue-600 ml-5" size="20" />
            <FaYoutube className="hover:text-red-600 ml-5" size="20" />
            <FaInstagram className="hover:text-blue-600 ml-5" size="20" />
          </div>
        </div>
      </div>

      {/* site link section */}
      <div>
        <div className="mob:my-8 ">
          <ul className=" flex mob:flex-col stab:flex-row stab:w-5/6 stab:flex-wrap">
            <NavLink name="Contact us" />
            <NavLink name="Connect" />
            <NavLink name="Subscribe" />
            <NavLink name="Term of use" />
            <NavLink name="Privacy" />
            <NavLink name="Cookie Policy" />
            <NavLink name="Sustainability" />
            <NavLink name="Sitemap" />
          </ul>
        </div>

        <p className="text-[#7f7f7f] text-base">
          &copy; Copyright Venture Desk 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
