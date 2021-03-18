import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #19181a;
  min-height: 600px;
  padding: 8vh 16vw;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 100px 12vw;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-left: 0;
  margin-right: 0;
  z-index: 10px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  max-width: 1000px;
  padding: 0;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;

  grid-template-areas: ${({ ImgStart }) =>
    ImgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1000px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-right: 20px;
  grid-area: col1;
  align-self: start;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: 20px;
  grid-area: col2;
  justify-self: end;
`;

export const AboutTxtWrapper = styled.div`
  max-width: 400px;
  min-width: 200px;
  padding-bottom: 60px;
  padding-top: 30px;

  @media screen and (max-width: 1000px) {
    max-width: 540px;
  }
`;

export const Headline = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 2px;
  color: #e5e5e5;
`;
export const Line = styled.hr`
  border: none;
  border-top: 2px solid rgba(161, 110, 131, 0.72);
  width: 101px;
  margin-bottom: 36px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  max-width: 400px;
  color: #797979;
  margin-bottom: 20px;
  line-height: 25px;

  @media screen and (max-width: 1000px) {
    max-width: 500px;
  }
`;

export const ImgWrapper = styled.div`
  margin-bottom: 60px;
  max-width: 550px;
  min-width: 300px;
  height: 100%;

  @media screen and (max-width: 1000px) {
    min-width: 0px;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  max-width: 400px;
  padding: 0 0 10px 0;
  padding-right: 0;
`;
