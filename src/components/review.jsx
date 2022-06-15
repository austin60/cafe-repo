
import React,{Component } from 'react';
		class Review extends Component{
		 state = {name:"Austin Auro", about:"resident, Umoja"};
		 render() {
		 	const{name,about}=this.state;
		 return (
	<div className="review-card">
 	  <div className="person-id">
 	     <div className="person-id-img">
 	      <img src="https://cdn.vox-cdn.com/thumbor/4y2s48tJaD0AMtpKIT5B5u3mpsQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23352422/003_MoonKnight_KA_R2_JLY_C15_IH_W3.0_ALT_IG_Mech2.jpg" alt="img here" />
 	     </div>
 	     <div className="person-id-name">
 	       <b><em>{name}</em></b>
 	       <p><i>{about}</i></p>
 	      
 	     </div>
 	</div>
 	<hr />
 	<div className="person-comment">
	
 	<p>quis nostrud ...exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
 	</div>
 </div>
		 	)
		 }
		}
		export default Review;
	