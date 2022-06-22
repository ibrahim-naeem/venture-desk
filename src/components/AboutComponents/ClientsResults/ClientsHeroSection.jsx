import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import IndustriesModal from "./IndustriesModal";
import ServicesModal from "./ServicesModal";


const ClientsHeroSection = ({setModal}) => {
  const [industriesModal, setIndustriesModal] = useState(false);
  const [servicesModal, setServicesModal] = useState(false);

  if (industriesModal || servicesModal) {
    setModal(true)
  } else {
    setModal(false)
  }

  

  return (
    <div className="border-b-2 pb-2 w-100 ">
      <div className="flex mob:flex-col ltab:flex-row mob:px-2 ltab:px-5 ">
        <h1 className="mob:w-full ltab:w-1/2 mob:text-3xl stab:text-4xl ltab:text-5xl laptop:text-6xl font-bold mob:py-6 stab:p-10 ltab:p-14 laptop:p-20 ml-8 ">
          Client Results
        </h1>
        <p className="mob:w-full ltab:w-1/2 mob:text-sm tab:text-lg ltab:text-xl mob:py-6 stab:py-10 ltab:py-14 laptop:py-20 mx-10  pr-20">
          At Bain, bold thinking, inspired people and a passion for results come
          together for extraordinary impact. We work with clients who do not
          hide from the future but want to define it. Learn more by reading some
          of our client results stories.
        </p>
      </div>

      <div className="mob:w-[90vw] ltab:w-1/2 flex justify-between mob:ml-6 stab:ml-10 ltab:ml-14 laptop:ml-20 ltab:pl-2 ">
        <p className="mob:text-xs  stab:text-sm ltab:text-base text-slate-600 font-semibold p-2 m-2">
          Filter by:
        </p>
        <div className="flex">
          {/* buttonOne */}
          <button
            className="border hover:border-[#c00] text-[#c00] font-semibold p-2 m-2 flex mob:text-xs stab:text-sm ltab:text-base"
            onClick={() => setIndustriesModal(!industriesModal)}
          >
            Industries
            {!industriesModal ? (
              <AiFillCaretDown size="13" className="mt-1 ml-2" />
            ) : (
              <AiFillCaretUp size="13" className="mt-1 ml-2" />
            )}
          </button>
          {/* buttonTwo */}
          <button
            className="border hover:border-[#c00] text-[#c00] font-semibold p-2 m-2 flex mob:text-xs stab:text-sm ltab:text-base"
            onClick={() => setServicesModal(!servicesModal)}
          >
            Sevices
            {!servicesModal ? (
              <AiFillCaretDown size="13" className="mt-1 ml-2" />
            ) : (
              <AiFillCaretUp size="13" className="mt-1 ml-2" />
            )}
          </button>
        </div>
      </div>

      {industriesModal && (
        <div className="absolute mt-1">
          <IndustriesModal />
        </div>
      )}
      {servicesModal && (
        <div className="absolute mt-1">
          <ServicesModal />
        </div>
      )}
    </div>
  );
};

export default ClientsHeroSection;
