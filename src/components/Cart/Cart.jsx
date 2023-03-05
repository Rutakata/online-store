import React from "react";
import CartItem from "./CartItem/CartItem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";


const Cart = ({cartItems}) => {
    return Object.keys(cartItems).length > 0 
    ? <div className={style.container}>{ Object.keys(cartItems).map(key => <CartItem cartItemData={cartItems[key]} key={key} />) }</div>
    : <div className={style.emptyCart}>
        <div>
            <AiOutlineShoppingCart size={40}/> 
            Your cart is empty
        </div>
        <Link to='/home' className={style.emptyCart__homeLink}>Go to home page</Link>
    </div>
}

export default Cart;