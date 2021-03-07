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
import { test } from "./Data";

const ProjectsSection = () => {
  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <Header>
          <Headline>03. Projects</Headline>
          <Line />
        </Header>
        <ItemsWrapper>
          <Category>
            <CategoryTitle>Software Development</CategoryTitle>
            <ItemGrid>
              <Project {...test} />
              <Project {...test} />
            </ItemGrid>
          </Category>
          <Category>
            <CategoryTitle>Design</CategoryTitle>
            <ItemGrid>
              <Project {...test} />
              <Project {...test} />
            </ItemGrid>
          </Category>
        </ItemsWrapper>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
