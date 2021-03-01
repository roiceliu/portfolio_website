import React from "react";
import {
  Company,
  Description,
  ExpContainer,
  JobTitile,
  JobWrapper,
  TechWrapper,
  ToolContent,
  ToolTitle,
  Date,
} from "./ExpElements";

const Experiences = ({
  jobTitle,
  company,
  startDate,
  endDate,
  tools,
  description,
}) => {
  return (
    <ExpContainer>
      <JobWrapper>
        <JobTitile>{jobTitle}</JobTitile>
        <Company> @ {company}</Company>
      </JobWrapper>
      <Date>
        {startDate} - {endDate}
      </Date>
      <Description>{description}</Description>

      <TechWrapper>
        <ToolTitle>Tools & Languages</ToolTitle>
        <ToolContent>{tools}</ToolContent>
      </TechWrapper>
    </ExpContainer>
  );
};

export default Experiences;
