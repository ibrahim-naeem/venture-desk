import Main from "../../components/AboutComponents/WhatWeDo/Main";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const WhatWeDo = () => {
  return (
    <>
      <div className="h-[107px]">
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

export default WhatWeDo;
