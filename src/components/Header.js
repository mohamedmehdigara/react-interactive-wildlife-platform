// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Header = () => {
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

const NavLink = styled(Link)`
  /* Styles for navigation links */
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
`;
  return (
    <StyledHeader>
      <Logo>Wildlife Conservation Platform</Logo>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
