import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background: #19181a;
  padding: 130px 16vw;

  @media screen and (max-width: 1000px) {
    padding: 100px 12vw;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const CategoryTitle = styled.h1`
  font-size: 24px;
  line-height: 33px;
  color: #e5e5e5;
  margin-bottom: 50px;
`;
export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
  grid-gap: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    grid-gap: auto;
  }
`;
