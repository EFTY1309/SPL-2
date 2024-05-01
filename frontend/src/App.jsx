// App.js
import React from 'react';
import styled from 'styled-components';
import Homepage from './pages/Homepage';

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Homepage />
    </AppContainer>
  );
}

export default App;
