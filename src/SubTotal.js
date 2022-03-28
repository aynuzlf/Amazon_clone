import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvide';
import { useNavigate } from 'react-router-dom';

export default function SubTotal() {
  const history=useNavigate()

    const getCarttotal=(cart)=>
    cart?.reduce((amount,item)=>item.price+amount,0);

    const [{cart},dispatch]=useStateValue();

  return (
    <div className='subtotal'>
 <CurrencyFormat 
 renderText={(value)=>(
     <div>
         <p>
subtotal({cart.length},items):<strong>{value}</strong>
         </p>
         <small className='subtotal__gift'>
             <input type="checkbox"/> this order contains a gift
         </small>
         </div>
 )} 
 decimalScale={2}
 value={getCarttotal(cart)}
 displayType={"text"}
 thousandSeparator={true}
 prefix={"$"}

 />
 <button onClick={(e)=>history.push("/payment")} >proceed to checkout</button>

    </div>
  )
}
