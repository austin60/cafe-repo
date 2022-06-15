import NavBar from './navbar';
import Footer from './footer';
import Review from './review';
import React,{Component} from 'react';
class ContactPg extends Component{
 render()
 {
    return(
        <div id='contact-page'>
          <NavBar/>
          <div id='review-section'>
           <Review/>
           <div id='subscribe'>
            <h2>Get News Letter</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur 
               odio eveniet iusto, magni tempore velit consectetur 
               odio eveniet iusto, magni tempore.</p>
               <button className='btn btn-warning'>Subcribe</button>
           </div>
          </div>
          <Footer/>
        </div>
    )
}
}
export default ContactPg;
