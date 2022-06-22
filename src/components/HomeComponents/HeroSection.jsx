import React from "react";
import heroImage1 from "../../assets/hero-image1.webp";
import heroImage2 from "../../assets/hero-image2.webp";
import heroImage3 from "../../assets/hero-image3.webp";
import heroImage4 from "../../assets/hero-image4.webp";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import "./animation.css";

const Intro = ({ title, heading, className }) => {
  return (
    <div className="w-[80%] text-white mob:ml-14 stab:ml-10  laptop:ml-[130px] xl:ml-20 stab:pl-10 relative mob:-top-6 stab:top-[50px] ltab:top-[120px] ">
      <p
        className={`mob:text-xs stab:text-base ltab:text-lg font-bold ${className}`}
      >
        {title}
      </p>
      <h1
        className={`mob:text-base stab:text-3xl ltab:text-4xl laptop:text-6xl font-bold   stab:py-5  ${className}`}
      >
        {heading}
      </h1>
      <div className="flex slide-right stab:mt-0">
        <button
          className={`mob:text-[10px] stab:text-sm laptop:text-base mob:font-semibold stab:font-bold pr-2`}
        >
          LEARN MORE
        </button>
        <MdOutlineArrowRightAlt size="40" color="white" />
      </div>
    </div>
  );
};

const Text = ({ title, textStyleing, barCondition }) => {
  return (
    <div className="mob:pl-3 stab:pl-0">
      <div className={`w-0 ${barCondition}`}></div>
      <h3
        className={`mob:text-[10px] stab:text-base ltab:text-lg  mob:font-semibold stab:font-bold mob:mt-1 stab:pt-5 ${textStyleing}`}
      >
        {title}
      </h3>
    </div>
  );
};

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [heroImage1, heroImage2, heroImage3, heroImage4],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 3000);
  }
  render() {
    return (
      <div className="relative">
        <div className="mob:h-[25vh] stab:h-[40vh] ltab:h-[85vh] laptop:h-[100vh] overflow-hidden">
          {this.state.currentImage == 0 && (
            <img src={heroImage1} className="kenburns-top w-[100vw] " />
          )}
          {this.state.currentImage == 1 && (
            <img src={heroImage2} className="kenburns-top w-[100vw] " />
          )}
          {this.state.currentImage == 2 && (
            <img src={heroImage3} className="kenburns-top w-[100vw] " />
          )}
          {this.state.currentImage == 3 && (
            <img src={heroImage4} className="kenburns-top w-[100vw] " />
          )}
        </div>
        <div className="flex justify-around relative mob:-top-[60px] stab:-top-[100px]">
          <Text
            title="M&A Report 2022"
            textStyleing={`${
              this.state.currentImage == 0 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 0 &&
              "w-[100%] bg-[#c00] mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />
          <Text
            title="Customer Love"
            textStyleing={`${
              this.state.currentImage == 1 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 1 &&
              "w-[100%] bg-[#c00] mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />

          <Text
            title="The Fabric of Belonging"
            textStyleing={`${
              this.state.currentImage == 2 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 2 &&
              "w-[100%] bg-[#c00] mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />

          <Text
            title="The Working Future"
            textStyleing={`${
              this.state.currentImage == 3 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 3 &&
              "w-[100%] bg-[#c00] mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />
        </div>

        <div className="absolute top-20 group">
          {this.state.currentImage == 0 && (
            <Intro
              className="slide-top"
              title="M&A Report"
              heading="Winnig in a white-hot M&A market"
            />
          )}

          {this.state.currentImage == 1 && (
            <Intro
              className="slide-top"
              title="Customer Love"
              heading="How to lead with Customer Love"
            />
          )}

          {this.state.currentImage == 2 && (
            <Intro
              className="slide-top"
              title="The Fabric of Belonging"
              heading="How to Weaven an Inclusive Culture"
            />
          )}

          {this.state.currentImage == 3 && (
            <Intro
              className="slide-top"
              title="The Working Future"
              heading="It's time to change how we think about work"
            />
          )}
        </div>
      </div>
    );
  }
}

export default HeroSection;
