// ************Experience Component: for Employment*****************
import React from "react";
import { Headline, Line } from "../AboutSection/AboutElements";
import Experiences from "../Experiences";
import { exp1, exp2, exp3 } from "./Data";
import { WorkContainer, WorkWrapper } from "./ExpElements";

const ExpSection = () => {
  return (
    <WorkContainer id="experience">
      <WorkWrapper>
        <Headline>02. Experience</Headline>
        <Line />
        <Experiences {...exp1} />
        <Experiences {...exp2} />
        <Experiences {...exp3} />
      </WorkWrapper>
    </WorkContainer>
  );
};

export default ExpSection;
