import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./ClothesCategoryItem.module.css";


const ClothesCategoryItem = ({clothesData}) => {
    const [showDetailsButton, setShowDetailsButton] = useState(false);

    const handleDetailsButton = () => {
        setShowDetailsButton(!showDetailsButton);
    }

    return <Link className={style.wrapper} 
                onMouseEnter={handleDetailsButton} 
                onMouseLeave={handleDetailsButton} 
                to={`/product/${clothesData.id}`}>
        <img src={clothesData.images[0]} alt={clothesData.name} className={style.wrapper__image} />
        <h2 className={style.wrapper__clothesName}>{clothesData.name}</h2>
        <p className={style.wrapper__price}>Price: {clothesData.price}$</p>
        {
            showDetailsButton ? 
            <button className={style.wrapper__detailsButton}>Details</button>
            : null
        }
    </Link>
}

export default ClothesCategoryItem;