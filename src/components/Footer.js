// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  /* Styles for footer */
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.a`
  /* Styles for footer links */
  color: #007bff;
  text-decoration: none;
  margin: 0 10px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Contact Us</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
      </p>
      <p>&copy; {new Date().getFullYear()} Wildlife Conservation Platform</p>
    </StyledFooter>
  );
};

export default Footer;
