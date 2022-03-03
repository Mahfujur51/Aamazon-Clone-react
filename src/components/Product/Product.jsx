import React from 'react'
import { useStateValue } from '../../StateProvider'
import '../Product/Product.css'

const Product = ({id,title,price,rating,image}) => {

  const [{basket},dispatch]=useStateValue();
  console.log(basket);

  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET", 
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image
      }
    })
  }
  return (
    <div className='product'>
        <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>(
                        <p key={i}>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} alt="" />
       <button  onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}

export default Product