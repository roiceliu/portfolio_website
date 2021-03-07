import React from "react";
import {
  Description,
  ProjContainer,
  ProjImg,
  ProjImgWrapper,
  Technology,
  TextWrapper,
  WebLink,
} from "./ProjElements";

const Project = ({ img, alt, description, techTools, url, projName }) => {
  return (
    <ProjContainer>
      <ProjImgWrapper>
        <ProjImg src={img} alt={alt} />
      </ProjImgWrapper>
      <TextWrapper>
        <Description>{description}</Description>
        <Technology>{techTools}</Technology>
        <WebLink to={url}> Check out {projName} >> </WebLink>
      </TextWrapper>
    </ProjContainer>
  );
};

export default Project;
