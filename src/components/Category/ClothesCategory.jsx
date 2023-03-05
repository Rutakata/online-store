import React from "react";
import ClothesCategoryItem from "./ClothesCategoryItem/ClothesCategoryItem";
import FilterContainer from "./Filter/FilterContainer";
import style from "./ClothesCategory.module.css";


const ClothesCategory = ({clothes, isLoading}) => {
    return <div className={style.container}>
        <FilterContainer className={style.container__filterWrapper} />
        {!isLoading ? 
            <div className={style.container__clothesWrapper}>
                {Object.keys(clothes).map((key) => <ClothesCategoryItem clothesData={clothes[key]} key={key}/>)}
            </div>
            : <div>Loading...</div>
        }
        
    </div>
}

export default ClothesCategory;