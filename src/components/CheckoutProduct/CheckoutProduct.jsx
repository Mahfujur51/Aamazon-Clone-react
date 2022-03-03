import React from 'react'
import { useStateValue } from '../../StateProvider'
import "../CheckoutProduct/CheckoutProduct.css"

export const CheckoutProduct = ({id,title,price,rating,image}) => {

    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })

    }
  return (
    <div className='checkOutProduct'>
        <img className='checkoutProduct_image' src={image} alt="" />
        <div className="checkOutProduct_info">
            <p className='checkOutProduct_title'>{title}</p>
            <p className='checkOutProduct_price'>

                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkOutProduct_rating'>
                {Array(rating).fill().map((_,i)=>(<p key={i}>⭐</p>))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}
