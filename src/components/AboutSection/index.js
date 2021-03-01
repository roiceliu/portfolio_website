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

const AboutSection = ({ img, alt, description, ImgStart }) => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutRow ImgStart={ImgStart}>
          <Column1>
            <AboutTxtWrapper>
              <Headline> 01. About </Headline>
              <Line />
              <Subtitle>{description}</Subtitle>
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
