import React,{Component } from 'react';
		class Display extends Component{
		 state = {
			food:this.props.display.food,
			price:this.props.display.price, 
			srcimg:this.props.display.srcimg
		  };
		 render() {
		 	const{food,price,srcimg}=this.state;
		 return (
		 	<div className="item-display">
			   <div className="item-image">
			   <img src={srcimg} alt="img here" />
			   </div>
			   <div className="item-desc">
			     <div className="item-price">
			       <em>{food}</em>
			       <p><b>ksh {price}</b></p>
			     </div>
			   <div className="purchase-btn">
			      <button className="btn btn-warning btn-sm">Add to Order</button>
			   </div>
			</div>

		</div>)
		 }
		}
		export default Display
	