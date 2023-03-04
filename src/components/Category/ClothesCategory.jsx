import React from "react";
import ClothesCategoryItem from "./ClothesCategoryItem/ClothesCategoryItem";
import FilterContainer from "./Filter/FilterContainer";
import style from "./ClothesCategory.module.css";


const ClothesCategory = ({clothes, isLoading}) => {
    return <div className={style.container}>
        <FilterContainer className={style.container__filterWrapper} />
        {!isLoading ? 
            <div className={style.container__clothesWrapper}>
                {clothes.map((item) => <ClothesCategoryItem clothesData={item} key={item.name}/>)}
            </div>
            : <div>Loading...</div>
        }
        
    </div>
}

export default ClothesCategory;