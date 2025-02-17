import styled from "styled-components";

export const WorkContainer = styled.div`
  background: #000;
  padding: 130px 16vw;
  display: flex;
  height: 1400px;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    height: 1500px;
  }

  @media screen and (max-width: 768px) {
    padding: 100px 12vw;
    height: auto;
  }
`;
export const WorkWrapper = styled.div``;
