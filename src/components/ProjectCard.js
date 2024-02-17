// components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  /* Styles for project card */
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  /* Styles for project title */
  margin-bottom: 10px;
`;

const Description = styled.p`
  /* Styles for project description */
  margin-bottom: 15px;
`;

const DonateButton = styled.button`
  /* Styles for donate button */
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectCard = ({ project, onDonate }) => {
  const handleDonateClick = () => {
    onDonate(project.targetAmount, project.id);
  };

  return (
    <Card>
      <Title>{project.name}</Title>
      <Description>{project.description}</Description>
      <DonateButton onClick={handleDonateClick}>Donate</DonateButton>
    </Card>
  );
};

export default ProjectCard;
