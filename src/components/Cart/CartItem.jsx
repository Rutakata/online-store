import React from "react";


const CartItem = ({cartItemData}) => {
    return <div>
        <h3>{cartItemData.data.name}</h3>
        <p>{cartItemData.data.price}</p>
    </div>
}

export default CartItem;