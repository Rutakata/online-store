import React from "react";
import { Link } from "react-router-dom";
import style from "./ClothesCategoryItem.module.css";


const ClothesCategoryItem = ({clothesData}) => {
    return <div className={style.wrapper}>
        <img src={clothesData.images[0]} alt={clothesData.name} className={style.wrapper__image} />
        <h2 className={style.wrapper__clothesName}>{clothesData.name}</h2>
        <p className={style.wrapper__price}>Price: {clothesData.price}$</p>
        <Link to={`/product/${clothesData.id}`} className={style.wrapper__detailsButton}>Details</Link>
    </div>
}

export default ClothesCategoryItem;