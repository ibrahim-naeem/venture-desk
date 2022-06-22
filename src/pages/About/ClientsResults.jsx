import Main from "../../components/AboutComponents/ClientsResults/Main";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ClientsResults = () => {
  return (
    <div className="border">
      <div className="mob:h-8 ltab:h-[107px] ">
        <Navbar
          navMainColor="text-black"
          navSmallColor="text-gray-400"
          logoColor="red"
        />
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default ClientsResults;
