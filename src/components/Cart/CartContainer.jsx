import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsInfo } from "../../store/cartReducer";
import Cart from "./Cart";


const CartContainer = () => {
    const { cartItems } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartItemsInfo(cartItems))
    }, [dispatch])

    return <Cart cartItems={cartItems} />
}

export default CartContainer;