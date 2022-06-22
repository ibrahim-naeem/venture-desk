import React from 'react'
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

const AboutDropdown = () => {
  return (
    <DropDown>
      <Link to="/about">
        <h1 className="text-2xl font-bold pl-5 hover:text-[#c00] w-96">
          About
        </h1>
      </Link>

      <div className="flex justify-between  p-5 ">
        {/* COLUMN ONE */}
        <div>
          <ul className="text-lg font-bold pr-20">
            <li className="py-2 hover:text-[#c00]">
              <Link to="/about/what-we-do">What We Do</Link>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <Link to="/about/what-we-believe">What We Believe</Link>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <Link to="/about/our-people">Our People & Leadership</Link>
            </li>
          </ul>
        </div>
        {/* COLUMN TWO */}

        <div>
          <ul className="text-lg font-bold pr-20">
            <li className="py-2 hover:text-[#c00]">
              <Link to="/about/clients-results">Client Results</Link>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <Link to="/about/awards-and-recognition">
                Awards & Recognition
              </Link>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <Link to="/about/global-affiliation">Global Affiliations</Link>
            </li>
          </ul>
        </div>

        {/* DIVIDER */}
        <div className="border-r border-grey-500 h-[200px] mr-5 relative -top-10"></div>

        {/* COLUMN THREE */}
        <div className="">
          <ul className="pr-20">
            <li className=" hover:text-[#c00] text-[#777] text-lg font-semibold relative -top-[45px]">
              <a>Further: Our global responsibility</a>
            </li>
            <li className="py-2 hover:text-[#c00] text-base font-semibold relative -top-[30px]">
              <a>Diversity, Equity & Inclusion</a>
            </li>
            <li className="pl-5 hover:text-[#c00] text-sm relative -top-[30px]">
              <a>2021 Diversity, Equity & Inclusion Report</a>
            </li>
            <li className="py-2 text-[#c00] font-semibold relative top-10">
              <a>Learn more about Further</a>
            </li>
          </ul>
        </div>
        {/* COLUMN FOUR */}

        <div className="">
          <ul className="text-lg font-bold pr-20 relative -left-16">
            <li className="py-2 hover:text-[#c00]">
              <a>Social Impact</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Sustainability</a>
            </li>
          </ul>
        </div>
      </div>
    </DropDown>
  );
}

export default AboutDropdown
