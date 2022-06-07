import React,{Component } from 'react';
		class Counter extends Component{
		 state = {count:5,food:"Chiken"};
		 handleAdd=()=>{
		 	this.setState(prevState=>({count:prevState.count+1}))
		 }
		  handleReduce=()=>{
		  	if(this.state.count>0){
		 	this.setState(prevState=>({count:prevState.count-1}))
		 	}
		 	else if(this.state.count<=0){
             this.setState({count:0})
		 	}
		 }
		 render() {
		 	const{food,count}=this.state;
		 return (
		 	<div className="container counter">
		 		<div className="item">
		 		<h6>{food}</h6>
		 		<span class="badge bg-warning"><h6>{count}</h6></span>
		 		</div>
		 		<div className="manage">
		 		<button type="button" class="btn btn-primary" onClick={this.handleAdd}>+</button>
                <button type="button" class="btn btn-secondary" onClick={this.handleReduce}>-</button>
                <button type="button" class="btn btn-danger">Remove</button>
		 		</div>
		 	</div>
		 	)
		 }
		}
		export default Counter;

