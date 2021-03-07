import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";

export const ProjContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
`;

export const ProjImgWrapper = styled.div`
  /* this is for hover scale-up effect */
  position: relative;
  overflow: hidden;
`;

export const ProjImg = styled.img`
  width: 100%;
  transition: 0.5s all ease-in-out;
`;

export const Details = styled.div`
  display: none;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background: rgba(161, 110, 131, 0.3);
  transition: 0.5s all ease-in-out;
`;

export const Content = styled.h3`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
`;

export const ProjBox = styled.div`
  position: relative;
  max-width: 375px;
  margin-bottom: 30px;

  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }

  //when hovering on box, effect on the ProjImg
  &:hover ${ProjImg} {
    transform: scale(1.05);
  }

  &:hover ${Details} {
    display: flex;
    justify-content: center;
    transition: 1s all ease-in-out;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  margin-bottom: 25px;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }
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
