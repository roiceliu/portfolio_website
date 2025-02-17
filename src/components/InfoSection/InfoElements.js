import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#19181A" : "#000000")};
  display: flex;
  justify-content: center;
  height: 800px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    min-height: 600px;
  }
`;

export const InfoWapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-height: 400px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  /* min: auto, max:1 flex ratio, -- 1 flex: 1 chunk of entire content */
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  /* use the matrix to assign propotion of each content in grid, col2: image col */
  grid-gap: 200px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`};
    grid-gap: 0px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 300;
  color: ${({ lightText }) => (lightText ? "#E5E5E5" : "#010606")};

  /* mobile version */
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 25px;
  color: ${({ LightTextDesc }) => (LightTextDesc ? "#fff" : "#010606")};
`;

export const BtnWrap = styled.div`
  display: flex;
  /* align left */
  justify-content: flex-start;
`;

export const Button = styled.a`
  background: #a39054;
  border-radius: 10px;
  padding: 20px 20px;
  color: black;
  text-decoration: none;
  transition: 0.2s all ease-in-out;

  &:hover {
    background: #d6bd6c;
  }
`;

export const ImgWrap = styled.div`
  max-width: 300px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
