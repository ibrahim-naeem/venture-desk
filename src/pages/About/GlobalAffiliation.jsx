import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Main from '../../components/AboutComponents/GlobalAffiliation/Main';

const GlobalAffiliation = () => {
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

export default GlobalAffiliation;
