import React,{useState} from 'react';
import './style.css';

import { HiMenu,HiOutlineSearch } from "react-icons/hi";
import { ImCross } from "react-icons/im";


function NavBar(){
  function  Show(){
  document.getElementById('unordered').classList.toggle('show');
}
	return(

 <nav class="navbar">
  <label class="navbar-brand" href="#" id="logo">Logo</label>
   <form class="d-flex" id="form">
      <input id="search"class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button id="search-btn" class="btn btn-outline-secondary" type="submit"><HiOutlineSearch fontSize="1 em"/></button>
    </form>
  <ul id="unordered">
  
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">My Order</a></li>
      <li><a href="#">Account</a></li>
      <li><a href="#">Contact Us</a></li>
 
  </ul>

  <span onClick={Show}>
    < HiMenu fontSize="1.5em" />
  </span>
  <script>
    
  </script>
  
</nav>
  

		)
}
export default NavBar;


 
