
import Main from '../../components/AboutComponents/About/Main';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <div className='w-[100vw] overflow-hidden'>
      <div className="h-[108px]">
        <Navbar
          navMainColor="text-black"
          navSmallColor="text-gray-400"
          logoColor="red"
        />
      </div>
      <Main/>
      <Footer />
    </div>
  );
}

export default About