import React from "react";
import {
  GraphicsText,
  GraphicsWrapper,
  HeroContainer,
  HeroWrapper,
  Rectangle,
  HeroHeadline,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroHeadline>I design and develop software.</HeroHeadline>
        <GraphicsWrapper>
          <Rectangle></Rectangle>
          <GraphicsText>ROICELIU</GraphicsText>
        </GraphicsWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
