import React from "react";
import { Headline, Line } from "../AboutSection/AboutElements";
import Experiences from "../Experiences";
import { exp1 } from "./Data";
import { WorkContainer } from "./WorkElements";

const WorkSection = () => {
  return (
    <WorkContainer>
      <Headline>02. Experience</Headline>
      <Line />
      <Experiences {...exp1} />
      <Experiences {...exp1} />
      <Experiences {...exp1} />
    </WorkContainer>
  );
};

export default WorkSection;
