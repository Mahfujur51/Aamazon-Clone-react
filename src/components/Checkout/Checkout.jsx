import React from "react";
import { useStateValue } from "../../StateProvider";
import "../Checkout/Checkout.css";
import { CheckoutProduct } from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://www.justuno.com/wp-content/uploads/2017/08/mind_body_green_notification_bar-1024x67.png"
                    alt=""
                />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
