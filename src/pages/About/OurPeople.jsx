import Main from "../../components/AboutComponents/OurPeople/Main";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const OurPeople = () => {
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

export default OurPeople;
