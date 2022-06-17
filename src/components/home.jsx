import NavBar from './navbar';
import Smallf from './mini-footer';
import {Link} from 'react-router-dom';
import React,{useState} from 'react';

function Home(){
	return(
<div className="cont" id='home'>
  <NavBar/>
  <div id="home-intro">
    <h2>Elevate Your Food <br />Expirience</h2>
    <div  id='homeBtn'>
    <button className='btn'>Get Quote</button>
    <button className='btn btn-warning'><Link to="/menu">View Menu</Link></button>
    </div>
  </div>
  <Smallf/>
</div>
    )
    }
    export default Home;