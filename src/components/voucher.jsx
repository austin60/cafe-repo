import React,{useState} from 'react';

function Voucher(){
    const[claim, setClaim]=useState('');
    const[voucher, setVoucher]=useState(4000);
    return(
 <div className='depo-form'>   
 <form action="">
 <h4>Voucher</h4>
    <h5>Worth:{voucher}</h5>

     <input type="text" className='form-control' placeholder='amount  to claim' 
     value={claim} onChange={(e)=>setClaim(e.target.value)} />
                <button className='btn btn-warning m-2'>Redeem</button>
            </form>
        </div>
    )
}
export default Voucher; 