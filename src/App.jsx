// App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

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
