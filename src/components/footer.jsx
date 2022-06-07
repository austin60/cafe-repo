import React,{useState} from 'react';
import { FaInstagramSquare,FaFacebookSquare,FaTwitterSquare,FaPinterest } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Footer(){
	return(
		<div className="containter-fluid footer">
		<div className="upper-about">
		<div className="info company">
		<span className=" navbar-brand">LoGo</span>
		<p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
           consequat.</p>
		</div>
		<div className="info adress">
		<h5>Adress</h5>
		<ul>
			<li>LoGo ltd</li>
			<li>486 Moi-Drive</li>
			<li>Umoja, Nairobi</li>
			<li>07043687943</li>
		</ul>
		</div>
		<div className="info navigator">
		<h5>Navigation</h5>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Purchase</a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Q&A</a></li>
			<li><a href="#">Terms & Conditions</a></li>
		</ul>
		</div>
		</div>
		<hr/>
		<div className="lower-about">
		<div className="socials">
		<h6>Contact Us</h6>
		<ul>
			<li><a href="#"><FaInstagramSquare fontSize="1.5em"/></a></li>
			<li><a href="#"><FaFacebookSquare fontSize="1.5em"/></a></li>
			<li><a href="#"><FaTwitterSquare fontSize="1.5em"/></a></li>
			<li><a href="#"><FaPinterest fontSize="1.5em"/></a></li>
			<li><a href="#"><SiGmail  fontSize="1.5em"/></a></li>
		</ul>

		</div>
		<div className="copyright">
		<p>© 2022 Copyright: <a href="#">Austin'Studio</a></p>
		</div>	
			
		</div>	
		</div>
		)
}
export default Footer;