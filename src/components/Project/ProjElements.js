import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";

export const ProjContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
`;

export const ProjImgWrapper = styled.div`
  display: flex;
  flex-direction: start;
  margin-bottom: 30px;
`;

export const ProjImg = styled.img`
  max-width: 375px;
  /* height: 250px; */
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #797979;
  line-height: 25px;
  margin-bottom: 3px;
`;

export const Technology = styled.p`
  font-size: 18px;
  color: #e5e5e5;
  line-height: 25px;
  margin-bottom: 14px;
`;

export const WebLink = styled(LinkS)`
  font-size: 18px;
  color: #6164ab;
  line-height: 25px;
  text-decoration: none;
`;
