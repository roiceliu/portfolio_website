import React from "react";
import {
  AboutContainer,
  AboutRow,
  AboutTxtWrapper,
  AboutWrapper,
  Column1,
  Column2,
  Headline,
  ImgWrapper,
  Line,
  ProfileImg,
  Subtitle,
} from "./AboutElements";

const AboutSection = ({ img, alt, desc1, desc2, desc3, ImgStart }) => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutRow ImgStart={ImgStart}>
          <Column1>
            <AboutTxtWrapper>
              <Headline> 01. About </Headline>
              <Line width="101px" />
              <Subtitle>{desc1}</Subtitle>
              <Subtitle>{desc2}</Subtitle>
              <Subtitle>{desc3}</Subtitle>
            </AboutTxtWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <ProfileImg src={img} alt={alt}></ProfileImg>
            </ImgWrapper>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
