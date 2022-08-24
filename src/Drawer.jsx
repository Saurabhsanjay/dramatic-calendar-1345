import React from 'react'

import { Scrollbars } from 'react-custom-scrollbars-2';
import { MdMessage } from "react-icons/md";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineScreenshot } from "react-icons/md";
import { MdDvr } from "react-icons/md";
const Drawer = () => {
  return (
    <>
    <div class="drawer">
      <div class="dropdown">
  <button class="dropbtn"><MdOutlineScreenshot/> Save BIG with our App</button>
  <div class="dropdown-content">
   <img style={{width:"250px"}} src="https://i.im.ge/2022/08/23/O00t2c.acd.jpg" alt="" />
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Languages</button>
  
  <div class="dropdown-content">
  


    <a href="#">English</a>
    <a href="#">Spanish</a>
    <a href="#">Turkish</a>
    <a href="#">Italiano</a>
    <a href="#">Magyar</a>
    <a href="#">Deutsch</a>
    <a href="#">Ελληνικά</a>
    <a href="#">Dansk</a>
    <a href="#">Limba română</a>
    <a href="#">Polskie</a>
    <a href="#">עברית</a>
    <a href="#">Japanese</a>

    
  </div>
 
</div>

<div class="dropdown">
  <button class="dropbtn">Support Center</button>
  <div class="dropdown-content">
    <a href="#"><MdMessage/> Live Chat</a>
    <a href="#"> <MdDvr/> Ticket</a>
    <a href="#"><MdOutlineHelpOutline/> Help Center</a>
  </div>
</div>
    </div>

    
    </>
  )
}

export default Drawer
