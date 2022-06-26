import React from "react";
import Careers from "../components/HomeComponents/Careers";
import Clients from "../components/HomeComponents/Clients";
import Footer from "../components/Footer";
import Help from "../components/HomeComponents/Help";
import HeroSection from "../components/HomeComponents/HeroSection";
import Insights from "../components/HomeComponents/Insights";
import Navbar from "../components/Navbar/Navbar";
import Questions from "../components/HomeComponents/Questions";

const home = () => {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <HeroSection />
      <Questions />
      <Clients />

      <Careers />

      <Insights />
      <Help />
      <Footer />
    </div>
  );
};

export default home;
