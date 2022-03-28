import React from 'react'
import "./Product.css"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useStateValue } from './StateProvide';
export default function Product({id,title,price,rating,image}) {
  const [{cart},dispatch]=useStateValue();
  // console.log('the cart is',cart)
  const addTocart=()=>{
    dispatch ({
      type:"ADD_TO_CART",
      item:{
        id: id,
        title: title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }
  return (
    <div className='product'>
        <div className='product__info'>
<p>{title}</p>
<p className='product__price'>
<small >$</small>
<strong>{price}</strong>
{/* <sub className='superscript'>99</sub> */}
</p>
<div className='product__rating'>
    {
        Array(rating)
        .fill()
        .map(()=>(
        <p><StarOutlinedIcon/></p>
    
        ))
    }
</div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addTocart} >Add to cart</button>
    </div>
  )
}
