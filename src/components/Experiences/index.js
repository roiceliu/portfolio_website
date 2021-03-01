import React from "react";

const Experiences = ({ jobTitle, company, startDate, endDate, tools }) => {
  return (
    <ExpContainer>
      <JobWrapper>
        <JobTitile>{jobTitle}</JobTitile>
        <Company>&commat {company}</Company>
      </JobWrapper>
      <Date>
        {startDate} - {endDate}
      </Date>
      <Description>{description}</Description>

      <TechWrapper>
        <ToolTitle>Tools &amp Languages</ToolTitle>
        <ToolContent>{tools}</ToolContent>
      </TechWrapper>
    </ExpContainer>
  );
};

export default Experiences;
