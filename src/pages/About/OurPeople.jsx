import Main from "../../components/AboutComponents/OurPeople/Main";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const OurPeople = () => {
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

export default OurPeople;
