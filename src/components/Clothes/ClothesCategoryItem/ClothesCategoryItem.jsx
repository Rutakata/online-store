import React from "react";
import style from "./ClothesCategoryItem.module.css";


const ClothesCategoryItem = ({clothesData}) => {
    return <div className={style.wrapper}>
        <h2 className={style.wrapper__clothesName}>{clothesData.name}</h2>
        <p>{clothesData.price}$</p>
        <p>{clothesData.type}</p>
        <p>{clothesData.company}</p>
    </div>
}

export default ClothesCategoryItem;