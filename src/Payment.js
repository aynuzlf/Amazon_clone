import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvide';
import "./Payment.css"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

export default function Payment() {
    const [{cart,user},dispatch]=useStateValue();
    const stripe=useStripe();
    const element=useElements()

    const getCarttotal=(cart)=>
    cart?.reduce((amount,item)=>item.price+amount,0);

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout(<Link to="/Checkout">{cart?.length}items</Link>)
            </h1>
        <div className='payment__section'>
        <div className='payment__title'>
            <h3>Delivery Address</h3>
        </div>
        <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chigago,IL</p>
        </div>
        </div>


        <div className='payment__section'>
        <div className='payment__title'>
            <h3>Review items and Delivery</h3>
        </div>
        <div className='payment__items'>
        {cart.map((item)=>(
    <CheckoutProduct
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
    />
 ))}
        </div>
        </div>
        <div className='payment__section'>
        <div className='payment__title'>
            <h3>payment method</h3>
     </div>
     <div className='payment__details'>
         <form>
             <CardElement/>
             <div className='payment__priceContainer'>
             <CurrencyFormat 
 renderText={(value)=><h3>oreder total :{value}</h3>}
 decimalScale={2}
 value={getCarttotal(cart)}
 displayType={"text"}
 thousandSeparator={true}
 prefix={"$"}
/>
             </div>
         </form>
     </div>
    </div>
    </div>
    </div>
  )
}
