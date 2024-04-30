// App.js
import React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Header from './components/header/Header';
import HeroSection from './components/hero/HeroSection';
import Footer from './components/footer/Footer';

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
       <div>
          <BrowserRouter>
              <Header/>
               <Routes>
                  <Route path='/' element={<HeroSection/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/signin' element={<SignIn/>}/>
               </Routes>
               <Footer/>
          </BrowserRouter>
           
       </div>
      
    
  );
}

export default App;


{/* <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory  banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div> */}