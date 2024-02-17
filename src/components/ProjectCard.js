// components/ProjectCard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectDetailsModal from './ProjectDetailsModal';
import FilterBar from './FilterBar';
import RecentUpdatesFeed from './RecentUpdatesFeed';


const Card = styled.div`
  /* Styles for project card */
`;

const ProjectCard = ({ project, onDonate, filters, onFilterChange, updates }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDonateClick = () => {
    onDonate(project.targetAmount, project.id);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Card>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={handleDonateClick}>Donate</button>
      <button onClick={handleShowModal}>Details</button>
      {/* Render the modal when showModal is true */}
      {showModal && (
        <ProjectDetailsModal 
          project={project} 
          onClose={handleCloseModal} 
        />
      )}
            <FilterBar filters={filters} onFilterChange={onFilterChange} />
            <RecentUpdatesFeed updates={updates} />


    </Card>
  );
};

export default ProjectCard;
