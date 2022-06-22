import FormSection from "../shared/FormSection";
import AboutHeroSection from "../shared/AboutHeroSection";
import background from "../../../assets/about-2.jpg";
import { Navbar } from "../shared/Navbar";
import MidSection from "./MidSection";
import CardSection from "./CardSection";
import Passion from "./Passion";
import img from "../../../assets/about.png";
import ImageZoomBox from '../shared/ImageZoomBox';
import Explore from "./Explore";



const Main = () => {
  return (
    <div>
      <AboutHeroSection
        background={background}
        small="About Bain"
        main="What We Believe"
        text="We believe that bold steps define the future. That the ambition to lead requires the courage to adapt. And that doing the right thing is rarely easy, but always worth it."
      />
      <Navbar
        h3="What We Believe"
        p1="Overview"
        p2="Our Mission"
        p3="True North"
        p4="Passion for Results"
      />
      <MidSection />
      <CardSection />
      <Passion />
      <ImageZoomBox img={img} text="Bold steps define the future." />
      <Explore />
      <FormSection />
    </div>
  );
};

export default Main;


 

 

 

 
