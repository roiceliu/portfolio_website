import React from "react";
import { Headline, Line } from "../AboutSection/AboutElements";
import { WorkContainer } from "./WorkElements";

const WorkSection = () => {
  return (
    <WorkContainer>
      <Headline>02. Experience</Headline>
      <Line />
      <Experiences />
    </WorkContainer>
  );
};

export default WorkSection;
