// App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Homepage/Header';
import HeroSection from './components/Homepage/HeroSection';
import Footer from './components/Homepage/Footer';

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
