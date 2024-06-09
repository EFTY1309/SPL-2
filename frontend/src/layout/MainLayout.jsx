import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BackToTopButton from '../components/backToTopButton/BackToTopButton';

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <div>{children}</div>
        <Footer />
        <BackToTopButton />
    </div>
  );
};

export default MainLayout;
