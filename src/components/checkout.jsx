import React,{Component } from 'react';

		class CheckOut extends Component{
		 state = {total:3400}
		 render() {
		 	const{total}=this.state;
		 return (
		 	<div className="container-fluid checkout">
              <div className="upper-pay">
		 		<div className="payment-total">
		 		
		 		<div className="input-group mb-3 m-2 total">
                  <span className="input-group-text">Total Ksh</span>
                  <input type="text" className="form-control" value={total} />
                  
                </div>
		 		</div>

		 		<div className="payment-method">
		 		<select className="form-control form-select m-2" >
                   <option selected id="selected">Payment Mode</option>
                   <option value="1">M-Pesa</option>
                   <option value="2">On Arrival</option>
                   <option value="3">My App Account</option>
                   <option value="3">Claim Voucher</option>
                </select>
		 		</div>
              </div>
		 		<div className="lower-pay">
		 			<button className="btn btn-success m-2">Place Order</button>
		 			<button className="btn btn-danger m-2">Cancel Order</button>
		 		</div>
		 	</div>
		 	)
		 }
		}
		export default CheckOut;
