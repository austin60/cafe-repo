import Navbar from './navbar';
import Smallf from './mini-footer';
import SignIn from './signIn';
import React,{useState}from 'react';
function AccPg(){
    return(
        <div id='account-page'>
          <Navbar/>
          <div className='accContent'>
           <div className='accMenu'>
            <ul>
                <li><a href=""><button className='btn btn-warning'>Login</button></a></li>
                <li><a href=""><button className='btn btn-warning'>Sign In</button></a></li>
                <li><a href=""><button className='btn btn-warning'>Get Quote</button></a></li>
                <li><a href=""><button className='btn btn-warning'>History</button></a></li>
                <li><a href=""><button className='btn btn-warning'>Deposit</button></a></li>
                <li><a href=""><button className='btn btn-warning'>Logout</button></a></li>
            </ul>
           </div>
           <div className='accCats'>
             <SignIn/>
           </div>
          </div> 
          <Smallf/>
        </div>
    )
}
export default AccPg;