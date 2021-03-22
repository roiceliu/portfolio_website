import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import Sidebar from "../components/Sidebar";
import ExpSection from "../components/ExpSection";
import { dataAbout, dataHero, InfoContact } from "./Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection {...dataHero} />
      <AboutSection {...dataAbout} />
      <ExpSection />
      <ProjectsSection />
      <InfoSection {...InfoContact} />
    </>
  );
};

export default Home;
