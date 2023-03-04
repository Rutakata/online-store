import React from "react";
import style from "./AddToCartButton.module.css";


const AddToCartButton = ({inStock, checkAuthorization}) => {
    return <button className={inStock ? style.addToCart : style.addToCart_disabled} 
                   onClick={checkAuthorization}
                   disabled={!inStock}>
        {inStock ? "Add to cart" : "Not available now"}
    </button>
}

export default AddToCartButton;