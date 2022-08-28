

import './App.css';
import React from 'react'
import Drawer from './Drawer';
import Carouselone from './components/Carouselone';
import BrandProducts from './components/BrandProducts';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <div>
      <Drawer/>
      
    </div>
    <Carouselone/>
    <BrandProducts/>
    <Footer/>
    </>
  )
}

export default App

