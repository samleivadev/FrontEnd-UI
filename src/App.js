import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import PageSwitch from './components/app-router/index';
import React from 'react';

function App() {
  return (
    
    <>
      <BrowserRouter>
      <Header />
      <PageSwitch />
      <Footer />
      
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
