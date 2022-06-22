import DropDown from "./DropDown";


const IndustriesDropdown = () => {
  return (
    <DropDown>
      <h1 className="text-xl font-bold pl-5 hover:text-[#c00]">Industries</h1>
      <div className="flex justify-between  p-5 ">
        {/* COLUMN ONE */}
        <div>
          <ul className="text-base font-bold pr-20">
            <li className="py-2 hover:text-[#c00]">
              <a>Aerospace & Defense</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Automotive & Mobility</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Aviation</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Consumer Products</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Energy & Natural Resources</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Agribusiness</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Chemicals</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Mining</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Oil & Gas</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Utilities & Renewables</a>
            </li>
          </ul>
        </div>
        {/* COLUMN TWO */}

        <div>
          <ul className="text-base font-bold pr-20">
            <li className="py-2 hover:text-[#c00]">
              <a>Financial Services</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Banking</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Insurance</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Payments</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Wealth & Asset Management</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Fintech</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Digital Assets and Blockchain</a>
            </li>
            <li className="py-2 hover:text-[#c00">
              <a>Forest Products, Paper & Packaging</a>
            </li>
            <li className="py-2 hover:text-[#c00">
              <a>Healthcare</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Pharmaceuticals</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Medical Technology</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Healthcare Payers</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Healthcare Providers and Services</a>
            </li>
          </ul>
        </div>

        {/* COLUMN THREE */}
        <div>
          <ul className="text-base font-bold pr-20">
            <li className="py-2 hover:text-[#c00]">
              <a>Infrastructure & Construction</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Machinery & Equipment</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Media & Entertainment</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Metals</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Private Equity</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Real Estate</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Retail</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Grocery</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Fashion & Luxury</a>
            </li>
            <li className=" pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Restaurants</a>
            </li>
          </ul>
        </div>
        {/* COLUMN FOUR */}

        <div>
          <ul className="text-base font-bold pr-20">
            <li className=" hover:text-[#c00]">
              <a>Social & Public Sector</a>
            </li>
            <li className=" pl-5 pb-3 hover:text-[#c00] text-sm font-normal">
              <a>Higher Education</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Technology</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Cloud Computing</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Hardware</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>IT Semiconductors</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Software</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Telecommunications</a>
            </li>
            <li className="py-2 hover:text-[#c00]">
              <a>Transportation</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Freight & Logistics</a>
            </li>
            <li className="py-1 pl-5 hover:text-[#c00] text-sm font-normal">
              <a>Public Transit</a>
            </li>
          </ul>
        </div>
      </div>
    </DropDown>
  );
}

export default IndustriesDropdown


