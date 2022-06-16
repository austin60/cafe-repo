import React,{useState} from 'react';

function SignIn(){
	const[fname,setfName]=useState('');
	const[sname,setsName]=useState('');
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');
	const[cpassword,setCpassword]=useState('');
	
	return(
		<form action="" className="signIn">
		<div>
			<h4>Create Account</h4>
		<label htmlFor="">First Name</label>
		<input type="text" className="form-control" value={fname} placeholder="first name" onChange={(e)=>setfName(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="">Second Name</label>
		<input type="text" className="form-control" value={sname} placeholder="second name"onChange={(e)=>setsName(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="">E-Mail</label>
		<input type="text" className="form-control" value={email} placeholder="emailexample@xmail.com"onChange={(e)=>setEmail(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="">Password</label>
		<input type="password" className="form-control" value={password} placeholder=""onChange={(e)=>setPassword(e.target.value)} />
		</div>
		<div>
		<label htmlFor="">Confirm Password</label>
		<input type="password" className="form-control" value={cpassword} placeholder=""onChange={(e)=>setCpassword(e.target.value)}/>
		</div>
		<div className="signin-btn" >
			<button className="btn btn-primary m-2" type="submit">Create Account</button>
		</div>
		</form>
		)
}
export default SignIn;