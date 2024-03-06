import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 70px; // Adjusted for better visibility and spacing
  background: linear-gradient(to right, #B4E8EF, #78D5E3, #080034);
  color: #fff;
  padding: 0 20px; // Adjust padding for content alignment
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0; // Ensure the header starts from the very left edge
  width: 100%; // Ensure the header takes the full width
  z-index: 1000; // Keep it above other content
`;

const Logo = styled.div`
  img {
    width: 150px;
    transition: transform 0.3s ease; /* Apply transition for smooth effect */
  }

  img:hover {
    transform: scale(1.1); /* Increase size on hover */
  }

  cursor: pointer;
`;

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    margin-right: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease; /* Apply transition for smooth effect */
  }

  ul li:hover {
    color: #314E74;
    transform: scale(1.2); /* Increase size on hover */
  }
`;

const AuthButtons = styled.div`
  button {
    background-color: #fff;
    color: #080034;
    border: none;
    padding: 10px 20px;
    margin-left: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #78D5E3;
    color: #080034;
    transform: scale(1.1); /* Increase size on hover */
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src="../../public/images/Logo.png" alt="Dhaka University Swimming Pools Logo" />
      </Logo>
      <Navigation>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Schedule</li>
          <li>Contact</li>
        </ul>
      </Navigation>
      <AuthButtons>
        <button>Sign In</button>
        <button>Register</button>
      </AuthButtons>
    </HeaderContainer>
  );
}

export default Header;
