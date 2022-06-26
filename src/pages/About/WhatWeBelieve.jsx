import Main from "../../components/AboutComponents/WhatWeBelieve/Main";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const WhatWeBeleive = () => {
  return (
    <>
      <div className="mob:h-[35px] stab:h-[65px] ltab:h-[75px] laptop:h-[108px]">
        <Navbar
          navMainColor="text-black"
          navSmallColor="text-gray-400"
          logoColor="red"
        />
      </div>
      <Main />
      <Footer />
    </>
  );
};

export default WhatWeBeleive;
