import React from "react";
import {
  Content,
  Description,
  Details,
  ProjBox,
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
      <ProjBox>
        <ProjImgWrapper>
          <ProjImg src={img} alt={alt} />
        </ProjImgWrapper>
        {/* the overlay effect */}
        <Details>
          <Content>{projName}</Content>
        </Details>
      </ProjBox>

      <TextWrapper>
        <Description>{description}</Description>
        <Technology>{techTools}</Technology>
        <WebLink to={url}> Check out {projName} >> </WebLink>
      </TextWrapper>
    </ProjContainer>
  );
};

export default Project;
