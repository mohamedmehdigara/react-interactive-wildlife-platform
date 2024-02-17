// components/About.js
import React from 'react';
import styled from 'styled-components';

// Styled components for better styling
const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  margin-bottom: 10px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis, nisl in pretium
        vehicula, arcu eros lacinia quam, ac feugiat ex nibh in eros. Proin tristique ipsum id
        sapien porta, et ultrices nisi posuere. Sed elementum libero ut tellus aliquet dictum.
        Quisque ac quam enim. Vivamus vel est id urna gravida posuere. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Donec a est in risus accumsan
        vulputate nec vel magna. Fusce in nisi at nisi vulputate laoreet.
      </Description>
      <ListContainer>
        <Title>Our Mission</Title>
        <ListItem>
          <BoldText>Empowerment:</BoldText> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ListItem>
        <ListItem>
          <BoldText>Conservation:</BoldText> Sed elementum libero ut tellus aliquet dictum.
        </ListItem>
        <ListItem>
          <BoldText>Education:</BoldText> Vivamus vel est id urna gravida posuere.
        </ListItem>
      </ListContainer>
      <ListContainer>
        <Title>Our Team</Title>
        <ListItem>
          <BoldText>John Doe</BoldText> - CEO
        </ListItem>
        <ListItem>
          <BoldText>Jane Smith</BoldText> - Conservation Scientist
        </ListItem>
        <ListItem>
          <BoldText>Michael Johnson</BoldText> - Wildlife Biologist
        </ListItem>
      </ListContainer>
    </AboutContainer>
  );
};

export default About;
