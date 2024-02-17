// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import DonationForm from './components/DonationForm';
import ProjectDetailsModal from './components/ProjectDetailsModal'; // Import the modal component here


const Container = styled.div`
  /* Styles for main container */
`;

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Save the Tigers', description: 'Help protect tiger habitats', targetAmount: 5000 },
    { id: 2, name: 'Protect Sea Turtles', description: 'Conserve sea turtle nesting grounds', targetAmount: 3000 },
    { id: 3, name: 'Preserve the Amazon Rainforest', description: 'Support efforts to combat deforestation', targetAmount: 10000 }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleDonation = (amount, projectId) => {
    // Handle donation logic
    console.log(`Donating ${amount} to project with id ${projectId}`);
  };

  return (
    <Container>
      <Header />
      <div>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onDonate={handleDonation} />
        ))}
      </div>
      <DonationForm />
      <Footer />
      
    </Container>
  );
};

export default App;
