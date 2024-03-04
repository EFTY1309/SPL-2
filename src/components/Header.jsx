import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 30px;
  background: linear-gradient(to right, #B4E8EF, #78D5E3, #080034);
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixed position */
  top: 0; /* Position at the top */
  width: 100%; /* Full width */
  z-index: 1000; /* Ensure it appears above other elements */
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
