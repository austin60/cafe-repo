import NavBar from './navbar';
import Footer from './footer';
import React,{Component} from 'react';
class ContactPg extends Component{
 render()
 {
    return(
        <div id='contact-page'>
          <NavBar/>
          <Footer/>
        </div>
    )
}
}
export default ContactPg;
