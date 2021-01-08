import React, { Component } from "react";
import "./index.css";

class Cart extends Component {

    removeFromCart = (productItem)=>{
        this.props.onItemRemove && this.props.onItemRemove(productItem);
    }
    render() {
        const {show} = this.props;
        return (
            <>
            {show &&
                <div className="cart-container">
                    {this.props.list.map((productItem) => {
                        return (
                            <div className="product-in-cart" key={productItem.id}>
                                <p>{productItem.name}</p>
                                <p>{productItem.price}</p>
                                {/* {productItem.hasOff && <p>productItem.price</p>} */}
                                <button className="btn-remove" onClick={() => this.removeFromCart(productItem)}>Remove Item</button>
                            </div>
                        )
                    })}
                </div>}
            </>
        )
    }
}

export default Cart;