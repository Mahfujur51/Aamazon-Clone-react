import React from 'react'
import '../Product/Product.css'

const Product = ({title,price,rating,image}) => {
    console.log(title)
  return (
    <div className='product'>
        <div className="product_info">
            <p>Lorem ipsum</p>
            <p className='product_price'>
                <small>$</small>
                <strong>11.96</strong>
            </p>
            <div className='product_rating'>
                 <p>⭐</p>
            </div>
        </div>
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg" alt="" />
       <button > Add to Basket</button>
    </div>
  )
}

export default Product