import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import { dataAbout, dataContact, dataExp, dataWork } from "./Data";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection {...dataAbout} />
      {/* <HeroSection {...dataWork} />
      <HeroSection {...dataExp} />
      <HeroSection {...dataContact} /> */}
    </>
  );
};

export default Home;
