import Navbar from './navbar';
import Smallf from './mini-footer';
import SignIn from './signIn';
import Login from './login';
import Deposit from './deposit';
import Voucher from './voucher';
import React,{useState}from 'react';
function AccPg(){
    return(
        <div id='account-page'>
          <Navbar/>
          <div className='accContent'>
          
           <div className='accCats'>
            <div id='login-link'><Login/></div>
            <div id='signin-link'><SignIn/></div> 
            <div id='depo-link'><Deposit/></div>
            <div id='voucher-link'><Voucher/></div> 
           </div>
          </div> 
          <Smallf/>
        </div>
    )
}
export default AccPg;