import React from 'react'
import "../Checkout/Checkout.css"
import Subtotal from '../Subtotal/Subtotal'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="https://www.justuno.com/wp-content/uploads/2017/08/mind_body_green_notification_bar-1024x67.png" alt="" />
                <div>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkout_right">
                  <Subtotal/> 
            </div>
        </div>
    )
}

export default Checkout