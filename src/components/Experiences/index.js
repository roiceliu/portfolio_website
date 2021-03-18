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
  DescList,
} from "./ExpElements";

const Experiences = ({
  jobTitle,
  company,
  startDate,
  endDate,
  tools,
  desc1,
  desc2,
  desc3,
  desc4,
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
      <DescList>
        <Description>{desc1}</Description>
        <Description Empty={desc2 === undefined}>{desc2}</Description>
        <Description Empty={desc3 === undefined}>{desc3}</Description>
      </DescList>

      <TechWrapper>
        <ToolTitle>Tools & Languages</ToolTitle>
        <ToolContent>{tools}</ToolContent>
      </TechWrapper>
    </ExpContainer>
  );
};

export default Experiences;
