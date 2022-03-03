import React from "react";
import "../Subtotal/Subtotal.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                value={2456981}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => (<>
                    <p>SubTotal(0 items:)<strong>0</strong></p>
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
