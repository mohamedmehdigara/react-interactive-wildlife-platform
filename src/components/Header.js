// components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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

const Navigation = styled.nav`
  /* Styles for navigation */
  margin-top: 20px;
`;

const StyledLink = styled(NavLink)`
  /* Styles for navigation links */
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }

  &.active {
    background-color: #0056b3;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Wildlife Conservation Platform</Logo>
      <NavLink>
        <Link exact to="/" activeClassName="active">Home</Link>
        <Link to="/projects" activeClassName="active">Projects</Link>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/contact" activeClassName="active">Contact</Link>
      </NavLink>
    </StyledHeader>
  );
};

export default Header;
