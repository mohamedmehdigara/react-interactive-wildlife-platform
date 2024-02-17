// components/ProjectDetailsModal.js
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  /* Styles for modal overlay */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  /* Styles for modal content */
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  /* Styles for close button */
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>Target Amount: ${project.targetAmount}</p>
        {/* Additional project details can be added here */}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectDetailsModal;
