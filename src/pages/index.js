import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { dataAbout } from "./Data";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection {...dataAbout} />
    </>
  );
};

export default Home;
