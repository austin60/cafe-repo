import React,{useState} from 'react';

function Deposit(){
    const[amnt, setAmnt]=useState('')

    const handleDepo=(e)=>{
        e.preventDefault();
        let letterSymbCheck=/[a-zA-Z\W|_]/gi;//number
        let depoInp=document.getElementById('depoVal');
        let dErr=document.getElementById('depoErr');

        if(depoInp.value==""||letterSymbCheck.test(depoInp.value)==true){
            dErr.style.display='block';
            dErr.innerHTML="Wrong value"
        }
     }
    return(
 <div className='depo-form'>   
 <form action="" onSubmit={handleDepo}>
 <h4>Deposit</h4>
    <label htmlFor="amount">Amount</label>
     <input type="text" className='form-control' id='depoVal' placeholder='amount in ksh' 
     value={amnt} onChange={(e)=>setAmnt(e.target.value)} />
         <div id="depoErr">error</div>
                <button className='btn btn-success m-2' type='submit'>Deposit</button>
            </form>
        </div>
    )
}
export default Deposit; 