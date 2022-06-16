import React,{useState} from 'react';

function Deposit(){
    const[amnt, setAmnt]=useState('')
    return(
 <div className='depo-form'>   
 <form action="">
 <h4>Deposit</h4>
    <label htmlFor="amount">Amount</label>
     <input type="text" className='form-control' placeholder='amount in ksh' 
     value={amnt} onChange={(e)=>setAmnt(e.target.value)} />
                <button className='btn btn-success m-2'>Deposit</button>
            </form>
        </div>
    )
}
export default Deposit; 