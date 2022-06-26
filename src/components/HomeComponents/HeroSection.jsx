import React from "react";
import heroImage1 from "../../assets/slider-img-1.jpg";
import heroImage2 from "../../assets/slider-img-2.jpg";
import heroImage3 from "../../assets/slider-img-3.jpg";
import heroImage4 from "../../assets/slider-img-4.jpeg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

import "./animation.css";

const Intro = ({ title, heading, className }) => {
  return (
    <div className="w-[80%] text-white mob:ml-14 stab:ml-10  laptop:ml-[130px] xl:ml-20 stab:pl-10 relative mob:-top-6 stab:top-[50px] ltab:top-[120px] ">
      <p
        className={`mob:text-xs stab:text-base ltab:text-lg  laptop:w-[70%] ${className}`}
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
        <div className="mob:h-[25vh] stab:h-[40vh] ltab:h-[85vh] laptop:h-[90vh] overflow-hidden">
          {this.state.currentImage == 0 && (
            <img
              src={heroImage1}
              className="kenburns-top w-[100vw]"
              alt="hero section background"
            />
          )}
          {this.state.currentImage == 1 && (
            <img
              src={heroImage2}
              className="kenburns-top w-[100vw]"
              alt="hero section background"
            />
          )}
          {this.state.currentImage == 2 && (
            <img
              src={heroImage3}
              className="kenburns-top w-[100vw]"
              alt="hero section background"
            />
          )}
          {this.state.currentImage == 3 && (
            <img
              src={heroImage4}
              className="kenburns-top w-[100vw] h-[90vh]"
              alt="hero section background"
            />
          )}
        </div>
        <div className="flex justify-around relative mob:-top-[60px] stab:-top-[100px]">
          <Text
            title="AI and AR"
            textStyleing={`${
              this.state.currentImage == 0 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 0 &&
              "w-[100%] bg-white mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />
          <Text
            title="Enterprise Development"
            textStyleing={`${
              this.state.currentImage == 1 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 1 &&
              "w-[100%] bg-white mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />

          <Text
            title="Mobile Applications"
            textStyleing={`${
              this.state.currentImage == 2 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 2 &&
              "w-[100%] bg-white mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />

          <Text
            title="NonFungible Tokens"
            textStyleing={`${
              this.state.currentImage == 3 ? "text-white" : "text-[#8398A5]"
            }`}
            barCondition={`${
              this.state.currentImage == 3 &&
              "w-[100%] bg-white mob:h-[1.5px] stab:h-1 ease-in duration-[3000ms]"
            }`}
          />
        </div>

        <div className="absolute top-20 group">
          {this.state.currentImage == 0 && (
            <Intro
              className="slide-top"
              title="Revolutionizing the world of augmented reality and bringing artificial intelligence to life."
              heading="Artificial Intelligence and Augmented Reality "
            />
          )}

          {this.state.currentImage == 1 && (
            <Intro
              className="slide-top"
              title="Unlock the potential of enterprise portals by integrating data repositories and content management systems into a single system that delivers seamless user experience."
              heading="Revolutionizing Enterprises Digitally "
            />
          )}

          {this.state.currentImage == 2 && (
            <Intro
              className="slide-top"
              title="Custom mobile apps. User experience & design. Engagement & intelligence. Native & cross-platform"
              heading="Modernizing Mobile Platforms"
            />
          )}

          {this.state.currentImage == 3 && (
            <Intro
              className="slide-top"
              title="Harness blockchain technology to bring real monetary value to your game, with unique asset ownership and investment opportunities."
              heading="NFT Game Development"
            />
          )}
        </div>
      </div>
    );
  }
}

export default HeroSection;
