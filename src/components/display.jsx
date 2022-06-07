import React,{Component } from 'react';
		class Display extends Component{
		 state = {food:"Chicken Masala",price:1000, src:"imag.jpg"};
		 render() {
		 	const{food,price,src}=this.state;
		 return (
		 	<div className="item-display">
			   <div className="item-image">
			   <img src="https://cdn.vox-cdn.com/thumbor/4y2s48tJaD0AMtpKIT5B5u3mpsQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23352422/003_MoonKnight_KA_R2_JLY_C15_IH_W3.0_ALT_IG_Mech2.jpg" alt="img here" />
			   </div>
			   <div className="item-desc">
			     <div className="item-price">
			       <em>{food}</em>
			       <p><b>ksh {price}</b></p>
			     </div>
			   <div className="purchase-btn">
			      <button className="btn btn-success btn-sm">Add to Order</button>
			   </div>
			</div>

		</div>)
		 }
		}
		export default Display
	