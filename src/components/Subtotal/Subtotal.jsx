import React from "react";
import "../Subtotal/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
    const [{basket},dispatch]=useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (<>
                    <p>SubTotal({basket.length} items:)<strong>{value}</strong></p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This Order contains gift
                    </small>
                </>)}
            />
            <button>Proceed To Checkout</button>

        </div>
    );
};

export default Subtotal;
