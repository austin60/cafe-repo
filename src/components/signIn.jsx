import React,{useState} from 'react';

function SignIn(){
	const[fname,setfName]=useState('');
	const[sname,setsName]=useState('');
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');
	const[cpassword,setCpassword]=useState('');
	
const handleSubmit=(e)=>{
		e.preventDefault();
         let numCheck=/[\d\W|_]/gi;//for name 
         let letterSymbCheck=/[a-zA-Z\W|_]/gi;//for phone number
         let emailPattern=/[a-zA-Z0-9_\-\.]+[@]+[a-z]+[\.]+[a-z]{2,3}/ //email
         let siFname=document.getElementById('si-fname');
         let siSname=document.getElementById('si-sname');
		 let siEmail=document.getElementById('si-email');
		 let siPass1=document.getElementById('si-pass1');
		 let siPass2=document.getElementById('si-pass2');
         let siError=document.getElementById('si-error');

             if (siFname.value==""||numCheck.test(siFname.value)==true)
              {
				siError.style.display='block';
                siError.innerHTML="*Don't use number or special character in name field";
				siFname.setFocus();
              }
			else if(siSname.value==""||numCheck.test(siSname.value)==true)
			  {
				siError.style.display='block';
				siError.innerHTML="*Don't use number or special character in name field";
				siSname.setFocus();
			  }
			  else if(siEmail.value==""||emailPattern.test(siEmail.value)!=true)
			  {
				  siError.style.display='block';
				  siError.innerHTML="Invalid Email";
				  siPass1.setFocus();
			   }
			else if(siPass1.value<10)
			  {
				siError.style.display='block';
				siError.innerHTML="*Password needs to be longer than 8 characters";
			    siPass1.setFocus();
			  }
			else if(siPass1.value!==siPass2)
			  {
				siError.style.display='block';
				siError.innerHTML="*Passwords do not match";
			    siPass1.setFocus();
			  }
			
			
	}
	return(
		<form action="" className="signIn" onSubmit={handleSubmit}>
		<div>
			<h4>Create Account</h4>
		<label htmlFor="">First Name</label>
		<input type="text" className="form-control" value={fname} id='si-fname' placeholder="first name" onChange={(e)=>setfName(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="">Second Name</label>
		<input type="text" className="form-control" value={sname} id='si-sname' placeholder="second name"onChange={(e)=>setsName(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="">E-Mail</label>
		<input type="text" className="form-control" value={email} id='si-email' placeholder="emailexample@xmail.com"onChange={(e)=>setEmail(e.target.value)}/>
		</div>
		<div>
		<label htmlFor="">Password</label>
		<input type="password" className="form-control" value={password} id='si-pass1' placeholder=""onChange={(e)=>setPassword(e.target.value)} />
		</div>
		<div>
		<label htmlFor="">Confirm Password</label>
		<input type="password" className="form-control" value={cpassword} id='si-pass2' placeholder=""onChange={(e)=>setCpassword(e.target.value)}/>
		</div>
		<div id="si-error">error</div>
		<div className="signin-btn" >
			<button className="btn btn-primary m-2" type="submit">Create Account</button>
		</div>
		
		</form>
		)
}
export default SignIn;