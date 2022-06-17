import React,{useState} from 'react';

function Login(){
	const[name,setName]=useState('');
	const[password,setPassword]=useState('');


	return(
		<form className="login-form" >
		<div>
		<h4>Login</h4>
		<label htmlFor="">Name</label>
		<input type="text" className="form-control" id='fm-name' onChange={(e)=> setName(e.target.value)} value={name}/>
		</div>
		<div>
		<label htmlFor="">Password</label>
		<input type="password" className="form-control" id='fm-pass' onChange={(e)=> setPassword(e.target.value)} value={password}  />
		</div>
		<div className="login-btn">
			<button className="btn btn-primary m-2" type="submit">Login</button>
		</div>
		<div id="error">error</div>
		</form>
		)
}
export default Login;