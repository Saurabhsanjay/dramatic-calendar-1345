

import './App.css';
import React from 'react'
import Drawer from './Drawer';
import Carouselone from './components/Carouselone';
import BrandProducts from './components/BrandProducts';


const App = () => {
  return (
    <>
    <div>
      <Drawer/>
      
    </div>
    <Carouselone/>
    <BrandProducts/>
    </>
  )
}

export default App

