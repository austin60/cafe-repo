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

 <nav className="navbar sticky-top">
  <label className="navbar-brand" href="#" id="logo">Logo</label>
   <form className="d-flex" id="form">
      <input id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button id="search-btn" className="btn btn-outline-warning" type="submit"><HiOutlineSearch fontSize="1 em"/></button>
    </form>
  <ul id="unordered">
  
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/home">My Order</Link><div id="dot"></div> </li>
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


 
