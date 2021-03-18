import styled from "styled-components";
import "../../App.css";
// import Triangle from "../../images/hero_tri.svg";

export const HeroContainer = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  min-height: 600px;
  padding-top: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  /* @media screen and (max-width: 768px) {
    height: 800px;
  } */
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 2000px;
  padding: 0 3vw;
  padding-top: 110px;
  margin-left: 5vw;
  overflow: hidden;
`;

export const HeroHeadline = styled.h2`
  font-family: "Montserrat Subrayada", sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  align-self: flex-end;
  color: #a16e83;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;

  /* @media screen and (max-width: 768px) {
    position: absolute;
    top: 15vh;
    transform: rotate(-27.3deg);
    width: 317px;
    text-align: right;
    margin-right: 10vw;
  } */
`;

export const GraphicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: -3vw;
  margin-top: -7px;

  /* to hide extended rectangle */
  /* @media screen and (max-width: 768px) {
    margin-right: 0;
  } */
`;

export const Rectangle = styled.div`
  /* background: rgba(161, 110, 131, 0.72); */
  background: linear-gradient(
      236.59deg,
      rgba(255, 255, 255, 0.17) 13.06%,
      rgba(255, 255, 255, 0) 55.73%
    ),
    rgba(161, 110, 131, 0.72);
  width: 100%;
  height: 400px;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    height: 350px;
  }

  /* narrow the rectangle */
  @media screen and (max-width: 768px) {
    height: 250px;
  }

  /* @media screen and (max-width: 768px) { */
  /* make a triangle */
  /* position: absolute;
    top: 22.5vh;
    right: 0;
    background: none;
    width: 0;
    height: 0;
    border: 300px solid transparent;
    border-bottom: 600px solid rgba(161, 110, 131, 0.72);
    transform: rotate(-90deg) scale(0.7) translateX(-3vw);
    margin-top: -200px;
  } */
`;

export const GraphicsText = styled.h1`
  font-family: "Montserrat Subrayada", sans-serif;
  font-size: 288px;
  font-weight: 500;
  line-height: 351px;
  color: #a5a2a2;
  margin-top: -200px;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    font-size: 240px;
  }

  @media screen and (max-width: 768px) {
    font-size: 120px;
    margin-top: -180px;
  }
`;
