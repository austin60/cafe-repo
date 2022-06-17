import React,{useState} from 'react';

function Voucher(){
    const[claim, setClaim]=useState('');
    const[voucher, setVoucher]=useState(4000);
     const Redeem=(e)=>{
        e.preventDefault();
        let letterSymbCheck=/[a-zA-Z\W|_]/gi;//number
        let redeemInp=document.getElementById('v-redeem');
        let subRedeem=document.getElementById('vredeem');

        if(redeemInp.value==""||letterSymbCheck.test(redeemInp.value)==true){
            subRedeem.style.display='block';
            subRedeem.innerHTML="Wrong value"
        }
     }
    return(
 <div className='depo-form'>   
 <form action="" onSubmit={Redeem}>
 <h4>Voucher</h4>
    <h5>Worth:{voucher}</h5>

     <input type="text" className='form-control' id="v-redeem" placeholder='amount  to claim' 
     value={claim} onChange={(e)=>setClaim(e.target.value)} />
     <div id="vredeem">error</div>
                <button className='btn btn-warning m-2' type="submit">Redeem</button>
            </form>
        </div>
    )
}
export default Voucher; 