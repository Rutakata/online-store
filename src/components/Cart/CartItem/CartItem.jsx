import React, { useEffect } from "react";
import ParamsItem from "../../ClothesDetails/ParamsItem/ParamsItem";
import style from "./CartItem.module.css";


const CartItem = ({cartItemData}) => {
    useEffect(() => {
        console.log(cartItemData);
    }, [])

    return cartItemData.data ? 
    <div className={style.container}>
        <div className={style.container__imageWrapper}>
            <img src={cartItemData.data.images[0]} alt="Product" className={style.container__imageWrapper_image} />
        </div>
        <div className={style.container__clothesInfo}>
            <h4 className={style.container__clothesInfo__name}>{cartItemData.data.name}</h4>
            <p className={style.container__clothesInfo__material}>
                {cartItemData.data.material.charAt(0).toUpperCase() + cartItemData.data.material.slice(1)}
            </p>  
            <p className={style.container__clothesInfo__company}>
                {cartItemData.data.company.charAt(0).toUpperCase() + cartItemData.data.company.slice(1)}
            </p>  
        </div>
        <div className={style.container__params}>
            {Object.keys(cartItemData.params).map(key => <ParamsItem value={cartItemData.params[key]} param={key} classType="container__clothesInfo__params_item">{cartItemData.params[key]}</ParamsItem>)}
        </div>
        <div className={style.container__price}>
            {cartItemData.data.price}$*{cartItemData.count}={cartItemData.data.price*cartItemData.count}$
        </div>
    </div>
    : <div>Loading...</div>
}

export default CartItem;