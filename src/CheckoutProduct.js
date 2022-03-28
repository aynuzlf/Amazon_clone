    import React from 'react'
    import './CheckoutProduct.css'
    import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useStateValue } from './StateProvide';

    export default function CheckoutProduct({id,title,price,rating,image}) {
        const [{cart},dispatch]=useStateValue();

        const removeFromcart=()=>{
            dispatch({
                type:"REMOVE_FROM_CART",
                id:id,
            });

        }
    return (
        
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct__image'
            src={image} alt=""/>
            <div className='CheckoutProduct__info'>
                <p className='CheckoutProduct__title'>{title}</p>
                <p className='CheckoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
    </p>
    <div className='product__rating'>
        {
            Array(rating)
            .fill()
            .map(()=>(
            <p><StarOutlinedIcon/></p>
            ))}
    </div>
<button onClick={removeFromcart}>Remove from Cart</button>
            </div>
            </div>
    )
    }
