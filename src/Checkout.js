import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvide';
import SubTotal from './SubTotal'

export default function Checkout() {
  const [{cart},dispatch]=useStateValue();

  return (
    <div className='checkout'>
<div className='checkout__left'>
 <img
 className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/EA/RTBLP/SLSM_Amazon_Outlet_Desktop_1500x300.jpg'alt=''/>
 <h3>Hello</h3>
 <h2 className='checkout__title'>Your Shoping Cart</h2>
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
<div className='checkout__right' >
<SubTotal/>
</div>
    </div>
  )
}
