import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsInfo } from "../../store/cartReducer";
import Cart from "./Cart";


const CartContainer = () => {
    const { cartItems, isLoading } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartItemsInfo(cartItems));
    }, [dispatch])

    return !isLoading ? <Cart cartItems={cartItems} /> : <div>Loading...</div>
}

export default CartContainer;