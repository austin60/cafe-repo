import React,{useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
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
  
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/home">My Order</Link></li>
      <li><Link to="/account">Account</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
 
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


 
