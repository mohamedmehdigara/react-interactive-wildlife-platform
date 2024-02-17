// components/Header.js
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  /* Styles for header */
  background-color: #007bff;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.h1`
  /* Styles for logo */
  font-size: 24px;
  margin: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Wildlife Conservation Platform</Logo>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
