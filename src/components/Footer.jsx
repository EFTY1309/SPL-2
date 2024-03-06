import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #10567A;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #005ce6;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2023 Dhaka University Swimming Pools. All rights reserved.</p>
      <FooterLinks>
        <Link href="#">Home</Link>
        <Link href="#">Courses</Link>
        <Link href="#">Schedule</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        {/* Add more links here */}
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
