import React from "react";
import { Headline, Line } from "../AboutSection/AboutElements";
import {
  Category,
  CategoryTitle,
  Header,
  ItemGrid,
  ItemsWrapper,
  ProjectsContainer,
  ProjectsWrapper,
} from "./ProjectsElements";
import Project from "../Project";
import {
  designdata1,
  designdata2,
  SEdata1,
  SEdata2,
  SEdata3,
  SEdata4,
} from "./Data";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <Header>
          <Headline>03. Projects</Headline>
          <Line />
        </Header>
        <ItemsWrapper>
          <Category>
            <CategoryTitle>Software Development</CategoryTitle>
            <ItemGrid>
              <Project {...SEdata4} />
              <Project {...SEdata3} />
              <Project {...SEdata1} />
              <Project {...SEdata2} />
            </ItemGrid>
          </Category>
          <Category>
            <CategoryTitle>Design</CategoryTitle>
            <ItemGrid>
              <Project {...designdata1} />
              <Project {...designdata2} />
            </ItemGrid>
          </Category>
        </ItemsWrapper>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
