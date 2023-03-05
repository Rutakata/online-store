import React from "react";
import CartItem from "./CartItem";


const Cart = ({cartItems}) => {
    return Object.keys(cartItems).length > 0 
    ? <div>{ Object.keys(cartItems).map(key => <CartItem cartItemData={cartItems[key]} />) }</div>
    : <div>Your cart is empty</div>
}

export default Cart;