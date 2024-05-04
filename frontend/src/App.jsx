// App.js
import React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import Footer from './components/footer/Footer';
import Course from './components/course/Course';

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
       <div>
          <BrowserRouter>
              <Header/>
               <Routes>
                  <Route path='/home' element={<HeroSection/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/signin' element={<SignIn/>}/>
                  <Route path='/course' element={<Course/>}/>
               </Routes>
               <Footer/>
          </BrowserRouter>
           
       </div>
      
    
  );
}

export default App;


