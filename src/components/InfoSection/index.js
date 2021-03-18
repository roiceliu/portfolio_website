import React from "react";
// import { Button } from "../ButtonElements";

import {
  BtnWrap,
  Button,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  LightTextDesc,
  headline,
  imgStart,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle LightTextDesc={LightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button href="mailto:roiceliu2@gmail.com">
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
