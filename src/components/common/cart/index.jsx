import React from "react";
import "./index.css";

const Cart = ({ onItemRemove, show, list }) => {

    const removeFromCart = (productItem) => {
        onItemRemove && onItemRemove(productItem);
    }
    return (
        <>
            {show &&
                <div className="cart-container">
                    {list.map((productItem) => {
                        return (
                            <div className="product-in-cart" key={productItem.id}>
                                <p>{productItem.name}</p>
                                <p>{productItem.price}</p>
                                {/* {productItem.hasOff && <p>productItem.price</p>} */}
                                <button className="btn-remove" onClick={() => removeFromCart(productItem)}>Remove Item</button>
                            </div>
                        )
                    })}
                </div>}
        </>
    )
}

export default Cart;